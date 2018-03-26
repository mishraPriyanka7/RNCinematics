import { FETCHING_MOVIE_DATA, FETCHING_MOVIE_DATA_SUCCESS, FETCHING_MOVIE_DATA_FAILURE} 
from '../utils/constants'

const initialState = {
    movieData: [],
    isFetchingList: false,
    error: false
}


export default function MovieDataReducer(state = initialState, action) {
   // console.log("MovieDetailReducer >>>>>",action);

    switch (action.type) {  

        case FETCHING_MOVIE_DATA:
            return {
                ...state,
                isFetchingList: true,
                movieData: []
            }
        case FETCHING_MOVIE_DATA_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                movieData: action.data
            }
        
        case FETCHING_MOVIE_DATA_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }    

        default:
            return state
    }
}