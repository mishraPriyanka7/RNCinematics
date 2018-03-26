import { FETCHING_MOVIE_DETAILS_SUCCESS,FETCHING_MOVIE_DETAILS_FAILURE,FETCHING_MOVIE_DETAILS } from '../utils/constants'

const initialState = {
    MovieDetails: [],
    isFetchingList: false,
    error: false
}


export default function MovieDetailReducer(state = initialState, action) {
   // console.log("MovieDetailReducer >>>>>",action);

    switch (action.type) {  

        case FETCHING_MOVIE_DETAILS:
            return {
                ...state,
                isFetchingList: true,
                MovieDetails: []
            }
        case FETCHING_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                MovieDetails: action.data
            }
        
        case FETCHING_MOVIE_DETAILS_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }    

        default:
            return state
    }
}