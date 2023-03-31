<script>

export default {
    data() {
        return {

        }
    },

    props: {
        card: Object,
    },
}

</script>

<template>
    <div>
        <ul>
            <li>titolo: {{ card.title }}</li>
            <li>titolo originale: {{ card.original_title }}</li>
            <li>lingua originale: {{ card.original_language }}</li>
            <li>voto: {{ card.vote_average }}</li>
        </ul>
        <hr>
    </div>
</template>

<style lang="scss" scoped></style>