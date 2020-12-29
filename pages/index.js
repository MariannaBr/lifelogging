import Header from "../components/Header"
import Category from "../components/Category"

// mood: ["motivated", "mood swings", "sad", "emotional", "overwelmed", "irritable", "frustrated"]
// food: ["chicken", "fish", "beef", "cheese", "eggs", "yogurt", "chocolate", "fruits", "vegetables"]
// liquids: ["beer", "white russian", "electrolytes", "tea"]
// suplements: ["magnesium", "vitamin B", "multivitamin", "vitamin D3"]
// workouts: ["strength", "hike", "flying", "skitour", "climb"]
// body: ["bloating", "nausea", "cramps", "diarrhea", "constipation", "fatigue", "muscle pain - workout", "muscle pain - illness"]
// menst.cycle: ["heavy bleeding", "painless", "painful", "cramps", "cravings", "follicular phase", "ovulation", "luteal phase"]

function HomePage() {

    const inputs = {
        categories: [{
            name: "mood",
            color: 'yellow',
            cells: [
                {
                    name: "fine",
                }, {
                    name: "happy",
                }, {
                    name: "energetic",
                }, {
                    name: "motivated",
                }
            ]
        }, {
            name: "food",
            color: 'red',
            cells: [
                {
                    name: "bread",
                }, {
                    name: "potatoes",
                }, {
                    name: "pasta",
                }, {
                    name: "rice",
                }
            ]
        }, {
            name: "liquids",
            color: 'pink',
            cells: [
                {
                    name: "water",
                }, {
                    name: "wine",
                }, {
                    name: "coffee",
                }
            ]
        }, {
            name: "suplements",
            color: 'purple',
            cells: [
                {
                    name: "omega-3",
                }, {
                    name: "zink",
                }, {
                    name: "iron",
                }, {
                    name: "BCCA",
                }
            ]
        }, {
            name: "workouts",
            color: 'indigo',
            cells: [
                {
                    name: "run",
                }, {
                    name: "bike",
                }, {
                    name: "swim",
                }
            ]
        }, {
            name: "body",
            color: 'blue',
            cells: [
                {
                    name: "headache",
                }, {
                    name: "acne",
                }, {
                    name: "tender breasts",
                }, {
                    name: "backpain",
                }
            ]
        }, {
            name: "menst. cycle",
            color: 'green',
            cells: [
                {
                    name: "menstruation",
                }, {
                    name: "weak bleeding",
                }, {
                    name: "medium bleeding",
                }, {
                    name: "heavy bleeding",
                }
            ]
        }, {
            name: "sleep",
            color: 'gray',
            cells: [
                {
                    name: "restless",
                }, {
                    name: "good",
                }, {
                    name: "great",
                }, {
                    name: "0-4h",
                }, {
                    name: "5-7h",
                }, {
                    name: "8-9h",
                }, {
                    name: "10-11h",
                }
            ]
        }]
    }

    return (
        <div className="mx-8 lg:mx-32">
            <Header name={"Marianna"}/>
            <div className="flex justify-between">
                {inputs.categories.map(cat => <Category name={cat.name} bg={cat.color} cells={cat.cells}/>)}
            </div>
            
        </div>
    )
}

export default HomePage