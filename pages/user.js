import HeaderUser from "../components/HeaderUser"
import User from "../components/User"
import Category from "../components/Category"
import inputs from "../public/inputs"
import Statistics from "../components/Statistics"

function userPage() {

    return (
        <div className="bg-gray-900 relative h-full">
            <HeaderUser />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-gray-900">
            <User name={"Marianna"}/>
            <div className="flex justify-between">
                {inputs.categories.map(cat => <Category key={cat.id} id={cat.id} name={cat.name} bg={cat.color} cells={cat.cells}/>)}
            </div>
            <Statistics />
        </div>
        </div>
        
    )
}

export default userPage