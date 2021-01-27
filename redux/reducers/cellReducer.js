import { ADD_CELL, REMOVE_CELL } from "../actionTypes"
import deleteItem from "../../helpers/deleteItem"

const initialState = {
    days: {
        "2020-12-01": {
            id: "2020-12-01",
            cells: ["happy", "fine", "potatoes", "bread"]
        },
        "2021-01-21": {
            id: "2021-1-21",
            cells: ["happy", "rice", "bread"]
            
        }
    }
}

export default function cellReducer(state = initialState, action) {
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

        default:
            return state
    }
}