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
        <input v-model="store.InputValue" type="text" placeholder="inserisci il nome di un film">

        <button @click="$emit('searchMovie')">Cerca</button>

    </div>
</template>

<style lang="scss" scoped>
#search {

    display: flex;
    gap: 5px;

    input {
        width: 200px;
    }
}
</style>