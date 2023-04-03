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
    <div id="header">

        <h1>Boolflix</h1>
        <!-- collego il valore del campo di input con la variabile InputValue dello store -->

        <div id="search">
            <input v-model="store.InputValue" @keyup.enter="$emit('searchMovie')" type="text"
                placeholder="cerca un film o una serie tv">

            <button @click="$emit('searchMovie')">Cerca</button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@mixin shadow() {
    padding: 5px 8px;
    border-radius: 8px;
    border: 2px solid rgb(19, 223, 172);
    box-shadow: 1.5px 3px 0 blue, 3px 5px 0 rgb(170, 76, 173);
}

@mixin overShadow() {
    box-shadow: 1.5px 3px 0 rgb(170, 76, 173), 3px 5px 0 blue;
    transition: 0.5s;
}

#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-bottom: 2px solid rgb(19, 223, 172);
    box-shadow: 0px 3px 0 blue, 0px 5px 0 rgb(170, 76, 173);

    &:hover {
        @include overShadow()
    }


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

    #search {
        display: flex;
        align-items: center;
        gap: 7px;

        button {
            @include shadow();

            &:hover {
                @include overShadow();
                background-color: rgba(0, 0, 255, 0.5);
            }
        }

        input {
            width: 200px;
            @include shadow();

            &:hover {
                @include overShadow();
                background-color: rgba(0, 0, 255, 0.5);
            }

            &:focus {
                outline: none;
                background-color: rgba(0, 0, 255, 0.5);
            }
        }
    }

}
</style>