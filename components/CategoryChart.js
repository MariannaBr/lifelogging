import { useSelector } from "react-redux"
import dynamic from "next/dynamic"
import { todayChart } from "../helpers/todayDate"
import generateDefaultDays from "../helpers/defaultDays"
import chartOptions from "../helpers/chartOptions"
import simplifyDate from "../helpers/simplifyDate"

const selectDays = state => state.categories.days
const Chart = dynamic(() => import ("react-apexcharts"), {ssr: false})

function CategoryChart(props) {
    
    const storeDays = useSelector(selectDays)

    // Array of objects [{id:"", cells:[]}, {id:"", cells:[]}]
    const storeDaysValues = Object.values(storeDays)

    // get array of days' ids ["2021-1-1", "2021-1-2"], inputs: data - array of objects [{}, {}]
    const storeDaysIds = storeDaysValues.map((day) => day.id)

    // get array of dates from second day to today ["2021-1-1", "2021-1-2"]
    const chartDays = generateDefaultDays(new Date(storeDaysIds[0]), new Date(todayChart))


    function cellHappenedToday(cell, chartDay) {
        return storeDaysValues.reduce((total, day) => {
            if (day.id === chartDay) {
                const storeCellsIds = Object.values(day.cells)
                if (storeCellsIds.includes(cell)) {
                    return total + 1
                }
            }               
            return total 
        }, 0)
    }

    const series = props.defaultCells.map((cell) => {
        return {
          name: cell.name,
          data: chartDays.map((day) => {
              return {
                  x: simplifyDate(day),
                  y: cellHappenedToday(cell.name, day)
              }
          })
        }
      })

    const chartWidth = (chartDays.length*15).toString()
    const chartHeight = (props.defaultCells.length*50).toString()

    return (
        <div className="flex flex-row">
            <div className={`text-lg w-1/5 font-semibold text-${props.color}-400`}>
                {props.id}
            </div>
            <div>
                <Chart options={chartOptions(props.color)} series={series} type="heatmap" width={chartWidth} height={chartHeight}/>
            </div>
            
        </div>
    )
}

export default CategoryChart

