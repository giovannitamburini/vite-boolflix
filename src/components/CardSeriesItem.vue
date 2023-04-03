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

    mounted() {

    },

    computed: {
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
        }
    },

    methods: {

        addSeriesPoster(series) {

            let completePosterSeriesLink = this.linkSeriesPoster + series.poster_path;

            if (series.poster_path == null) {

                completePosterSeriesLink = '../no_poster.jpg';
            };

            return completePosterSeriesLink;
        },

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
    <div v-on:mouseover="overSeries()" v-on:mouseleave="leaveSeries()" class="container-series-item">
        <div class="series-poster"><img :src="addSeriesPoster(series)" :class="{ hide: hidden }" class="series-poster"
                alt="series poster"></div>

        <ul :class="{ hidetext: hidden }">
            <li><strong>titolo:</strong> {{ series.name }}</li>
            <li><strong>titolo originale: </strong> {{ series.original_name }}</li>
            <!-- <li><strong>lingua originale: </strong> {{ series.original_language }}</li> -->
            <li><span :class="'fi fi-' + updatedLanguage"></span></li>

            <!-- correzzzione gabri -->
            <!-- <li><span :class="'fi fi-' + updatedLanguage"></span></li> -->

            <!-- <li><strong>voto: </strong> {{ Math.ceil(series.vote_average / 2) }}</li> -->
            <li><span v-for="star in Math.ceil(series.vote_average / 2)" class="star"><i
                        class="fa-solid fa-star"></i></span></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.container-series-item {
    width: 200px;
    height: 289px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    flex-shrink: 0;

    .series-poster {
        position: absolute;
        z-index: 1;
        width: 100%;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }


    ul {
        font-size: 0.8em;
        position: absolute;
        padding: 3px;

        .star {
            color: yellow;
        }
    }
}

.hide {
    transform: scale(1.1);
    opacity: 0.2;
    transition: 0.5s;
}

.hidetext {
    z-index: 2;
}
</style>