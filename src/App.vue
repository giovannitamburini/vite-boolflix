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
    })
  },

  methods: {
    //meglio chiamarlo con un nome che descriva quello che fa: searchMovieTitle
    searchMovieTitle() {
      // console.log(this.store.InputValue);

      this.store.ApiQuery += encodeURIComponent(this.store.InputValue);

      let newApiCall = this.store.ApiCallBase + this.store.path + this.store.ApiKey + this.store.ApiQuery;

      console.log(newApiCall);

      axios.get(newApiCall).then((res) => {

        this.store.ListMovies = res.data.results;

        this.store.bestMovies = false;
        this.store.loading = false;


      })
    }
  },
}
</script>

<template>
  <div>

    <AppHeader @search-movie="searchMovieTitle()"></AppHeader>

    <AppMain></AppMain>

  </div>
</template>

<style lang="scss" scoped></style>
