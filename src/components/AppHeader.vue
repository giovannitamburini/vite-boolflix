<script>
import '@fortawesome/fontawesome-free/css/all.css'

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

            <div id="profile"><i class="fa-regular fa-user"></i></div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@mixin shadow() {
    padding: 5px 8px;
    border-radius: 8px;
    border: 2px solid rgb(19, 223, 172);
    box-shadow: 1.5px 3px 0 blue, 3px 5px 0 rgb(170, 76, 173);
    background-color: transparent;
}

@mixin overShadow() {
    box-shadow: 1.5px 3px 0 rgb(170, 76, 173), 3px 5px 0 blue;
    transition: 0.5s;
}

#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    padding: 10px 20px 10px 10px;
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
            text-shadow: 1.5px 3px 0 blue, 3px 5px 0 rgb(170, 76, 173), 0 0 20px rgba(7, 62, 242, 0.893);
        }
    }

    #search {
        display: flex;
        align-items: center;
        gap: 8px;

        button {
            @include shadow();
            color: #a0a0a0;

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

        #profile {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            aspect-ratio: 1/1;
            border: 3px solid rgb(19, 223, 172);
            color: #ffff00;
            border-radius: 50%;
            box-shadow: 1.5px 3px 0 blue, 3px 5px 0 rgb(170, 76, 173);

            &:hover {
                color: #ff073a;
                box-shadow: 1.5px 3px 0 rgb(170, 76, 173), 3px 5px 0 blue;
                background-color: rgba(0, 0, 255, 0.5);
                transition: 0.5s;
            }
        }
    }

}
</style>