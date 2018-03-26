import { FETCHING_PEOPLE_MOVIES_LIST, FETCHING_PEOPLE_MOVIES_SUCCESS, FETCHING_PEOPLE_MOVIES_FAILURE } from '../utils/constants'

const initialState = {
    PeopleMoviesData: [],
    isFetchingList: false,
    page: 1,
    error: false
}


export default function PeopleMoviesReducer(state = initialState, action) {

    switch (action.type) {

        case FETCHING_PEOPLE_MOVIES_LIST:
            return {
                ...state,
                isFetchingList: true,
                PeopleMoviesData: []
            }

        case FETCHING_PEOPLE_MOVIES_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                PeopleMoviesData: action.data
            }

        case FETCHING_PEOPLE_MOVIES_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }
        default:
            return state
    }
}