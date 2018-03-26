import {FETCHING_CAST_LIST, FETCHING_CAST_LIST_SUCCESS, FETCHING_CAST_LIST_FAILURE } from '../utils/constants'

const initialState = {
    CastListData: [],
    isFetchingList: false,
    page: 1,
    error: false
}


export default function CastListReducer(state = initialState, action) {

    switch (action.type) {

        case FETCHING_CAST_LIST:
            return {
                ...state,
                isFetchingList: true,
                CastListData: []
            }

        case FETCHING_CAST_LIST_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                CastListData: action.data
            }

        case FETCHING_CAST_LIST_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }
        default:
            return state
    }
}