import { FETCHING_PEOPLE_IMAGE_LIST, FETCHING_PEOPLE_IMAGE_SUCCESS, FETCHING_PEOPLE_IMAGE_FAILURE } from '../utils/constants'

const initialState = {
    PeopleImageListData: [],
    isFetchingList: false,
    page: 1,
    error: false
}


export default function PeopleImageReducer(state = initialState, action) {

    switch (action.type) {

        case FETCHING_PEOPLE_IMAGE_LIST:
            return {
                ...state,
                isFetchingList: true,
                PeopleImageListData: []
            }

        case FETCHING_PEOPLE_IMAGE_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                PeopleImageListData: action.data
            }

        case FETCHING_PEOPLE_IMAGE_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }
        default:
            return state
    }
}