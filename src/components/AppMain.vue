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
        <div v-else id="container">
            <div v-if="store.bestMovies" class="shadow"><strong>Migliori film della settimana :</strong></div>
            <div v-if="!store.bestMovies" class="shadow"><strong>risultato per la ricerca: </strong> <em>' {{
                store.SearchValue }} '</em>
            </div>

            <div id="container-movies">
                <!-- creo una props per passare il singolo oggetto movies, dell'array ListMovies, al componente figlio  CardItem -->
                <CardItem v-for="movie in store.ListMovies" :card="movie" :linkPoster="store.linkPosterBase"></CardItem>
            </div>
        </div>

        <div v-if="store.loadingSeries">
            caricamento serie tv
        </div>
        <div v-else>
            <div v-if="store.bestSeries" class="shadow"><strong>Migliori serie tv della settimana :</strong></div>
            <div v-if="!store.bestSeries" class="shadow"><strong>risultato per la ricerca: </strong> <em>' {{
                store.SearchSeriesValue }}
                    '</em>
            </div>

            <div id="container-series">
                <!-- qui dovrò creare la props come sopra ma per le serie tv -->
                <CardSeriesItem v-for="series in store.ListSeries" :series="series"
                    :linkSeriesPoster="store.linkPosterBase"></CardSeriesItem>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@mixin textShadow() {
    text-transform: uppercase;
    color: rgb(19, 223, 172);
    text-shadow: 1px 1.5px 0 blue, 2px 3px 0 rgb(170, 76, 173);
}

#main {
    padding: 10px;

    #container {
        padding-bottom: 20px;
        border-bottom: 2px solid rgb(19, 223, 172);
        box-shadow: 0 3px 0 blue, 0 5px 0 rgb(170, 76, 173);
    }

    .shadow {
        @include textShadow();
        padding: 20px 0;
    }

    #container-movies,
    #container-series {
        display: flex;
        flex-flow: row nowrap;
        gap: 10px;
        overflow-x: scroll;
    }
}
</style>