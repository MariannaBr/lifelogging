import Today from "./Today"

function User(props) {
    return (
        <div className="bg-gray-900 my-10 sm:my-20 flex justify-center">
            <div className="">
                <h1 className="flex justify-center text-3xl sm:text-5xl lg:text-6xl leading-normal font-bold gradient-text">
                    Hi, how is your day?
                </h1>
                <Today />
            </div>
        </div>
    )
}

export default User