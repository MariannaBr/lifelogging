import { useSelector } from "react-redux"
import inputs from "../public/inputs"
import CategoryChart from "../components/CategoryChart"
import generateDefaultDays from "../helpers/defaultDays"
import { todayChart, firstDayChart } from "../helpers/Dates"
import { useAuthUser } from 'next-firebase-auth'
import { addDataToFirestore } from '../helpers/FirestoreData'

const selectDays = state => state.categories.days

function Statistics() {

    const AuthUser = useAuthUser()
    const storeDays = useSelector(selectDays)

    addDataToFirestore(AuthUser.id, storeDays)

    const storeDaysValues = Object.values(storeDays)

    // get array of days' ids ["2021-1-1", "2021-1-2"], inputs: data - array of objects [{}, {}]
    //const storeDaysIds = storeDaysValues.map((day) => day.id)

    // get array of dates from 1 month before today to today ["2021-1-1", "2021-1-2"]
    const chartDays = generateDefaultDays(new Date(firstDayChart), new Date(todayChart))


    return (
        <div className=" mt-20 relative">
            <div className="mb-10 text-4xl font-bold relative flex justify-center">
                <span className="gradient-text">Statistics</span>
            </div>
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