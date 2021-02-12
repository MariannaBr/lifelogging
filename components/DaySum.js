import { todayChart } from "../helpers/Dates"
import CategoryCell from "./CategoryCell"
import Inputs from "../public/inputs"
import { useSelector } from "react-redux"
import findColor from "../helpers/findColor"

const selectDays = state => state.categories.days

function DaySum(props) {

    const storeDays = useSelector(selectDays)

    // Array of objects [{id:"", cells:[]}, {id:"", cells:[]}]
    const storeDaysValues = Object.values(storeDays)

    // get array of days' ids ["2021-1-1", "2021-1-2"], inputs: data - array of objects [{}, {}]
    const storeDaysIds = storeDaysValues.map((day) => day.id)

    let todayCells = []
    if (todayChart === storeDaysIds[storeDaysIds.length - 1]) {
        todayCells = storeDaysValues[storeDaysValues.length - 1].cells
    }

    return (
        <div className="relative mt-20">
            <h1 className="text-4xl font-semibold text-primary" >Logged items:</h1>
            <div className="mt-4">{todayCells.map((cell) => <CategoryCell key={cell} id={cell} color={findColor(cell, Inputs.categories)}/> )}</div>
            <div>

            </div>
        </div>
    )
}

export default DaySum