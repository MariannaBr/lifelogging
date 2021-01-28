import { useState } from "react"
import { useDispatch } from "react-redux"

function Cell(props) {

    const [picked, setPicked] = useState(false)
    const dispatch = useDispatch()

    function HandleOnClick() {
        const selected = !picked
        props.selected(props.name, selected)
        setPicked(selected)
    }
    
    return (
        <div>
            <button type="button" onClick={HandleOnClick} className={`justify-center rounded-full border border-gray-300 shadow-sm px-2 py-2 ${picked? "bg-"+props.bg+"-300" : "bg-"+props.bg+"-100"}  
            block px-4 py-2 text-sm text-gray-700 hover:bg-${props.bg}-200 hover:text-gray-900 focus:outline-none`} role="menuitem"
                id={props.id} aria-haspopup="true" aria-expanded="true"> {props.name}
            </button>
        </div>
    )
}

export default Cell