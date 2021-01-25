
let d = new Date()
let year = d.getFullYear()
let month_num = d.getMonth()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = months[month_num]
let day = d.getDate()
let weekday_num = d.getDay()
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let weekday = weekdays[weekday_num]

const todayGreeting = weekday + ", " + day.toString() + " " + month + " " + year.toString()
const todayChart = year.toString() + "-" + (month_num + 1).toString() + "-" + day.toString()

    
export {todayGreeting, todayChart}
