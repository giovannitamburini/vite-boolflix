import { reactive } from 'vue';

export const store = reactive({

    // esempio di API call signore degli anelli in italiano
    // ApiCallExample: 'https://api.themoviedb.org/3/search/movie?api_key=c3c804e9852eacc93d32f48f228a0f79&language=it-IT&language=it-IT&query=signore degli anelli',

    loading: true,

    loadingSeries: true,

    bestMovies: true,

    bestSeries: true,

    // MOVIES -------------------------------

    // stringa che identifica la API call, utillizzata per mostrare inizialmente in pagina la lista dei film più in tendenza settimanalmente 
    ApiCall: 'https://api.themoviedb.org/3/trending/movie/week?api_key=c3c804e9852eacc93d32f48f228a0f79',

    ApiCallBase: 'https://api.themoviedb.org/3',
    // +
    path: '/search/movie',
    // +
    ApiKey: '?api_key=c3c804e9852eacc93d32f48f228a0f79',
    // +
    ApiQuery: '&query=',
    // +
    // stringa uguale a ciò che viene inserito nel campo di input nella componente SearchbarItem, tramite v-model all'input
    InputValue: '',

    // creo un array vuoto in cui inserirò l'output della API call per i film
    ListMovies: [],


    SearchValue: '',

    // SERIES ------------------------------

    // chiamata per le serie tv in tentenza settimanalmente
    ApiSeriesCall: 'https://api.themoviedb.org/3/trending/tv/week?api_key=c3c804e9852eacc93d32f48f228a0f79',

    //ApiCallBase
    // +
    pathSeries: '/search/tv',
    // +
    //ApiKey
    // +
    //ApiQuery
    // +
    InputSeriesValue: '',

    // creo un array vuoto in cui inserirò l'output della API call per le serie tv
    ListSeries: [],

    SearchSeriesValue: '',

});