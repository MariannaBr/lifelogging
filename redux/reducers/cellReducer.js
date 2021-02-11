import { ADD_CELL, REMOVE_CELL, SET_STATE } from "../actionTypes"
import deleteItem from "../../helpers/deleteItem"

const initialState = {
    days: {
        "2021-01-01": {
            id: "2021-01-01",
            cells: ["happy", "bread", "water"]
        },
        "2021-01-05": {
            id: "2021-01-05",
            cells: ["sad", "potatoes", "coffee", "iron"]
        },
        "2021-01-12": {
            id: "2021-01-12",
            cells: ["motivated", "pasta", "water", "zink"]
        },
        "2021-01-21": {
            id: "2021-01-21",
            cells: ["happy", "rice", "wine", "zink", "iron"]
            
        }
    }
}

export default function cellReducer(state = {days:{}}, action) {
    switch(action.type) {
        case ADD_CELL: {
            const { payload } = action
            const { dayId, cellName } = payload
            return {
                ...state,
                days: {
                    ...state?.days,
                    [dayId]: {
                        ...state?.days[dayId],
                        id: dayId,
                        cells: [
                            ...state?.days[dayId]?.cells || [],
                            cellName
                        ]
                    }
                }
            }
        }
        case REMOVE_CELL: {
            const { payload } = action
            const { dayId, cellName } = payload
            return {
                ...state,
                days: {
                    ...state?.days,
                    [dayId]: {
                        ...state?.days[dayId],
                            cells: deleteItem(state?.days[dayId]?.cells, cellName)
                        }
                    }
                }
            }
        case SET_STATE: {
            return {
                days:{
                  ...action.payload.data
                }
            }
        }

        default:
            return state
    }

}