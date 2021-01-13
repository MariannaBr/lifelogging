import { useState } from "react"
import { connect } from "react-redux"
import { addCell } from "../redux/actions" 

function Cell(props) {

    const [picked, setpicked] = useState(false)
    const [items, setItems] = useState([])

    function HandleOnClick() {
        setpicked(!picked)
        props.addCell(props.name)

        // setItems((prevItems) => {
        //     return [...prevItems, props.name]
        //     })
        }
    
    console.log(items)
    return (
        <div>
            <button type="button" onClick={HandleOnClick} className={`justify-center rounded-full border border-gray-300 shadow-sm px-2 py-2 ${picked? "bg-"+props.bg+"-300" : "bg-"+props.bg+"-100"}  
            block px-4 py-2 text-sm text-gray-700 hover:bg-${props.bg}-200 hover:text-gray-900 focus:outline-none`} role="menuitem"
                id={props.id} aria-haspopup="true" aria-expanded="true"> {props.name}
            </button>
        </div>
    )
}

export default connect(null, {addCell})(Cell)