
let d = new Date()
let year = d.getFullYear()
let month_num = d.getMonth()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = months[month_num]
let day = d.getDate()
let weekday_num = d.getDay()
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let weekday = weekdays[weekday_num]
let today = weekday + ", " + day.toString() + " " + month + " " + year.toString()

function Today() {
    
    return (
        <div className="text-green-300 font-semibold text-3xl relative flex justify-center p-4 ">
            {today}
        </div>
    )
}

export { Today, today }