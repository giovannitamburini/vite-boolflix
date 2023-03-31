<script>
import "/node_modules/flag-icons/css/flag-icons.min.css"

export default {
    data() {
        return {

        }
    },

    props: {
        series: Object,
    },

    methods: {
        addFlagsSeries(language) {

            language = this.series.original_language;

            if (language == 'en') {
                language = 'gb';
            };
            if (language == 'ja') {
                language = 'jp';
            };
            if (language == 'zh') {
                language = 'cn';
            };
            if (language == 'hi') {
                language = 'in';
            };
            if (language == 'ko') {
                language = 'kr';
            };
            if (language == 'he') {
                language = 'iw';
            };
            if (language == 'cs') {
                language = 'cz';
            }

            return language;
        },
    },
}
</script>

<template>
    <div class="container-series-item">
        <li><strong>titolo:</strong> {{ series.name }}</li>
        <li><strong>titolo originale: </strong> {{ series.original_name }}</li>
        <li><strong>lingua originale: </strong> {{ series.original_language }}</li>
        <li><strong>voto: </strong> {{ series.vote_average }}</li>
        <li><span :class="'fi fi-' + addFlagsSeries(series.original_language)"></span></li>
    </div>
</template>

<style lang="scss" scoped>
.container-series-item {
    width: 250px;
    border: 1px solid black;
    padding: 3px;
}
</style>