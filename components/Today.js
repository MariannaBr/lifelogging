
import {todayGreeting} from "../helpers/todayDate" 

function Today() {
    
    return (
        <div className="text-green-300 font-semibold text-3xl relative flex justify-center p-4 ">
            {todayGreeting}
        </div>
    )
}

export default Today