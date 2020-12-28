import Today from "./Today"

function Header(props) {
    return (
        <div className="mt-20 mb-20 relative flex justify-center">
            <div className="relative">
                <h1 className="text-5xl font-bold text-green-300">
                    Hi {props.name}, how is your day?
                </h1>
                <Today />
            </div>
        </div>
    )
}

export default Header