
import {todayGreeting} from "../helpers/Dates" 

function Today() {
    
    return (
        <div className="text-secondary font-semibold text-lg sm:text-2xl lg:text-3xl flex justify-center p-2 sm:p-4">
            {todayGreeting}
        </div>
    )
}

export default Today