import { ADD_DAY, ADD_CATEGORY, ADD_CELL } from "../actionTypes"
import {today} from "../../components/Today"

let dayId = today

const initialState = {category:"", cells:[]}


export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CATEGORY: {
            return {
                ...state,
                category: [...state.category, action.payload]
                }
        }
            
        case ADD_CELL: {
            return {
                ...state,
                category: [...state.category],
                cells: [...state.cells, action.payload]
            }
        }
        default:
            return state
    }
}