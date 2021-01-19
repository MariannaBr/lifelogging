import { ADD_CELL, REMOVE_CELL } from "./actionTypes"


export const addCell = (dayId, categoryName, cellName) => ({
    type: ADD_CELL,
    payload: {
        dayId: dayId,
        categoryName: categoryName,
        cellName: cellName
    }
})

export const removeCell = (dayId, categoryName, cellName) => ({
    type: REMOVE_CELL,
    payload: {
        dayId: dayId,
        categoryName: categoryName,
        cellName: cellName
    }
})