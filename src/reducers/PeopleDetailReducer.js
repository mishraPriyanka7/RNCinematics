import { FETCHING_PEOPLE_DETAILS_LIST, FETCHING_PEOPLE_DETAILS_SUCCESS, FETCHING_PEOPLE_DETAILS_FAILURE } from '../utils/constants'

const initialState = {
    PeopleDetailListData: [],
    isFetchingList: false,
    page: 1,
    error: false
}


export default function PeopleDetailReducer(state = initialState, action) {

    switch (action.type) {

        case FETCHING_PEOPLE_DETAILS_LIST:
            return {
                ...state,
                isFetchingList: true,
                PeopleDetailListData: []
            }

        case FETCHING_PEOPLE_DETAILS_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                PeopleDetailListData: action.data
            }

        case FETCHING_PEOPLE_DETAILS_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }
        default:
            return state
    }
}