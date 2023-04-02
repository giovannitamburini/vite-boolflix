<script>

import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },

    // best practice: per collegare meglio i suggerimenti di vs code e  per evitare eventuali bug
    emits: [
        'searchMovie',
    ],
}
</script>

<template>
    <div id="search">

        <h1>Boolflix</h1>
        <!-- collego il valore del campo di input con la variabile InputValue dello store -->
        <input v-model="store.InputValue" @keyup.enter="$emit('searchMovie')" type="text"
            placeholder="inserisci il nome di un film">

        <input v-model="store.InputSeriesValue" @keyup.enter="$emit('searchMovie')" type="text"
            placeholder="inserisci il nome di una serie tv">

        <button @click="$emit('searchMovie')">Cerca</button>

    </div>
</template>

<style lang="scss" scoped>
#search {

    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-bottom: 2px solid black;

    h1 {
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 3em;
        color: rgb(19, 223, 172);
        text-shadow: 1.5px 3px 0 blue, 3px 5px 0 rgb(170, 76, 173);

        &:hover {
            text-shadow: 1.5px 3px 0 rgb(170, 76, 173), 3px 5px 0 blue;
            transition: 0.5s;
        }
    }

    input {
        width: 200px;
    }
}
</style>