import dynamic from "next/dynamic"
import chartOptions from "../helpers/chartOptions"
import simplifyDate from "../helpers/simplifyDate"

const Chart = dynamic(() => import ("react-apexcharts"), {ssr: false})

function CategoryChart(props) {

    let dataY = {}

    // giving 0 to every cell in every chart day, default values for chart
    // inputs: chartDays ["", ""], defaultCells [{name:""}, {name:""}, {name:""}]
    for (var i=0; i<props.chartDays.length;i++) {
        dataY[props.chartDays[i]] = {}
        for (var j=0; j<props.defaultCells.length; j++) {
            dataY[props.chartDays[i]][props.defaultCells[j].name] = 0
        }
    }

    // giving 1 to cell in day when it happened, data from store
    // inputs: storeDaysValues [{id:"", cells:[]}, {id:"", cells:[]}]
    for (var i=0; i<props.storeDaysValues.length; i++) {
        for (j=0; j<props.storeDaysValues[i].cells.length; j++) {
            dataY[props.storeDaysValues[i].id][props.storeDaysValues[i].cells[j]] = 1
        }
    }

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

