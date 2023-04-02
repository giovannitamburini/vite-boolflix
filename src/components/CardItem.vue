<script>

// importo la libreria delle bandiere
import "/node_modules/flag-icons/css/flag-icons.min.css"
// importo font-awesome per mostrare il voto in stelle
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    data() {
        return {
            hidden: false,
        }
    },

    props: {
        card: Object,
        linkPoster: String,
    },

    methods: {
        addFlags(language) {

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

        addMoviePoster() {

            let completePosterLink = this.linkPoster + this.card.poster_path;

            if (this.card.poster_path == null) {

                completePosterLink = '../no_poster.jpg';
            };

            return completePosterLink;
        },

        overMovie() {
            this.hidden = true;
        },

        leaveMovie() {
            this.hidden = false;
        },

    },
}

</script>

<template>
    <div v-on:mouseover="overMovie()" v-on:mouseleave="leaveMovie()" class="container-card-item">

        <div class="container-poster">

            <img :src="addMoviePoster()" :class="{ hide: hidden }" class="movie-poster" alt="movie-poster">

            <div :class="{ hidetext: hidden }" class="movie-description">
                <ul>
                    <li><strong>titolo:</strong> {{ card.title }}</li>
                    <li><strong>titolo originale: </strong> {{ card.original_title }}</li>
                    <!-- <li><strong>lingua originale: </strong> {{ card.original_language }}</li> -->
                    <!-- <li><strong>voto: </strong> {{ Math.ceil(card.vote_average / 2) }}</li> -->
                    <!-- primo metodo di visualizzazione della bandiera -->
                    <!-- <li><span :class="'fi fi-' + card.original_language"></span></li> -->
                    <li><span :class="'fi fi-' + addFlags(card.original_language)"></span></li>

                    <li><span v-for="star in Math.ceil(card.vote_average / 2)" class="star"><i
                                class="fa-solid fa-star"></i></span>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-card-item {
    width: 200px;

    .container-poster {
        overflow: hidden;
        position: relative;
        height: 289px;

        .movie-poster {
            position: absolute;
            z-index: 1;
            width: 100%;
            overflow: hidden;
        }

        .movie-description {
            position: absolute;
            padding: 3px;

            ul {
                font-size: 0.8em;

                .star {
                    color: yellow;
                }
            }
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