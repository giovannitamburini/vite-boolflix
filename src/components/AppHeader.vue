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

        <strong>searchbar : </strong>
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
    gap: 5px;
    padding: 10px;
    border-bottom: 2px solid black;

    input {
        width: 200px;
    }
}
</style>