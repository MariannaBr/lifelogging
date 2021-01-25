import { useSelector } from "react-redux"
import Day from "./Day"
import inputs from "../public/inputs"
import CategoryChart from "../components/CategoryChart"

const selectDays = state => state.categories.days

function Statistics() {

    const days = useSelector(selectDays)

    // Array of all days [{},{},{}]
    const daysValues = Object.values(days)

    return (
        <div className=" mt-60 mb-20 relative">
            <div className="mb-10 text-4xl font-bold text-green-300 relative flex justify-center">Statistics</div>
            {/* <div className="relative grid grid-cols-3">
                {daysValues.map((day) => <Day key={day.id} id={day.id} categories={day.categories}/>)}
            </div> */}
            <div>
                {inputs.categories.map((category) => <CategoryChart key={category.id} id={category.name} defaultCells={category.cells} color={category.color} />)}
            </div>
            
        </div>
    )
    
}

export default Statistics