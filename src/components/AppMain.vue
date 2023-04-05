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

        // effettuo una API call per ottenere la lista completa dei generi che mi servirà per ricavare il nome del genere dal codice identificativo dei generi contenuti nel singolo film/serie cliccata e mostrata nel jumbo
        axios.get(this.store.ApiGenreCall).then((res) => {

            this.store.ListGenre = res.data.genres;
        });
    },

    methods: {

        // funzione per mostrare nel jumbo l'anteprima del film/serie selezionato 
        showJumbo(category) {

            // idCategory uguale alle categorie del singolo film/seie
            this.store.idCategory = category.id;

            // gestisco il caso in cui non è disponibile la locandina nel film/serie tv
            if (category.poster_path == null) {

                this.store.JumboLinkImage = '../no_poster.jpg';

            } else {

                this.store.JumboLinkImage = this.store.linkPosterBase + category.poster_path;
            };

            // trama nel jumbo uguale alla trama(overview) del film/serie selezionato
            this.store.JumboOverview = category.overview;
            // generi nel jumbo uguale ai generi del film/serie selezionato
            this.store.JumboGenreId = category.genre_ids;

            // controllo se siamo ho cliccato un film tramite il valore della booleana 'insideMovies'
            if (this.insideMovies) {

                // titolo del film nel jumbo uguale al titolo del film selezionato
                this.store.JumboTitle = category.title;

                // creo la stringa per effettuare un API call da cui otterrò il cast del film selezionato
                let jumboApiCall = this.store.ApiCallBase + this.store.pathCreditsM + this.store.idCategory + this.store.pathCredits + this.store.ApiKey;

                // effettuo la API call per il cast del film selezionato
                axios.get(jumboApiCall).then((res) => {

                    this.store.ListCredits = res.data.cast;
                });
            };

            // controllo se siamo ho cliccato una serie tramite il valore della booleana 'insideMovies'
            if (!this.insideMovies) {

                // titolo della serie nel jumbo uguale al titolo della serie selezionata
                this.store.JumboTitle = category.name;

                // creo la stringa per effettuare un API call da cui otterrò il cast della serie selezionata
                let jumboApiCall = this.store.ApiCallBase + this.store.pathCreditsS + this.store.idCategory + this.store.pathCredits + this.store.ApiKey;

                // effettuo la API call per il cast della serie selezionata
                axios.get(jumboApiCall).then((res) => {

                    this.store.ListCredits = res.data.cast;
                });
            };

            // dopo aver effettuato la chiamata e tutte le operazioni necessarie, mostro la sezione del Jumbo
            this.store.JumboShow = true;

            // richiamo la funzione per scrollare la schermata al jumbo
            this.scroll();
        },

        // funzione per scrollare in automatico fino alla sezione del jumbo dopo aver cliccato il singolo film/serie
        scroll() {
            const showJumbo = document.getElementById('jumbotron');
            showJumbo.scrollIntoView({ behavior: 'smooth' });
        },

        // funzioni che cambiano il valore della booleana insideMovie per controllare se si è cliccato un film o una serie
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

        <!-- mostro questa sezione finchè non è stato caricato tutto correttamente -->
        <div v-if="store.loading">
            caricamento film
        </div>

        <!-- mostro questa sezione quando è stato caricato tutto correttamente -->
        <div v-else class="container">

            <!-- componenete jumbo -->
            <JumboItem></JumboItem>

            <!-- sezione mostrata solo all'apertura della pagina per i migliori film della settimana -->
            <div v-if="store.bestMovies" class="shadow"><strong>Migliori film della settimana :</strong></div>
            <!-- sezione mostrata quando effettuo la ricerca, e contiene anche la stringa inserita nel campo di input nell'header -->
            <div v-if="!store.bestMovies" class="shadow"><strong>film corrispondenti alla ricerca: </strong> <em>' {{
                store.SearchValue }} '</em>
            </div>

            <div class="cover">

                <!-- bottone freccia per scorrere i film verso sinistra -->
                <button @click="$emit('scrollLMovies')" class="btn-start">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>


                <div id="container-movies">

                    <!-- creo una props per passare il singolo oggetto movies, dell'array ListMovies, al componente figlio  CardItem -->
                    <!-- passo tramite emit la funzioni per selezionare la serie e per mostrare il Jumbo -->
                    <CardItem v-for="movie in store.ListMovies" @click="selectMovie() + showJumbo(movie)" :card="movie"
                        :linkPoster="store.linkPosterBase">
                    </CardItem>
                </div>

                <!-- bottone freccia per scorrere i film verso destra -->
                <button @click="$emit('scrollRMovies')" class="btn-end">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>

        <!-- SEZIONE SERIE TV -->

        <!-- mostro questa sezione finchè non è stato caricato tutto correttamente -->
        <div v-if="store.loadingSeries">
            caricamento serie tv
        </div>

        <!-- mostro questa sezione quando è stato caricato tutto correttamente -->
        <div v-else class="container">

            <!-- sezione mostrata solo all'apertura della pagina per le migliori serie della settimana -->
            <div v-if="store.bestSeries" class="shadow"><strong>Migliori serie tv della settimana :</strong></div>
            <!-- sezione mostrata quando effettuo la ricerca, e contiene anche la stringa inserita nel campo di input nell'header -->
            <div v-if="!store.bestSeries" class="shadow"><strong>serie tv corrispondenti alla ricerca: </strong> <em>' {{
                store.SearchSeriesValue }} '</em>
            </div>

            <div class="cover">

                <!-- bottone freccia per scorrere le serie verso sinistra -->
                <button @click="$emit('scrollLSeries')" class="btn-start">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>

                <div id="container-series">

                    <!-- creo una props per passare il singolo oggetto Series, dell'array ListSeries, al componente figlio  CardSeriesItem -->
                    <!-- passo tramite emit la funzioni per selezionare la serie e per mostrare il Jumbo -->
                    <CardSeriesItem v-for="series in store.ListSeries" @click="selectSeries() + showJumbo(series)"
                        :series="series" :linkSeriesPoster="store.linkPosterBase">
                    </CardSeriesItem>
                </div>

                <!-- bottone freccia per scorrere le serie verso destra -->
                <button @click="$emit('scrollRSeries')" class="btn-end">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
$sky: rgb(19, 223, 172);
$purple: rgb(170, 76, 173);

@mixin textShadow() {
    text-transform: uppercase;
    font-size: 1.5em;
    color: $sky;
    text-shadow: 1px 1px 0 blue, 2px 2px 0 $purple;
}

@mixin arrow() {
    position: absolute;
    top: 50%;
    z-index: 4;
    transform: translateY(-50%);
    border: 0;
    background-color: transparent;
    font-size: 2em;
    color: $purple;
    text-shadow: 1px 1.5px 0 blue, 2px 3px 0 $sky;
    cursor: pointer;

    &:hover {
        text-shadow: 0.5px 1px 0 $sky, 1px 2px 0 blue;
    }
}

#main {
    padding: 10px;

    .container {
        padding-bottom: 30px;
        border-bottom: 2px solid $purple;
        box-shadow: 0 3px 0 blue, 0 5px 0 $sky;
    }

    .shadow {
        @include textShadow();
        padding: 20px 0;
    }

    .cover {
        position: relative;

        .btn-start {
            @include arrow();
            left: 5px;
        }

        .btn-end {
            @include arrow();
            right: 5px;
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