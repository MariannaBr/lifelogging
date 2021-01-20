import { useSelector } from "react-redux"

const selectDays = state => state.categories.days

function Statistics() {

    const days = useSelector(selectDays)

    // Array of all days [{},{},{}]
    const daysValues = Object.values(days)
    console.log("days", daysValues)

    // Array of all days' ids ["dayId_1","dayId_2", "dayId_3" ]
    const dayIds = daysValues.map((day) => day.id)
    console.log("day", dayIds)

    // Array of all categories [{}, {}, {}]
    const categoriesValues = daysValues.map((day) => day.categories)
    console.log("categories objects", categoriesValues)

    // Array of arrays of objects - categories [[{}, {}, {}]]
    const categories = categoriesValues.map((categories) => Object.values(categories))
    console.log("categories", categories)

    // Array of arrays with category [[""], [""], [""]]
    const categoriesIds = categoriesValues.map((categories) => Object.values(categories).map((category) => category.id))
    console.log("category", categoriesIds[0])

    const cellsValues = categories.map((category) => category.cells)
    console.log("cells", cellsValues)

    //const cells = cellsValues.map((category) => catego)

    return (
        <div className=" mt-52">
            <h1>Statistics</h1>
            <div>
                Day: {dayIds}
            </div>
            <div>
                Categories: {categoriesIds}
            </div>
        </div>
    )
    
}

export default Statistics