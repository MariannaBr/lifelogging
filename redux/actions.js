import { ADD_DAY, ADD_CATEGORY, ADD_CELL } from "./actionTypes"
import {today} from "../components/Today"

let dayId = today

export const addDay = content => ({
    type: ADD_DAY,
    payload: {
        id: dayId,
        content
    }
})

export const addCategory = content => ({
    type: ADD_CATEGORY,
    payload: {content}
})

export const addCell = name => ({
    type: ADD_CELL,
    payload: {name}
})