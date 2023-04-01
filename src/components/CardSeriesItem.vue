<script>
import "/node_modules/flag-icons/css/flag-icons.min.css"

import '@fortawesome/fontawesome-free/css/all.css'

export default {
    data() {
        return {

        }
    },

    props: {
        series: Object,
        linkSeriesPoster: String,
    },

    methods: {
        addFlagsSeries(language) {

            language = this.series.original_language;

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
        }
    },
}
</script>

<template>
    <div class="container-series-item">
        <ul>
            <li><img :src="addSeriesPoster(series)" class="series-poster" alt="series poster"></li>
            <li><strong>titolo:</strong> {{ series.name }}</li>
            <li><strong>titolo originale: </strong> {{ series.original_name }}</li>
            <li><strong>lingua originale: </strong> {{ series.original_language }}</li>
            <li><strong>voto: </strong> {{ Math.ceil(series.vote_average / 2) }}</li>
            <li><span v-for="star in Math.ceil(series.vote_average / 2)"><i class="fa-solid fa-star"></i></span></li>
            <li><span :class="'fi fi-' + addFlagsSeries(series.original_language)"></span></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.container-series-item {
    width: 200px;
    border: 1px solid black;
    padding: 3px;

    ul {
        .series-poster {
            width: 100%;
        }
    }
}
</style>