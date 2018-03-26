import { FETCHING_PEOPLE_IMAGE_LIST, FETCHING_PEOPLE_IMAGE_SUCCESS, FETCHING_PEOPLE_IMAGE_FAILURE,
    FETCHING_PEOPLE_DETAILS_LIST, FETCHING_PEOPLE_DETAILS_SUCCESS, FETCHING_PEOPLE_DETAILS_FAILURE,
    FETCHING_PEOPLE_TVSHOW_LIST, FETCHING_PEOPLE_TVSHOW_SUCCESS, FETCHING_PEOPLE_TVSHOW_FAILURE,
    FETCHING_PEOPLE_MOVIES_LIST, FETCHING_PEOPLE_MOVIES_SUCCESS, FETCHING_PEOPLE_MOVIES_FAILURE
} from '../utils/constants'

export default function fetchPeopleImageData(peopleId) {
  //  var peopleId = '74568';

    return (dispatch) => {
        dispatch(getLisData())
        fetch("https://api.themoviedb.org/3/person/"+peopleId+"/images?api_key=1b31282aebdebc34884006adfac40bfb")
            .then(res => res.json())
            .then(json => dispatch(getListDataSuccess(json)))
            .catch(err => dispatch(getListDataFailure(err)))

    }
}

export  function fetchPeopleData(peopleId) {
   
      return (dispatch) => {
          dispatch(getPeopleData())
          fetch("https://api.themoviedb.org/3/person/"+peopleId+"?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
              .then(res => res.json())
              .then(json => dispatch(getPeopleDataSuccess(json)))
              .catch(err => dispatch(getPeopleDataFailure(err)))
  
      }
  }

  export  function fetchPeopleMoviesData(peopleId) {
   
    return (dispatch) => {
        dispatch(getPeopleMoviesData())
        fetch("https://api.themoviedb.org/3/person/"+peopleId+"/movie_credits?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
            .then(res => res.json())
            .then(json => dispatch(getPeopleMoviesDataSuccess(json)))
            .catch(err => dispatch(getPeopleMoviesDataFailure(err)))

    }
}

export  function fetchPeopleTvShowsData(peopleId) {
   
    return (dispatch) => {
        dispatch(getPeopleTvShowData())
        fetch("https://api.themoviedb.org/3/person/"+peopleId+"/tv_credits?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
            .then(res => res.json())
            .then(json => dispatch(getPeopleTvShowDataSuccess(json)))
            .catch(err => dispatch(getPeopleTvShowDataFailure(err)))

    }
}

  

function getLisData() {
    return {
        type: FETCHING_PEOPLE_IMAGE_LIST
    }
}

function getListDataSuccess(data) {
    return {
        type: FETCHING_PEOPLE_IMAGE_SUCCESS,
        data
    }
}

function getListDataFailure() {
    return {
        type: FETCHING_PEOPLE_IMAGE_FAILURE,

    }
}
//********** */
function getPeopleData() {
    return {
        type: FETCHING_PEOPLE_DETAILS_LIST
    }
}

function getPeopleDataSuccess(data) {
    return {
        type: FETCHING_PEOPLE_DETAILS_SUCCESS,
        data
    }
}

function getPeopleDataFailure() {
    return {
        type: FETCHING_PEOPLE_DETAILS_FAILURE,

    }
}
// **********

function getPeopleTvShowData() {
    return {
        type: FETCHING_PEOPLE_TVSHOW_LIST
    }
}

function getPeopleTvShowDataSuccess(data) {
    return {
        type: FETCHING_PEOPLE_TVSHOW_SUCCESS,
        data
    }
}

function getPeopleTvShowDataFailure() {
    return {
        type: FETCHING_PEOPLE_TVSHOW_FAILURE,

    }
}
//**** */

function getPeopleMoviesData() {
    return {
        type: FETCHING_PEOPLE_MOVIES_LIST
    }
}

function getPeopleMoviesDataSuccess(data) {
    return {
        type: FETCHING_PEOPLE_MOVIES_SUCCESS,
        data
    }
}

function getPeopleMoviesDataFailure() {
    return {
        type: FETCHING_PEOPLE_MOVIES_FAILURE,

    }
}