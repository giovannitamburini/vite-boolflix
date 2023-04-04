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

    axios.get(this.store.ApiCall).then((res) => {

      // eguaglio l'array ListMovies, dello store, all array che otteniamo dalla API call
      this.store.ListMovies = res.data.results;

      // esempio
      console.log(this.store.ListMovies);

      this.store.loading = false;
    });

    axios.get(this.store.ApiSeriesCall).then((response) => {

      this.store.ListSeries = response.data.results;

      (console.log(this.store.ListSeries));

      this.store.loadingSeries = false;
    })
  },

  methods: {

    search() {
      this.searchMovieTitle();
      this.searchSeriesTitle();

      this.store.InputValue = '';
      this.store.creditsShow = false;
    },

    //meglio chiamarlo con un nome che descriva quello che fa: searchMovieTitle
    searchMovieTitle() {
      // console.log(this.store.InputValue);

      if (this.store.InputValue.length > 0) {

        this.store.bestMovies = true;
        this.store.loading = true;

        // this.store.ApiQuery += encodeURIComponent(this.store.InputValue);

        let newApiCall = this.store.ApiCallBase + this.store.path + this.store.ApiKey + this.store.ApiQuery + encodeURIComponent(this.store.InputValue);

        console.log(newApiCall);

        axios.get(newApiCall).then((res) => {

          this.store.ListMovies = res.data.results;

          this.store.bestMovies = false;
          this.store.loading = false;

        });

        this.store.SearchValue = this.store.InputValue;
      }


    },

    searchSeriesTitle() {

      if (this.store.InputValue.length > 0) {

        this.store.bestSeries = true;
        this.store.loadingSeries = true;

        let newApiSeriesCall = this.store.ApiCallBase + this.store.pathSeries + this.store.ApiKey + this.store.ApiQuery + encodeURIComponent(this.store.InputValue);

        console.log(newApiSeriesCall);

        axios.get(newApiSeriesCall).then((response) => {

          this.store.ListSeries = response.data.results;

          this.store.bestSeries = false;
          this.store.loadingSeries = false;
        });

        this.store.SearchSeriesValue = this.store.InputValue;
      }


    },

    scrollLeftMovies() {

      let leftMovies = document.querySelector('#container-movies');
      leftMovies.scrollBy(-208, 0);
    },

    scrollRigthMovies() {
      let rightMovies = document.querySelector('#container-movies');
      rightMovies.scrollBy(208, 0);
    },

    scrollLeftSeries() {
      let leftSeries = document.querySelector('#container-series');
      leftSeries.scrollBy(-208, 0);
    },

    scrollRigthSeries() {
      let rightSeries = document.querySelector('#container-series');
      rightSeries.scrollBy(208, 0);
    },

  },
}
</script>

<template>
  <div>

    <AppHeader @search-movie="search()"></AppHeader>

    <AppMain @scroll-l-movies="scrollLeftMovies()" @scroll-r-movies="scrollRigthMovies()"
      @scroll-l-series="scrollLeftSeries()" @scroll-r-series="scrollRigthSeries()"></AppMain>

  </div>
</template>

<style lang="scss" scoped></style>
