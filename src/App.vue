<script>

// importo axios per le API call
import axios from "axios";
// importo lo store per la condivisione di dati
import { store } from "./store.js";

export default {
  data() {
    return {
      store,
    }
  },

  created() {

    axios.get(this.store.ApiCall).then((res) => {

      // eguaglio l'array ListMovies, dello store, all array che otteniamo dalla API call
      this.store.ListMovies = res.data.results;

      // esempio
      console.log(this.store.ListMovies);
    })
  },
}
</script>

<template></template>

<style lang="scss" scoped></style>
