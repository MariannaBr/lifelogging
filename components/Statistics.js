import { useSelector } from "react-redux"
import Day from "./Day"
import inputs from "../public/inputs"
import CategoryChart from "../components/CategoryChart"
import generateDefaultDays from "../helpers/defaultDays"
import { todayChart } from "../helpers/todayDate"
import simplifyDate from "../helpers/simplifyDate"

const selectDays = state => state.categories.days

function Statistics() {

    const storeDays = useSelector(selectDays)

    // Array of objects [{id:"", cells:[]}, {id:"", cells:[]}]
    const storeDaysValues = Object.values(storeDays)

    // get array of days' ids ["2021-1-1", "2021-1-2"], inputs: data - array of objects [{}, {}]
    const storeDaysIds = storeDaysValues.map((day) => day.id)

    // get array of dates from second day to today ["2021-1-1", "2021-1-2"]
    const chartDays = generateDefaultDays(new Date(storeDaysIds[0]), new Date(todayChart))


    return (
        <div className=" mt-60 mb-20 relative">
            <div className="mb-10 text-4xl font-bold relative flex justify-center">
                <span className="gradient-text">Statistics</span>
            </div>
            {/* <div className="relative grid grid-cols-3">
                {daysValues.map((day) => <Day key={day.id} id={day.id} categories={day.categories}/>)}
            </div> */}
            <div>
                {inputs.categories.map((category) => 
                <CategoryChart 
                key={category.id} 
                id={category.name}
                color={category.color}
                defaultCells={category.cells} 
                chartDays={chartDays}
                storeDaysValues={storeDaysValues} />)}
            </div>
        </div>
    )
    
}

export default Statistics