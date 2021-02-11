import { ADD_CELL, REMOVE_CELL, SET_STATE } from "./actionTypes"


export const addCell = (dayId, cellName) => ({
    type: ADD_CELL,
    payload: {
        dayId: dayId,
        cellName: cellName
    }
})

export const setState = (data) => ({
    type: SET_STATE,
    payload: {
        data: data
    }
})

export const removeCell = (dayId, cellName) => ({
    type: REMOVE_CELL,
    payload: {
        dayId: dayId,
        cellName: cellName
    }
})