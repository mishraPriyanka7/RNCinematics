import { FETCHING_SIMILAR_MOVIE_LIST, FETCHING_SIMILAR_MOVIE_LIST_SUCCESS, FETCHING_SIMILAR_MOVIE_LIST_FAILURE, 
    FETCHING_MOVIE_DATA, FETCHING_MOVIE_DATA_SUCCESS, FETCHING_MOVIE_DATA_FAILURE} from '../utils/constants'

export default function fetchMovieData(similarMovieId) {

    return (dispatch) => {
        dispatch(getSimilarMovieLisData())
        //alert("similar movie actions "+ similarMovieId);
        fetch("https://api.themoviedb.org/3/movie/"+similarMovieId+"/similar?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
            .then(res => res.json())
            .then(json => dispatch(getSimilarMovieListSuccess(json)))
            .catch(err => dispatch(getSimilarMovieListFailure(err)))

    }
}

export  function fetchMovieDetails(movieId) {

    return (dispatch) => {
        dispatch(getMoviesData())
        //alert("similar movie actions "+ similarMovieId);
        fetch("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
        .then(response => response.json())
        .then(responseJson => { dispatch(getMoviesDataSuccess(responseJson)) })
        .catch(err => dispatch(getMoviesDataFailure(err)))   
    }
}

// **** similar movies list *****

function getSimilarMovieLisData() {
    return {
        type: FETCHING_SIMILAR_MOVIE_LIST
    }
}

function getSimilarMovieListSuccess(data) {
    return {
        type: FETCHING_SIMILAR_MOVIE_LIST_SUCCESS,
        data
    }
}

function getSimilarMovieListFailure() {
    return {
        type: FETCHING_SIMILAR_MOVIE_LIST_FAILURE,

    }
}

// **** movies Details ****

function getMoviesData() {
    return {
        type: FETCHING_MOVIE_DATA
    }
}

function getMoviesDataSuccess(data) {
    return {
        type: FETCHING_MOVIE_DATA_SUCCESS,
        data
    }
}

function getMoviesDataFailure() {
    return {
        type: FETCHING_MOVIE_DATA_FAILURE,

    }
}