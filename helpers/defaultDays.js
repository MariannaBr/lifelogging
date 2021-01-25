
export default function generateDefaultDays(firstDay, today) {
    for (var defaultDays=[], dt=new Date(firstDay); dt<=today; dt.setDate(dt.getDate()+1)) {
        defaultDays.push(new Date(dt))
    }
    const days = defaultDays.map((day) => (day.getFullYear()).toString() + "-" + (day.getMonth()+1).toString() + "-" + (day.getDate()).toString())
    return days
}