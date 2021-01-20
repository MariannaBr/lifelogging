import { useSelector } from "react-redux"
import Day from "./Day"

const selectDays = state => state.categories.days

function Statistics() {

    const days = useSelector(selectDays)

    // Array of all days [{},{},{}]
    const daysValues = Object.values(days).slice(1)

    return (
        <div className=" mt-60 mb-20 relative">
            <div className="mb-10 text-4xl font-bold text-green-300 relative flex justify-center">Statistics</div>
            <div className="relative grid">
                {daysValues.map((day) => <Day key={day.id} id={day.id} categories={day.categories}/>)}
            </div>
            
        </div>
    )
    
}

export default Statistics