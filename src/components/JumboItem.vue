<script>

import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },

    computed: {

        // funzione per prendere solo i primi 5 attori contenuti nel cast del film/serie tv selezionata
        subListCreditsM() {

            return this.store.ListCredits.slice(0, 5);
        },
    },
}
</script>

<template>
    <!-- visualizzabile se  è stata cliccato un film o una serie tv-->
    <div v-show="store.JumboShow" id="jumbotron">
        <!-- link immagine uguale a link del poster del film/serie tv selezionata -->
        <img :src="store.JumboLinkImage" alt="">

        <div id="description">
            <!-- titolo film/serie selezionata -->
            <div class="smalltitle"><strong>{{ store.JumboTitle }}</strong> </div>
            <!-- generi del film/serie selezionata -->
            <div id="genre-section">

                <div class="smalltitle">genere:</div>

                <div id="genre">
                    <!-- ciclo per ogni genere contenuto nella lista completa dei generi -->
                    <div v-for="genre in store.ListGenre">
                        <!-- ciclo per ogni id contenuto nell'array dei generi del singolo film/serie selezionata -->
                        <!-- visualizzo la proprietà name della lista dei generi solo se la proprietà id del singolo genere corrisponde all'id del genere del film/serie tv selezionata -->
                        <span v-for="genreid in store.JumboGenreId" v-show="genre.id == genreid">{{ genre.name }}, </span>
                    </div>
                </div>
            </div>

            <div id="cast">
                <div class="smalltitle">cast:</div>
                <!-- ciclo per ogni elemento contenuto in subListCreditsM -->
                <div v-for="credit in subListCreditsM"> {{ credit.name }}, </div>
            </div>

            <!-- trama del singolo film/serie selezionata -->
            <div> <span class="smalltitle">trama:</span> {{ store.JumboOverview }}</div>
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