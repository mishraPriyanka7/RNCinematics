import { GRID_DATA, LIST_DATA } from '../utils/constants'

export default function changeToGrid(data) {
    console.log("==== Params ====",data);
    return (dispatch) => {
        dispatch(changeStyle(data))

    }
}

function changeStyle(data) {
    return {
        type: data == '0' ? LIST_DATA : GRID_DATA,
        data

    } 
}  