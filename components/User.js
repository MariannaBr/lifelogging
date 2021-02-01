import Today from "./Today"

function User(props) {
    return (
        <div className="bg-gray-900 mt-20 mb-20 relative flex justify-center">
            <div className="relative">
                <h1 className="text-5xl leading-normal font-bold gradient-text">
                    Hi {props.name}, how is your day?
                </h1>
                <Today />
            </div>
        </div>
    )
}

export default User