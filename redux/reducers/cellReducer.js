import { ADD_CELL, REMOVE_CELL } from "../actionTypes"

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

function deleteItem(arr, val) {
    return (arr.filter((cell) => cell != val))
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
                },
                cells: {
                    ...state?.cells,
                    [cellName]: {
                        ...state?.cells[cellName],
                        category: categoryName,
                        days: [
                            ...state?.cells[cellName]?.days || [],
                            dayId
                        ]
                    }
                }
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
                cells: {
                    ...state?.cells,
                    [cellName]: {
                        ...state?.cells[cellName],
                        days: deleteItem(state?.cells[cellName]?.days, dayId)
                    }
                }
            }
        }

        default:
            return state
    }
}