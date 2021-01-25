import { ADD_CELL, REMOVE_CELL } from "../actionTypes"
import deleteItem from "../../helpers/deleteItem"

const initialState = {
    days: {
        "2021-1-20": {
            id: "2021-1-20",
            categories: {
                "mood": {
                    id: "mood",
                    cells: ["happy", "motivated"]
                },
                "food": {
                    id: "food",
                    cells: ["pasta", "bread"]
                }
            }
        },
        "2021-1-21": {
            id: "2021-1-21",
            categories: {
                "mood": {
                    id: "mood",
                    cells: ["happy", "fine"]
                },
                "food": {
                    id: "food",
                    cells: ["potatoes", "bread"]
                }
            }
        }
    }
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