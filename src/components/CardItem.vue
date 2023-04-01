<script>

import "/node_modules/flag-icons/css/flag-icons.min.css"

import '@fortawesome/fontawesome-free/css/all.css'


export default {
    data() {
        return {

        }
    },

    props: {
        card: Object,
        linkPoster: String,
    },

    methods: {
        addFlags(language) {

            language = this.card.original_language;

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
            };

            return language;
        },

        addMoviePoster(movie) {

            let completePosterLink = this.linkPoster + movie.poster_path;

            if (movie.poster_path == null) {

                completePosterLink = '../no_poster.jpg';
            };

            return completePosterLink;
        }
    },
}

</script>

<template>
    <div class="container-card-item">
        <ul>
            <li><img :src="addMoviePoster(card)" class="movie-poster" alt="movie poster">
            </li>
            <li><strong>titolo:</strong> {{ card.title }}</li>
            <li><strong>titolo originale: </strong> {{ card.original_title }}</li>
            <li><strong>lingua originale: </strong> {{ card.original_language }}</li>
            <li><strong>voto: </strong> {{ Math.ceil(card.vote_average / 2) }}</li>
            <li><span v-for="star in Math.ceil(card.vote_average / 2)"><i class="fa-solid fa-star"></i></span></li>
            <!-- primo metodo di visualizzazione della bandiera -->
            <!-- <li><span :class="'fi fi-' + card.original_language"></span></li> -->

            <li><span :class="'fi fi-' + addFlags(card.original_language)"></span></li>

        </ul>
    </div>
</template>

<style lang="scss" scoped>
.container-card-item {
    width: 200px;
    border: 1px solid black;
    padding: 3px;

    ul {
        .movie-poster {
            width: 100%;
        }
    }
}
</style>