<script>
import { store } from "../store.js";

import CardItem from "./CardItem.vue";
import CardSeriesItem from "./CardSeriesItem.vue";

export default {
    data() {
        return {
            store,
        }
    },

    components: {
        CardItem,
        CardSeriesItem,
    },

}
</script>

<template>
    <div id="main">
        <div v-if="store.loading">
            caricamento film
        </div>
        <div v-else>
            <div v-if="store.bestMovies"><strong>Migliori film della settimana :</strong></div>
            <div v-if="!store.bestMovies"><strong>risultato per la ricerca: </strong> <em>' {{ store.SearchValue }} '</em>
            </div>

            <br>

            <div id="container-card">
                <!-- creo una props per passare il singolo oggetto movies, dell'array ListMovies, al componente figlio  CardItem -->
                <CardItem v-for="movie in store.ListMovies" :card="movie"></CardItem>
            </div>
        </div>

        <br>
        <hr>
        <br>

        <div v-if="store.loadingSeries">
            caricamento serie tv
        </div>
        <div v-else>
            <div v-if="store.bestSeries"><strong>Migliori serie tv della settimana :</strong></div>
            <div v-if="!store.bestSeries"><strong>risultato per la ricerca: </strong> <em>' {{ store.SearchSeriesValue }}
                    '</em>
            </div>

            <br>

            <div id="container-series">
                <!-- qui dovrò creare la props come sopra ma per le serie tv -->
                <CardSeriesItem v-for="series in store.ListSeries" :series="series"></CardSeriesItem>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
#main {
    padding: 10px;

    #container-card,
    #container-series {
        display: flex;
        flex-flow: row wrap;
        gap: 5px;
    }
}
</style>