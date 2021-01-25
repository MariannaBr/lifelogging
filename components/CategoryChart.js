import { useSelector } from "react-redux"
import dynamic from "next/dynamic"
import { todayChart } from "../helpers/todayDate"
import generateDefaultDays from "../helpers/defaultDays"
import chartOptions from "../helpers/chartOptions"

const selectDays = state => state.categories.days
const Chart = dynamic(() => import ("react-apexcharts"), {ssr: false})

function CategoryChart(props) {
    
    const days = useSelector(selectDays)
    // Array of objects [{}, {}]
    const daysValues = Object.values(days)

    // get array of days' ids ["2021-1-1", "2021-1-2"], inputs: data - array of objects [{}, {}]
    const daysIds = daysValues.map((day) => day.id)

    // get array of dates from second day to today ["2021-1-1", "2021-1-2"]
    const defaultDays = generateDefaultDays(new Date(daysIds[0]), new Date(todayChart))

    function cellHappenedToday(cell, defaultDay) {
        if (daysIds.includes(defaultDay)) {
            return daysValues.reduce((total, day) => {
                if (day.id === defaultDay) {
                    const categoryIds = Object.values(day.categories).map((cat) => cat.id)
                    if (categoryIds.includes(props.id)) {
                        const cells = Object.values(day.categories[props.id].cells)
                        if (cells.includes(cell)) {
                            return total + 1
                        }
                    }
                }                
                return total 
            }, 0)
        } else {
            return 0
        }
    }

    const series = props.defaultCells.map((cell) => {
        return {
          name: cell.name,
          data: defaultDays.map((day) => {
              return {
                  x: day,
                  y: cellHappenedToday(cell.name, day)
              }
          })
        }
      })

    return (
        <div className="flex flex-row">
            <div className={`text-lg font-semibold text-${props.color}-400`}>
                {props.id}
            </div>
            <div>
                <Chart options={chartOptions(props.color)} series={series} type="heatmap" width="400" height="auto"/>
            </div>
            
        </div>
    )
}

export default CategoryChart

