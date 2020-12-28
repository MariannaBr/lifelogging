import Header from "../components/Header"
import Category from "../components/Category"

function HomePage() {
    return (
        <div className="mx-8 lg:mx-32">
            <Header name={"Marianna"}/>
            <div className="flex justify-between">
                <Category name={"mood"} bg={'yellow-300'} />
                <Category name={"food"} bg={'red-300'} cell_name={"pasta"} cell_bg={"red"}/>
                <Category name={"liquids"} bg={'pink-300'} />
                <Category name={"suplements"} bg={'purple-300'} />
                <Category name={"workouts"} bg={'indigo-300'} />
                <Category name={"body"} bg={'blue-500'} />
                <Category name={"menst. cycle"} bg={'green-500'} />
                <Category name={"sleep"} bg={'green-300'} />
            </div>
            
        </div>
    )
}

export default HomePage