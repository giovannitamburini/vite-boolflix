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
            <div class="smalltitle"><strong>{{ store.JumboTitle }}</strong> </div>

            <div id="genre-section">
                <div class="smalltitle">genere:</div>
                <div id="genre">
                    <div v-for="genre in store.ListGenre">
                        <span v-for="genreid in store.JumboGenreId" v-show="genre.id == genreid">{{ genre.name }}, </span>
                    </div>
                </div>
            </div>
            <div id="cast">
                <div class="smalltitle">cast:</div>
                <div v-for="credit in subListCreditsM"> {{ credit.name }}, </div>
            </div>
            <div> <span class="smalltitle">trama:</span> trama: {{ store.JumboOverview }}</div>
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
        border-radius: 10px;
        color: rgb(19, 223, 172);
        box-shadow: 1.5px 2px 0 rgb(19, 223, 172), 3px 4px 0 blue, 4.5px 6px 0 rgb(170, 76, 173);
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

.smalltitle {
    text-transform: uppercase;
    color: rgb(19, 223, 172);
    text-shadow: 1px 1px 0 blue, 2px 1px 0 rgb(170, 76, 173);
}
</style>