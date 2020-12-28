function Cell(props) {
    return (
        <div>
                <button type="button" className={`justify-center rounded-full border border-gray-300 shadow-sm px-2 py-2 bg-${props.bg}-100 
                block px-4 py-2 text-sm text-gray-700 hover:bg-${props.bg}-200 hover:text-gray-900`} role="menuitem"
                 id="mood" aria-haspopup="true" aria-expanded="true"> {props.name}
                </button>
            </div>
    )
}

export default Cell