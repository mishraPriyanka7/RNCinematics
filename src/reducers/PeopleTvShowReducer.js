import { FETCHING_PEOPLE_TVSHOW_LIST, FETCHING_PEOPLE_TVSHOW_SUCCESS, FETCHING_PEOPLE_TVSHOW_FAILURE,} from '../utils/constants'

const initialState = {
    PeopleTvShowData: [],
    isFetchingList: false,
    page: 1,
    error: false
}


export default function PeopleTvShowReducer(state = initialState, action) {

    switch (action.type) {

        case FETCHING_PEOPLE_TVSHOW_LIST:
            return {
                ...state,
                isFetchingList: true,
                PeopleTvShowData: []
            }

        case FETCHING_PEOPLE_TVSHOW_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                PeopleTvShowData: action.data
            }

        case FETCHING_PEOPLE_TVSHOW_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }
        default:
            return state
    }
}