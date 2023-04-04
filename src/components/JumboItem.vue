<script>

import { store } from "../store.js";


export default {
    data() {
        return {
            store,
        }
    },

    computed: {
        subListCreditsM() {

            return this.store.ListCredits.slice(0, 5);
        },

    },
}
</script>

<template>
    <div v-show="store.creditsShow" id="jumbotron">
        <img :src="store.JumboLinkImage" alt="">
        <div id="description">
            <div><strong>{{ store.JumboTitle }}</strong> </div>

            <div id="genre-section">
                <div>cast:</div>
                <div id="genre">
                    <div v-for="genre in store.ListGenre">
                        <span v-for="genreid in store.JumboGenreId" v-show="genre.id == genreid">{{ genre.name }}, </span>
                    </div>
                </div>
            </div>
            <div id="cast">
                <div>cast:</div>
                <div v-for="credit in subListCreditsM"> {{ credit.name }}, </div>
            </div>
            <div>trama: {{ store.JumboOverview }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#jumbotron {
    display: flex;
    justify-content: left;
    align-items: top;
    flex-flow: row nowrap;
    gap: 15px;
    height: 350px;
    padding-top: 20px;

    img {
        height: 100%;
    }

    #description {

        #genre-section {
            display: flex;
            flex-flow: row wrap;
            gap: 3px;

            #genre {
                display: flex;
            }
        }

        #cast {
            display: flex;
            flex-flow: row wrap;
            gap: 3px;
        }
    }
}
</style>