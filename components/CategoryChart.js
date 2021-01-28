import dynamic from "next/dynamic"
import chartOptions from "../helpers/chartOptions"
import simplifyDate from "../helpers/simplifyDate"

const Chart = dynamic(() => import ("react-apexcharts"), {ssr: false})

function CategoryChart(props) {

    let dataY = {}

    // giving 0 to every cell in every chart day, default values for chart
    // inputs: chartDays ["", ""], defaultCells [{name:""}, {name:""}, {name:""}]
    props.chartDays.forEach(day => {
        dataY[day] = {}
        props.defaultCells.forEach(cell => {
            dataY[day][cell.name] = 0
        })
    })

    // giving 1 to cell in day when it happened, data from store
    // inputs: storeDaysValues [{id:"", cells:[]}, {id:"", cells:[]}]
    props.storeDaysValues.forEach(day => {
        day.cells.forEach(cell => {
            dataY[day.id][cell] = 1
        })
    })

    const Series = props.defaultCells.map((cell) => {
        return {
            name: cell.name,
            data: props.chartDays.map((day) => {
                return {
                    x: simplifyDate(day),
                    y: dataY[day][cell.name]
                }
            })
        }
    })

    const chartWidth = (props.chartDays.length*15).toString()
    const chartHeight = (props.defaultCells.length*50).toString()

    return (
        <div className="flex flex-row">
            <div className={`text-lg w-1/5 font-semibold text-${props.color}-400`}>
                {props.id}
            </div>
            <div>
                <Chart options={chartOptions(props.color)} series={Series} type="heatmap" width={chartWidth} height={chartHeight}/>
            </div>
            
        </div>
    )
}

export default CategoryChart

