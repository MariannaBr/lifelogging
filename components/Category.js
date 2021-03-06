import { useState } from "react"
import Cell from "./Cell"
import { addCell, removeCell } from "../redux/actions"
import { useDispatch } from "react-redux"
import { todayChart } from "../helpers/Dates"

function Category(props) {

    const [isOpen, SetIsOpen] = useState(false)
    const dispatch = useDispatch()

    function HandleClick() {
        SetIsOpen(!isOpen)
    }
    
    function CellSelected(cellName, selected) {
        dispatch(selected ? addCell(todayChart, cellName) : removeCell(todayChart, cellName))
    }

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" onClick={HandleClick} className={`inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 bg-${props.bg}-300 text-sm sm:text-base md:text-lg font-medium text-gray-700
                 hover:bg-${props.bg}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300`}
                 id={props.id} aria-haspopup="true" aria-expanded="true"> {props.name}
                </button>
            </div>
            {isOpen && <div className="origin-top-right relative right-0 mt-2 px-1 flex flex-wrap justify-center">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {props.cells.map(cell => <Cell key={cell.id} id={props.id} name={cell.name} bg={props.bg} selected={CellSelected} />)}
                </div>
            </div>}
        </div>
    )
}

export default Category 