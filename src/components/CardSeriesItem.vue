<script>

//importo la libreria delle bandiere
import "/node_modules/flag-icons/css/flag-icons.min.css"
// importo font-awesom per mostrare il voto in stelle
import '@fortawesome/fontawesome-free/css/all.css'

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

    methods: {
        addFlagsSeries(language) {

            if (language == 'en') {
                language = 'gb';
            };
            if (language == 'ja') {
                language = 'jp';
            };
            if (language == 'zh') {
                language = 'cn';
            };
            if (language == 'hi') {
                language = 'in';
            };
            if (language == 'ko') {
                language = 'kr';
            };
            if (language == 'he') {
                language = 'iw';
            };
            if (language == 'cs') {
                language = 'cz';
            }

            return language;
        },

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
            <li><span :class="'fi fi-' + addFlagsSeries(series.original_language)"></span></li>
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