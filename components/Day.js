import DayCategory from "./DayCategory"


function Day(props) {

    const categories = Object.values(props.categories)
    
    return (
        <div className="relative my-6">
            <h1 className="text-2xl font-semibold text-gray-500" >{props.id}</h1>
            <div>{categories.map((category) => <DayCategory key={category.id} id={category.id} cells={category.cells}/> )}</div>
            <div>

            </div>
        </div>
    )
}

export default Day