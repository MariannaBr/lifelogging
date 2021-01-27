import { ADD_CELL, REMOVE_CELL } from "./actionTypes"


export const addCell = (dayId, cellName) => ({
    type: ADD_CELL,
    payload: {
        dayId: dayId,
        cellName: cellName
    }
})

export const removeCell = (dayId, cellName) => ({
    type: REMOVE_CELL,
    payload: {
        dayId: dayId,
        cellName: cellName
    }
})