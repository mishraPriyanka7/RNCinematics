import {FETCHING_LIST,FETCHING_CAST_PICS,FETCHING_CAST_PICS_FAILURE,FETCHING_CAST_PICS_SUCCESS } from '../utils/constants'

const initialState = {
    CastPics: [],
    isFetchingList: false,
    error: false
}


export default function CastPicsReducer(state = initialState, action) {
   // console.log("MovieDetailReducer >>>>>",action);

    switch (action.type) {
      case FETCHING_LIST:
        return { ...state, isFetchingList: true, CastPics: [] };
      case FETCHING_CAST_PICS_SUCCESS:
        return { ...state, isFetchingList: false, CastPics: action.data };

      case FETCHING_CAST_PICS_FAILURE:
        return { ...state, isFetchingList: false, error: true };

      default:
        return state;
    }
}