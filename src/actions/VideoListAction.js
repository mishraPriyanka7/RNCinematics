import { FETCHING_VIDEO_LIST, FETCHING_VIDEO_SUCCESS, FETCHING_VIDEO_FAILURE} from '../utils/constants'

export default function fetchVideoData(movieId) {
    //var movieId = '284053';

    return (dispatch) => {
        dispatch(getLisData())
        fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=1b31282aebdebc34884006adfac40bfb&language=en-US")
            .then(res => res.json())
            .then(json => dispatch(getListDataSuccess(json)))
            .catch(err => dispatch(getListDataFailure(err)))

    }
}

function getLisData() {
    return {
        type: FETCHING_VIDEO_LIST
    }
}

function getListDataSuccess(data) {
    return {
        type: FETCHING_VIDEO_SUCCESS,
        data
    }
}

function getListDataFailure() {
    return {
        type: FETCHING_VIDEO_FAILURE,

    }
}