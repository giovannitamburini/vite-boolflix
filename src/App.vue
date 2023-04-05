<script>

// importo axios per le API call
import axios from "axios";
// importo lo store per la condivisione di dati
import { store } from "./store.js";


import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppHeader,
    AppMain,
  },

  created() {

    // API call per ottenere la lista dei film in tendenza
    axios.get(this.store.ApiCall).then((res) => {

      // eguaglio l'array ListMovies, dello store, all array che otteniamo dalla API call
      this.store.ListMovies = res.data.results;

      // booleana che gestisce la visualizzazione dei film: quando diventa falsa, si visuallizzano i risultati in pagina
      this.store.loading = false;
    });

    // API call per ottenere la lista delle serie tv in tendenza
    axios.get(this.store.ApiSeriesCall).then((response) => {

      // eguaglio l'array ListSeries, dello store, all array che otteniamo dalla API call
      this.store.ListSeries = response.data.results;

      // booleana che gestisce la visualizzazione delle seire tv: quando diventa falsa, si visuallizzano i risultati in pagina
      this.store.loadingSeries = false;
    })
  },

  methods: {

    // per comodità creo una funzione che conterrà entrambe le funzioni che effettuano le API call in base all ricerca effettuata dall'utente
    search() {

      this.searchMovieTitle();
      this.searchSeriesTitle();

      // dopo aver effettuato la ricerca svuoto il campo di input per poter effettuare una nuova ricerca
      this.store.InputValue = '';
      // imposto creditsShow su false, quando è true si visualizza un jumbotron con l'anteprima del film o della serie cliccata
      this.store.JumboShow = false;
    },

    //meglio chiamarlo con un nome che descriva quello che fa: searchMovieTitle
    searchMovieTitle() {

      // controllo che sia stato effettivamente compilato il campo di input
      if (this.store.InputValue.length > 0) {

        // cambio il valore di bestMovies, se true, visualizza la scritta 'migliori film della settimana', se impostato su false visualizza 'film corrispondenti alla ricerca'
        this.store.bestMovies = true;
        // cambio il valore di loading, impostandolo su true,nel main non visualizza i film cercati ma la scritta 'caricamento film'
        this.store.loading = true;

        // creo la stringa per effettuare la API call per quanto riguarda i film
        let newApiCall = this.store.ApiCallBase + this.store.path + this.store.ApiKey + this.store.ApiQuery + encodeURIComponent(this.store.InputValue);

        // effettuo la API call
        axios.get(newApiCall).then((res) => {

          // eguaglio l'array di oggetti, ottenuti dalla chiamata, all'array ListMovies
          this.store.ListMovies = res.data.results;
          // imposto bestMovies su false per visualizzare 'film corrisposndenti..' e non visualizzare 'migliori film...'
          this.store.bestMovies = false;
          // imposto loading su false per visualizzare i risulatati ottenuti in pagina
          this.store.loading = false;
        });

        // eguaglio SearchValue alla stringa inserita dall'utente per effettuare una ricerca, che utilizzo per visualizzarla, sia nella sezione movies, sia in quella delle series, sopra i risultati ottenuti
        this.store.SearchValue = this.store.InputValue;
      }


    },

    // funzione(come per i film) per effettuare una nuova chiamata in base a ciò che è stato inserito dall'utente nel campo di ricerca
    searchSeriesTitle() {

      // controllo che sia stato effettivamente compilato il campo di input
      if (this.store.InputValue.length > 0) {

        // cambio il valore di bestSeries, se true, visualizza la scritta 'migliori serie tv della settimana', se impostato su false visualizza 'serie corrispondenti alla ricerca'
        this.store.bestSeries = true;
        // cambio il valore di loadingSeries, impostandolo su true,nel main non visualizza le serie cercate ma la scritta 'caricamento serie'
        this.store.loadingSeries = true;

        // creo la stringa per effettuare la API call per quanto riguarda le serie
        let newApiSeriesCall = this.store.ApiCallBase + this.store.pathSeries + this.store.ApiKey + this.store.ApiQuery + encodeURIComponent(this.store.InputValue);

        // effettuo la API call per le serie
        axios.get(newApiSeriesCall).then((response) => {

          // eguaglio l'array di oggetti, ottenuti dalla chiamata, all'array ListSeries
          this.store.ListSeries = response.data.results;
          // imposto bestSeries su false per visualizzare 'serie corrisposndenti..' e non visualizzare 'migliori serie...'
          this.store.bestSeries = false;
          // imposto loadingSeries su false per visualizzare i risulatati ottenuti in pagina
          this.store.loadingSeries = false;
        });

        // eguaglio SearchValue alla stringa inserita dall'utente per effettuare una ricerca, che utilizzo per visualizzarla, sia nella sezione movies, sia in quella delle series, sopra i risultati ottenuti
        this.store.SearchSeriesValue = this.store.InputValue;
      }
    },

    // funzioni per effettuare lo scroll laterale, proporzionale alla grandezza della card che contiene il singolo film o la singola serie(200px(width) + 8px(gap))
    // scroll film verso sinistra
    scrollLeftMovies() {
      let leftMovies = document.querySelector('#container-movies');
      leftMovies.scrollBy(-208, 0);
    },
    // scroll film verso destra
    scrollRigthMovies() {
      let rightMovies = document.querySelector('#container-movies');
      rightMovies.scrollBy(208, 0);
    },
    // scroll serie verso sinistra
    scrollLeftSeries() {
      let leftSeries = document.querySelector('#container-series');
      leftSeries.scrollBy(-208, 0);
    },
    //scroll serie verso destra
    scrollRigthSeries() {
      let rightSeries = document.querySelector('#container-series');
      rightSeries.scrollBy(208, 0);
    },
  },
}
</script>

<template>
  <div>
    <!-- componente Header in cui è inserito il campo di ricerca e il button che attivano la funzione 'search' -->
    <AppHeader @search="search()"></AppHeader>

    <!-- componente Main a cui passo le funzioni per scrollare -->
    <AppMain @scroll-l-movies="scrollLeftMovies()" @scroll-r-movies="scrollRigthMovies()"
      @scroll-l-series="scrollLeftSeries()" @scroll-r-series="scrollRigthSeries()"></AppMain>

  </div>
</template>

<style lang="scss" scoped></style>
