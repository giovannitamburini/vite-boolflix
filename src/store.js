import { reactive } from 'vue';

export const store = reactive({

    ApiCall: 'https://api.themoviedb.org/3/search/movie?api_key=c3c804e9852eacc93d32f48f228a0f79&language=it-IT&query=signore anelli',

    ListMovies: [],
});