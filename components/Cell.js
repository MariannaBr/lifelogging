import { useState } from "react"

function Cell(props) {

    const [picked, setPicked] = useState(false)

    function HandleOnClick() {
        const selected = !picked
        props.selected(props.name, selected)
        setPicked(selected)
    }
    
    return (
        <div>
            <button type="button" onClick={HandleOnClick} className={`flex justify-center rounded-full min-w-full border border-gray-300 shadow-sm px-2 py-2 my-1 ${picked? "bg-"+props.bg+"-300" : "bg-"+props.bg+"-100"}  
            block px-4 py-2 text-sm text-gray-700 hover:bg-${props.bg}-200 hover:text-gray-900 focus:outline-none`} role="menuitem"
                id={props.id} aria-haspopup="true" aria-expanded="true"> {props.name}
            </button>
        </div>
    )
}

export default Cell