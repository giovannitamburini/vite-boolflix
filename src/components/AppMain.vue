<script>

import '@fortawesome/fontawesome-free/css/all.css'

import { store } from "../store.js";

import CardItem from "./CardItem.vue";
import CardSeriesItem from "./CardSeriesItem.vue";
import JumboItem from "./JumboItem.vue";
import axios from 'axios';

export default {
    data() {
        return {
            store,

            insideMovies: Boolean,
        }
    },

    components: {
        CardItem,
        CardSeriesItem,
        JumboItem,
    },

    emits: [
        'scrollLMovies',
        'scrollRMovies',
        'scrollLSeries',
        'scrollRSeries',
    ],

    created() {
        axios.get(this.store.ApiGenreCall).then((res) => {

            this.store.ListGenre = res.data.genres;

            console.log(this.store.ListGenre);
        });
    },

    methods: {

        showJumbo(category) {

            this.store.idCategory = category.id;
            this.store.JumboLinkImage = this.store.linkPosterBase + category.poster_path;
            this.store.JumboOverview = category.overview;
            this.store.JumboGenreId = category.genre_ids;

            if (this.insideMovies) {

                this.store.JumboTitle = category.title;

                let jumboApiCall = this.store.ApiCallBase + this.store.pathCreditsM + this.store.idCategory + this.store.pathCredits + this.store.ApiKey;
                axios.get(jumboApiCall).then((res) => {

                    this.store.ListCredits = res.data.cast;

                    console.log(this.store.ListCredits);
                });
            };

            if (!this.insideMovies) {

                this.store.JumboTitle = category.name;

                let jumboApiCall = this.store.ApiCallBase + this.store.pathCreditsS + this.store.idCategory + this.store.pathCredits + this.store.ApiKey;

                axios.get(jumboApiCall).then((res) => {

                    this.store.ListCredits = res.data.cast;

                    console.log(this.store.ListCredits);
                });
            };

            this.store.creditsShow = true;

            this.scroll();
        },

        scroll() {
            const showJumbo = document.getElementById('jumbotron');
            showJumbo.scrollIntoView({ behavior: 'smooth' });
        },

        selectMovie() {
            this.insideMovies = true;
        },

        selectSeries() {
            this.insideMovies = false;
        },
    },
}
</script>

<template>
    <div id="main">

        <div v-if="store.loading">
            caricamento film
        </div>
        <div v-else class="container">
            <JumboItem></JumboItem>

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
                    <CardItem v-for="movie in store.ListMovies" @click="selectMovie() + showJumbo(movie)" :card="movie"
                        :linkPoster="store.linkPosterBase">
                    </CardItem>
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
                    <CardSeriesItem v-for="series in store.ListSeries" @click="selectSeries() + showJumbo(series)"
                        :series="series" :linkSeriesPoster="store.linkPosterBase"></CardSeriesItem>
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
</style>