<script>

import '@fortawesome/fontawesome-free/css/all.css'

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

    emits: [
        'scrollLMovies',
        'scrollRMovies',
        'scrollLSeries',
        'scrollRSeries',
    ],
}
</script>

<template>
    <div id="main">
        <div v-if="store.loading">
            caricamento film
        </div>
        <div v-else class="container">
            <div v-if="store.bestMovies" class="shadow"><strong>Migliori film della settimana :</strong></div>
            <div v-if="!store.bestMovies" class="shadow"><strong>film corrispondenti alla ricerca: </strong> <em>' {{
                store.SearchValue }} '</em>
            </div>

            <div class="cover">
                <button @click="$emit('scrollLMovies')" class="btn-start">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div id="container-movies">
                    <!-- creo una props per passare il singolo oggetto movies, dell'array ListMovies, al componente figlio  CardItem -->
                    <CardItem v-for="movie in store.ListMovies" :card="movie" :linkPoster="store.linkPosterBase"></CardItem>
                </div>
                <button @click="$emit('scrollRMovies')" class="btn-end">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>

            </div>
        </div>

        <div v-if="store.loadingSeries">
            caricamento serie tv
        </div>
        <div v-else class="container">
            <div v-if="store.bestSeries" class="shadow"><strong>Migliori serie tv della settimana :</strong></div>
            <div v-if="!store.bestSeries" class="shadow"><strong>serie tv corrispondenti alla ricerca: </strong> <em>' {{
                store.SearchSeriesValue }} '</em>
            </div>
            <div class="cover">
                <button @click="$emit('scrollLSeries')" class="btn-start">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div id="container-series">
                    <!-- qui dovrò creare la props come sopra ma per le serie tv -->
                    <CardSeriesItem v-for="series in store.ListSeries" :series="series"
                        :linkSeriesPoster="store.linkPosterBase"></CardSeriesItem>
                </div>
                <button @click="$emit('scrollRSeries')" class="btn-end">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
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

    .container {
        padding-bottom: 30px;
        border-bottom: 2px solid rgb(19, 223, 172);
        box-shadow: 0 3px 0 blue, 0 5px 0 rgb(170, 76, 173);
    }

    .shadow {
        @include textShadow();
        padding: 20px 0;
    }

    .cover {
        position: relative;

        .btn-start {
            position: absolute;
            z-index: 4;
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
            border: 0;
            background-color: transparent;
            font-size: 2em;
            color: rgb(19, 223, 172);
            text-shadow: 1px 1.5px 0 blue, 2px 3px 0 rgb(170, 76, 173);
            cursor: pointer;

            &:hover {
                text-shadow: 0.5px 1px 0 rgb(170, 76, 173), 1px 2px 0 blue;
            }

        }

        .btn-end {
            position: absolute;
            z-index: 4;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            border: 0;
            background-color: transparent;
            font-size: 2em;
            color: rgb(19, 223, 172);
            text-shadow: 1px 1.5px 0 blue, 2px 3px 0 rgb(170, 76, 173);
            cursor: pointer;

            &:hover {
                text-shadow: 0.5px 1px 0 rgb(170, 76, 173), 1px 2px 0 blue;
            }
        }


        #container-movies,
        #container-series {
            display: flex;
            flex-flow: row nowrap;
            gap: 8px;
            overflow-x: scroll;
            scroll-behavior: smooth;
            position: relative;
        }
    }

}

// CODICE OPZIONALE PER AGGIUNGERE L'EFFETTO SFUMATO AI LATI DEL CONTENITORE IN CUI SCORRONO LE CARTE
// &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: 0;
//     z-index: 3;
//     height: 100%;
//     width: 10%;
//     background-image: linear-gradient(90deg, #242424, transparent);
// }

// &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 3;
//     height: 100%;
//     width: 10%;
//     background-image: linear-gradient(90deg, #242424, transparent);
// }
</style>