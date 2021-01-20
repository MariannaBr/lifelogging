import { ADD_CELL, REMOVE_CELL } from "../actionTypes"
import deleteItem from "../../helpers/deleteItem"

const initialState = {
    days: {
        "0": {
            id: "0",
            categories: {
                "test": {
                    id: "food",
                    cells: ["test"]
                }
            }
        }
    },
}

export default function cellReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_CELL: {
            const { payload } = action
            const { dayId, categoryName, cellName } = payload
            return {
                ...state,
                days: {
                    ...state?.days,
                    [dayId]: {
                        ...state?.days[dayId],
                        id: dayId,
                        categories: {
                            ...state?.days[dayId]?.categories,
                            [categoryName]: {
                                ...state?.days[dayId]?.categories[categoryName],
                                id: categoryName,
                                cells: [
                                    ...state?.days[dayId]?.categories[categoryName]?.cells || [],
                                    cellName
                                ]
                            }
                        }
                    }
                },
            }
        }
        case REMOVE_CELL: {
            const { payload } = action
            const { dayId, categoryName, cellName } = payload
            return {
                ...state,
                days: {
                    ...state?.days,
                    [dayId]: {
                        ...state?.days[dayId],
                        categories: {
                            ...state?.days[dayId]?.categories,
                            [categoryName]: {
                                ...state?.days[dayId]?.categories[categoryName],
                                cells: deleteItem(state?.days[dayId]?.categories[categoryName]?.cells, cellName)
                            }
                        }
                    }
                },
            }
        }

        default:
            return state
    }
}