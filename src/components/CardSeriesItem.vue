<script>

//importo la libreria delle bandiere
import "/node_modules/flag-icons/css/flag-icons.min.css";
// importo font-awesom per mostrare il voto in stelle
import '@fortawesome/fontawesome-free/css/all.css';

export default {
    data() {
        return {
            hidden: false,
        }
    },

    props: {

        series: Object,
        linkSeriesPoster: String,
    },

    computed: {

        // funzione per correggere il mismatch tra la sigla della nazionalità delle serie e quella delle bandiere
        updatedLanguage() {

            // metodo alternativo di Gabriel
            // if (this.series.original_language == 'en') {
            //     return 'gb';
            // } else if (this.series.original_language == 'ja') {
            //     return 'jb';
            // } else {
            //     return this.series.original_language
            // };

            switch (this.series.original_language) {
                case 'en':
                    return 'gb';

                case 'ja':
                    return 'jp';

                case 'zh':
                    return 'cn';

                case 'hi':
                    return 'in';

                case 'ko':
                    return 'kr';

                case 'he':
                    return 'iw';

                case 'cs':
                    return 'cz';

                default:
                    return this.series.original_language;
            };
        },

        // funzione per aggiungere la locandina della serie
        addSeriesPoster() {

            let completePosterSeriesLink = this.linkSeriesPoster + this.series.poster_path;

            // gstisco il caso in cui la serie non ha la locandina
            if (this.series.poster_path == null) {

                completePosterSeriesLink = '../no_poster.jpg';
            };

            return completePosterSeriesLink;
        },
    },

    methods: {

        // funzioni per gestire il mouse hover sulla singola card della serie, per mostrare la descrizione in sovraimpressione
        overSeries() {
            this.hidden = true;
        },

        leaveSeries() {
            this.hidden = false;
        },

    },
}
</script>

<template>
    <!-- passando sopra col mouse e uscendo dall'area della card si attivano rispettivamente la funzione overSeries e leaveSeries -->
    <div v-on:mouseover="overSeries()" v-on:mouseleave="leaveSeries()" class="container-series-item">

        <!-- src uguale al return della funzione addSeriesPoster. classe attribuita solo se hidden è uguale a true -->
        <img :src="addSeriesPoster" :class="{ hide: hidden }" class="series-poster" alt="series poster">

        <!-- descrizione serie visibile (cambia lo z-index) solo se hidden è true -->
        <ul :class="{ hidetext: hidden }">

            <li class="series-title">{{ series.name }}</li>

            <li><strong>titolo originale: </strong> {{ series.original_name }}</li>

            <!-- classe fi fi- + la lingua risultante ha lo scopo di trasformare la sigla del paase nella relativa bandiera -->
            <li><span :class="'fi fi-' + updatedLanguage"></span></li>

            <li>
                <!-- visualizzabile solo se è disponibile il voto -->
                <!-- ciclo per 5 volte, cioè per il range di voto che voglio e gli attribuisco la classe per colorare la stellina solo se il voto è maggiore all'indice del v-for -->
                <span v-show="Math.ceil(series.vote_average / 2)" v-for="(item, index) in 5"
                    :class="Math.ceil(series.vote_average / 2) > index ? 'star' : ''">
                    <i class="fa-solid fa-star"></i>
                </span>

                <!-- visualizzabile se non è disponibile un voto -->
                <span v-show="!Math.ceil(series.vote_average / 2)">voto non disponibile</span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
$sky: rgb(19, 223, 172);
$purple: rgb(170, 76, 173);

.container-series-item {
    width: 200px;
    aspect-ratio: 1/1.45;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    flex-shrink: 0;
    border-radius: 5px;

    .series-poster {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    ul {
        position: absolute;
        font-size: 1.2em;
        padding: 4px;

        .series-title {
            text-transform: uppercase;
            color: $sky;
            text-shadow: 1px 1px 0 blue, 2px 1px 0 $purple;
        }

        .star {
            color: $sky;
        }
    }
}

.hide {
    transform: scale(1.1);
    opacity: 0.15;
    transition: 0.5s;
}

.hidetext {
    z-index: 2;
}
</style>