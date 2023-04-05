import { reactive } from 'vue';

export const store = reactive({
    // booleana per gestire la visualizzazione del caricamento e dei film in pagina
    loading: true,
    // booleana per gestire la visualizzazione del caricamento e delle serie in pagina
    loadingSeries: true,
    // booleana per gestire la visualizzazione dei migliori film (visualizzati nella schermata base)
    bestMovies: true,
    // booleana per gestire la visualizzazione delle migliori serie tv (visualizzate nella schermata base)
    bestSeries: true,

    // MOVIES -------------------------------

    // stringa che identifica la API call, utillizzata per mostrare inizialmente in pagina la lista dei film più in tendenza settimanalmente 
    ApiCall: 'https://api.themoviedb.org/3/trending/movie/week?api_key=c3c804e9852eacc93d32f48f228a0f79',
    // parte base della stringa per effettuare la chiamata
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

    // stringa uguale alla stringa di ricerca inserita nel campo di input nella componente header, che visualizzo nella sezione film
    SearchValue: '',

    // SERIES ------------------------------

    // chiamata per le serie tv in tentenza settimanalmente
    ApiSeriesCall: 'https://api.themoviedb.org/3/trending/tv/week?api_key=c3c804e9852eacc93d32f48f228a0f79',

    // ApiCallBase
    // +
    pathSeries: '/search/tv',
    // +
    // ApiKey + ApiQuery + InputValue: '',

    // creo un array vuoto in cui inserirò l'output della API call per le serie tv
    ListSeries: [],

    // stringa uguale alla stringa di ricerca inserita nel campo di input nella componente header, che visualizzo nella sezione serie tv
    SearchSeriesValue: '',

    // POSTER -------------------------

    // ApiMovieCreditsModular: linkPosterBase + (pathCreditsM  o pathCreditsS)+ idCategory + pathCredits + ApiKey,

    // stringa base necessaria per ottenere la locandina del film
    linkPosterBase: 'https://image.tmdb.org/t/p/w342',

    pathCreditsM: '/movie/',
    // oppure
    pathCreditsS: '/tv/',
    // id che identifica il film o la serie tv
    idCategory: '',

    pathCredits: '/credits',

    // JUMBO ----------------------------

    // booleana che gestisce la visualizzazione del jumbo (se false non viene visualizzata)
    JumboShow: false,

    // stringa che sarà uguale al link del poster del film o della serie tv selezionata
    JumboLinkImage: '',
    // uguale al titolo del film/serie selezionata
    JumboTitle: '',
    // uguale alla trama del film/serie selezionata
    JumboOverview: '',
    // array che conterrà i generi del film/serie selezionata
    JumboGenreId: [],

    // array che conterrò il cast del film/serie selezionata
    ListCredits: [],

    // API call per ottenere tutti i generi disponibili
    ApiGenreCall: 'https://api.themoviedb.org/3/genre/movie/list?api_key=c3c804e9852eacc93d32f48f228a0f79',
    // array in cui inserisco la lista dei generi
    ListGenre: [],
});