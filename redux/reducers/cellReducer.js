import { ADD_DAY, ADD_CATEGORY, ADD_CELL, REMOVE_CELL } from "../actionTypes"

const initialState = {
    days: {
        "0": {
            categories: {
                "test": {
                    cells: ["test"]
                }
            }
        }
    },
    cells: {
        "test": {
            category: "test",
            days: ["0"]
        }
    }
}

export default function(state = initialState, action) {
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
                        categories: {
                            ...state?.days[dayId]?.categories,
                            [categoryName]: {
                                ...state?.days[dayId]?.categories[categoryName],
                                cells: [
                                    ...state?.days[dayId]?.categories[categoryName]?.cells || [],
                                    cellName
                                ]
                            }
                        }
                    }
                }
            }
        }

        default:
            return state
    }
}