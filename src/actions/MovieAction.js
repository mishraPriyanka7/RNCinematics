import { FETCHING_LIST, FETCHING_LIST_SUCCESS, FETCHING_LIST_FAILURE, FETCHING_MOVIE_DETAILS, FETCHING_MOVIE_DETAILS_SUCCESS, FETCHING_MOVIE_DETAILS_FAILURE, FETCHING_CAST_PICS, FETCHING_CAST_PICS_SUCCESS, FETCHING_CAST_PICS_FAILURE } from '../utils/constants'

export default function fetchMovieData(flag) {

    return (dispatch) => {
        dispatch(getLisData())
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
        .then(res => res.json())
        .then(json => dispatch(getListDataSuccess(json.results)))
        .catch(err => dispatch(getListDataFailure(err)))

    }
}


export function fetchMovieDetails(movieID) {
    console.log("fetchMovieDetails >>> " + movieID);
    return (dispatch) => {
        dispatch(getMovieData())
        fetch("https://api.themoviedb.org/3/movie/" + movieID + "?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
            .then(response => response.json())
            .then(responseJson => {
                dispatch(getMovieDataSuccess(responseJson))
            })
            .catch(err => dispatch(getMovieDataFailure(err)))

    }
}


export function fetchCastImages(ID) {
    console.log("fetchCastDetails >>> " + ID);
    return (dispatch) => {
        dispatch(getMovieData())

        fetch("https://api.themoviedb.org/3/person/" + ID + "?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
            .then(response => response.json())
            .then(responseJson => {
                dispatch(getCastPics(responseJson))
            })
            .catch(err => dispatch(getCastPicsFailure(err)))
    }
}

// export function fetchMovieDetails(movieID){
//     return fetch('https://api.themoviedb.org/3/movie/"+movieID+"?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         return dispatch(getMovieDataSuccess(responseJson));
//       })
//       .catch((error) => {
//         console.error(error);
//         return dispatch(getMovieDataFailure(err));
//       });
//   }

// _hitApi = (flag, dispatch) => {

//     switch (flag) {
//         case '1':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))
//             break;

//         case '2':

//             fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//             break;

//         case '3':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//             break;

//         case '4':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//             break;

//         case '5':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//             break;

//         case '6':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//             break;

//         case '7':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//         case '8':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//             break;

//         case '9':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//         case '10':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//             break;

//         case '11':

//             fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US&page=1")
//                 .then(res => res.json())
//                 .then(json => dispatch(getListDataSuccess(json.results)))
//                 .catch(err => dispatch(getListDataFailure(err)))

//             break;

//         default:
//             return null;

//     }
// }




function getLisData() {
    return {
        type: FETCHING_LIST
    }
}

function getMovieData() {
    return {
        type: FETCHING_MOVIE_DETAILS
    }
}


function getCastPics() {
    return {
        type: FETCHING_CAST_PICS_SUCCESS
    }
}

function getCastPicsFailure() {
    return {
        type: FETCHING_CAST_PICS_FAILURE
    }
}


function getListDataSuccess(data) {
    return {
        type: FETCHING_LIST_SUCCESS,
        data
    }
}

function getListDataFailure() {
    return {
        type: FETCHING_LIST_FAILURE,

    }
}

function getMovieDataSuccess(data) {
    // console.log("getMovieDataSuccess >>>>>",data);
    return {
        type: FETCHING_MOVIE_DETAILS_SUCCESS,
        data
    }
}

function getMovieDataFailure() {
    return {
        type: FETCHING_MOVIE_DETAILS_FAILURE,

    }
}