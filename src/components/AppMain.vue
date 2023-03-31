<script>
import { store } from "../store.js";

import CardItem from "./CardItem.vue";
import SearchbarItem from "./SearchbarItem.vue";

export default {
    data() {
        return {
            store,
        }
    },

    components: {
        CardItem,
        SearchbarItem,
    },

    methods: {
        search() {
            console.log(this.store.InputValue);
        }
    }
}
</script>

<template>
    <div id="main">
        <SearchbarItem @search-movie="search()"></SearchbarItem>
        <br>
        <hr>
        <br>

        <div>
            <div><strong>Migliori film della settimana :</strong></div>
            <br>
            <!-- creo una props per passare il singolo oggetto movies, dell'array ListMovies, al componente figlio  CardItem -->
            <CardItem v-for="movies in store.ListMovies" :card="movies"></CardItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#main {
    padding: 10px;
}
</style>