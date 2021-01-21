import CategoryCell from "./CategoryCell"
import Inputs from "../public/inputs"

function DayCategory(props) {

    function findColor(categoryName, definedCategories){
        for (var i=0; i<definedCategories.length; i++) {
            if (categoryName === definedCategories[i].name) {
                return definedCategories[i].color
            }
        }
    }

    const categoryColor = findColor(props.id, Inputs.categories)
    
    return (
        <div>
            <div className={`text-xl font-medium text-${categoryColor}-400`}>
                {props.id}
            </div>
            <div>
                {props.cells.map((cell) => <CategoryCell key={cell} id={cell} color={categoryColor}/> )}
            </div>
        </div>
    )
}

export default DayCategory