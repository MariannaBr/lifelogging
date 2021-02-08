import { useSelector } from "react-redux"
import inputs from "../public/inputs"
import CategoryChart from "../components/CategoryChart"
import generateDefaultDays from "../helpers/defaultDays"
import { todayChart } from "../helpers/todayDate"
import { useAuthUser } from 'next-firebase-auth'
import { firestoreConnect } from 'react-redux-firebase'

const selectDays = state => state.categories.days

function Statistics(props) {

    const storeDays = useSelector(selectDays)
    console.log(storeDays)

    // const getDataFromFirestore = async () => {
    //     try {
    //         if (AuthUser.id) {
    //             const userRef = db.collection('users').doc(AuthUser.id)
    //             const user = await userRef.get()
    //             if (user.exists) {
    //                 userData = await user.data().data
    //                 console.log("userData", userData)
    //             }
    //         }
    //     } catch (e) {
    //         console.log(e, "error in getDataFromFirestore")
    //     }
    //     return userData
    // }
    // getDataFromFirestore()

    // Array of objects [{id:"", cells:[]}, {id:"", cells:[]}]
    const storeDaysValues = Object.values(storeDays)

    // get array of days' ids ["2021-1-1", "2021-1-2"], inputs: data - array of objects [{}, {}]
    const storeDaysIds = storeDaysValues.map((day) => day.id)

    // get array of dates from second day to today ["2021-1-1", "2021-1-2"]
    const chartDays = generateDefaultDays(new Date(storeDaysIds[0]), new Date(todayChart))

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