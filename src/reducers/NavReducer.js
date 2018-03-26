import { GRID_DATA, LIST_DATA } from '../utils/constants'


const initialState = {
    isGrid: false,
    gridValue: '',
}

export default function NavReduver(state = initialState, action) {
    switch (action.type) {

        case GRID_DATA:
            return {
                ...state,
                isGrid: true,
                gridValue: action.data
 
            }

        case LIST_DATA:
            return {
                ...state,
                isGrid: false,
                gridValue: action.data
            }
        default:
            return state
    }
}  