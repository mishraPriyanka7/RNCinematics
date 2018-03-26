import { FETCHING_VIDEO_LIST, FETCHING_VIDEO_SUCCESS, FETCHING_VIDEO_FAILURE } from '../utils/constants'

const initialState = {
    VideoListData: [],
    isFetchingList: false,
    page: 1,
    error: false
}


export default function VideoListReducer(state = initialState, action) {

    switch (action.type) {

        case FETCHING_VIDEO_LIST:
            return {
                ...state,
                isFetchingList: true,
                VideoListData: []
            }

        case FETCHING_VIDEO_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                VideoListData: action.data
            }

        case FETCHING_VIDEO_FAILURE:
            return {
                ...state,
                isFetchingList: false,
                error: true
            }
        default:
            return state
    }
}