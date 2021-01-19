
import getToday from "../helpers/todayDate" 

function Today() {
    
    return (
        <div className="text-green-300 font-semibold text-3xl relative flex justify-center p-4 ">
            {getToday()}
        </div>
    )
}

export default Today