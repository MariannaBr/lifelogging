
let d = new Date()
let year = d.getFullYear()
let month_num = d.getMonth()
let day = d.getDate()
let weekday_num = d.getDay()

// generate date text for greeting

const months = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"]
let month = months[month_num]
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let weekday = weekdays[weekday_num]
const todayGreeting = weekday + ", " + day.toString() + " " + month + " " + year.toString()

// generate a today date for a chart

let month_chart = ((month_num + 1) < 10 ? '0' : '') + (month_num + 1).toString()
let day_chart = (day < 10 ? '0' : '') + (day.toString())
const todayChart = year.toString() + "-" + month_chart + "-" + day_chart

// generate a first date for chart (1 month earlier than today)

let firstDayChart_year = year
let lastMonth_num = month_num - 1
let lastMonth = ((lastMonth_num + 1) < 10 ? '0' : '') + (lastMonth_num + 1).toString()
if (lastMonth_num < 0) {
    lastMonth_num = 11
    firstDayChart_year = year - 1
}
const firstDayChart = firstDayChart_year.toString() + "-" + lastMonth + "-" + day_chart

export {todayGreeting, todayChart, firstDayChart }
