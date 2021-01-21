import { useSelector } from "react-redux"
//import { ApexCharts } from "apexcharts"

const selectDays = state => state.categories.days

function CategoryChart(props) {
    
    const days = useSelector(selectDays)
    // Array of objects [{}, {}]
    const daysValues = Object.values(days)

    // get array of days' ids ["", ""], inputs: data - array of objects [{}, {}]
    function getDaysIds(data) {
        const daysIds = data.map((day) => day.id)
        return daysIds
    }

    function generateNextDay(previousDay) {
        return previousDay + 1
    }

    // get array of categories of particular day ["", ""], inputs: day - string, data - array of objects [{}, {}]
    function getCategoriesofDay(day, data) {
        let categories = []
        data.forEach((item) => {
            if (item.id === day) {
                categories = Object.values(item.categories).map((cat) => cat.id)
            }
        })
        return categories
    }

    // get array of cells of particular category ["", ""], inputs: day - string, category - string, data(category) - array of objects [{}, {}]
    function getCellsofCategory(day, category, data) {
        let cells = []
        data.forEach((item) => {
            if (item.id === category) {
                cells = Object.values(item.cells)
            }
        })
        return cells
    }

    // Array of arrays of objects - categories [[{}, {}], [{}, {}]]
    //const categoriesValues = daysValues.map((day) => Object.values(day.categories))
    //console.log(categories)

    // Array of arrays of ids [["", "", ""], ["", "", ""]]
    //const categoriesIds = categories.map((category) => category.map((cat) => cat.id))
    //console.log(categoriesIds)

    // Array of arrays of arrays of cells [[["",""],["",""]],[["",""],["",""]]]
    //const cells = categories.map((category) => category.map((cat) => cat.cells))
    //console.log(cells)

    function getDefaultCell(defaultCells) {
        defaultCells.forEach((cell) => cell.name)
    }

    const options = {
        series: [
            {
                name: getDefaultCell(props.cells),
                data: [{
                    x: 
                }]
            }
        ]
    }
    

    return (
        <div>
            Chart
        </div>
    )

}

export default CategoryChart