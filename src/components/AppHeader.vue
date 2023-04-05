<script>
// importo font awesome
import '@fortawesome/fontawesome-free/css/all.css'
// importo lo store
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },

    // best practice: per collegare meglio i suggerimenti di vs code e  per evitare eventuali bug
    emits: [
        'search',
    ],
}
</script>

<template>
    <div id="header">

        <h1>Boolflix</h1>

        <div id="search">
            <!-- collego il valore del campo di input con la variabile InputValue dello store -->
            <!-- alla pressione del tasto enter si attiva la funzione 'search' passata dall'Appvue tramite emit -->
            <input v-model="store.InputValue" @keyup.enter="$emit('search')" type="text"
                placeholder="cerca un film o una serie tv">
            <!-- alla click del bottone si attiva la funzione search per effettuare la ricerca passata dall Appvue tramite emit -->
            <button @click="$emit('search')">Cerca</button>
            <!-- icona del profilo -->
            <div id="profile"><i class="fa-regular fa-user"></i></div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
$sky: rgb(19, 223, 172);
$purple: rgb(170, 76, 173);
$darkblue: rgba(0, 0, 255, 0.5);

@mixin shadow() {
    padding: 5px 8px;
    border-radius: 8px;
    border: 2px solid $sky;
    box-shadow: 1.5px 3px 0 blue, 3px 5px 0 $purple;
    background-color: transparent;
}

@mixin overShadow() {
    box-shadow: 1.5px 3px 0 $purple, 3px 5px 0 blue;
    transition: 0.5s;
}

#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    padding: 10px 20px 10px 10px;
    border-bottom: 2px solid $sky;
    box-shadow: 0px 3px 0 blue, 0px 5px 0 $purple;

    &:hover {
        @include overShadow()
    }


    h1 {
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 4em;
        color: $sky;
        text-shadow: 1.5px 3px 0 blue, 3px 5px 0 $purple;

        &:hover {
            transition: 0.5s;
            text-shadow: 1.5px 3px 0 $purple, 3px 5px 0 blue, 0 0 20px $sky;
        }
    }

    #search {
        display: flex;
        align-items: center;
        gap: 8px;

        input {
            @include shadow();
            width: 250px;
            padding: 0.8em;

            &:hover {
                @include overShadow();
                background-color: $darkblue;
                font-size: 1em;
            }

            &:focus {
                outline: none;
                background-color: $darkblue;
                font-size: 1em;
            }
        }

        button {
            @include shadow();
            color: #a0a0a0;
            font-size: 1em;

            &:hover {
                @include overShadow();
                background-color: #ffff00;
            }
        }


        #profile {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            aspect-ratio: 1/1;
            border: 3px solid $sky;
            color: #ffff00;
            border-radius: 50%;
            box-shadow: 1.5px 3px 0 blue, 3px 5px 0 $purple;

            &:hover {
                color: #ff073a;
                box-shadow: 1.5px 3px 0 $purple, 3px 5px 0 blue;
                background-color: $darkblue;
                transition: 0.5s;
            }
        }
    }

}
</style>