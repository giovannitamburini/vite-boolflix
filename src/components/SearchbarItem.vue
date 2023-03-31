<script>

import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },
    emits: [
        'searchMovie',
    ],
}
</script>

<template>
    <div id="search">
        <strong>searchbar : </strong>
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