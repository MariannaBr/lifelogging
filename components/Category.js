import { useState } from "react"
import Cell from "./Cell"
import { connect } from "react-redux"
import { getCells } from "../redux/selectors"
import { addCategory } from "../redux/actions"
import { addDay } from "../redux/actions"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const selectCategories = state => state.categories

function Category(props) {

    const Categories = useSelector(selectCategories)
    const [isOpen, SetIsOpen] = useState(false)
    const dispatch = useDispatch()

    function HandleClick() {
        SetIsOpen(!isOpen)
        dispatch({type: "ADD_CATEGORY", payload: props.name})
    }
    

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" onClick={HandleClick} className={`inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-${props.bg}-300 text-lg font-medium text-gray-700
                 hover:bg-${props.bg}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300`}
                 id={props.id} aria-haspopup="true" aria-expanded="true"> {props.name}
                </button>
            </div>

    {/* Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95" */}
            {isOpen && <div className="origin-top-right absolute right-0 mt-2 w-auto">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {props.cells.map(cell => <Cell key={cell.id} id={props.id} name={cell.name} bg={props.bg}/>)}
                </div>
            </div>}
        </div>
    )
}

// const mapStateToProps = state => {
//     const {cell, cells} = state.cellsList || {}
//     const cellsList = cells ? cells.map(name => (cell ? {...cell[name], name} : null)) : null
//     return {cellsList}
// }

// const mapStateToProps = state => {
//     const {category, categories} = state.days || {}
//     const categoryList = categories ? categories.map(name => (category ? {...category[name], name} : null)) : null
//     return {categoryList}
// }

export default Category
//export default connect(state => ({cells: getCells(state)}))(Category)

//export default Category