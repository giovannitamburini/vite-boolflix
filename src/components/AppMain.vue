<script>
import { store } from "../store.js";

import CardItem from "./CardItem.vue";

export default {
    data() {
        return {
            store,
        }
    },

    components: {
        CardItem,
    },
}
</script>

<template>
    <div id="main">
        <div v-if="store.loading">
            caricamento risultati
        </div>
        <div v-else>
            <div v-if="store.bestMovies"><strong>Migliori film della settimana :</strong></div>
            <br>
            <!-- creo una props per passare il singolo oggetto movies, dell'array ListMovies, al componente figlio  CardItem -->
            <CardItem v-for="movie in store.ListMovies" :card="movie"></CardItem>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#main {
    padding: 10px;
}
</style>