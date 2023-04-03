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

    computed: {

        updatedMoviesLanguage() {

            switch (this.card.original_language) {
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
                    return this.card.original_language;
            };
        },
    },

    methods: {

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

        <img :src="addMoviePoster()" :class="{ hide: hidden }" class="movie-poster" alt="movie-poster">

        <ul :class="{ hidetext: hidden }">
            <li class="movie-title">{{ card.title }}</li>
            <li><strong>titolo originale: </strong> {{ card.original_title }}</li>

            <!-- primo metodo di visualizzazione della bandiera -->
            <!-- <li><span :class="'fi fi-' + card.original_language"></span></li> -->
            <li><span :class="'fi fi-' + updatedMoviesLanguage"></span></li>

            <li>
                <span v-show="Math.ceil(card.vote_average / 2)" v-for="(item, index) in 5"
                    :class="Math.ceil(card.vote_average / 2) > index ? 'star' : ''">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-show="!Math.ceil(card.vote_average / 2)">voto non disponibile</span>
            </li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
.container-card-item {
    width: 200px;
    aspect-ratio: 1/1.45;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    flex-shrink: 0;
    border-radius: 5px;

    .movie-poster {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    ul {
        font-size: 0.9em;
        position: absolute;
        padding: 4px;

        .movie-title {
            text-transform: uppercase;
            color: rgb(19, 223, 172);
            text-shadow: 1px 1px 0 blue, 2px 1px 0 rgb(170, 76, 173);
        }

        .star {
            color: rgb(19, 223, 172);
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