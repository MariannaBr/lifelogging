import Header from "../components/Header"
import Category from "../components/Category"
import inputs from "../public/inputs"
import Statistics from "../components/Statistics"

function HomePage() {

    return (
        <div className="mx-8 lg:mx-32">
            <Header name={"Marianna"}/>
            <div className="flex justify-between">
                {inputs.categories.map(cat => <Category key={cat.id} id={cat.id} name={cat.name} bg={cat.color} cells={cat.cells}/>)}
            </div>
            <Statistics />
        </div>
    )
}

export default HomePage