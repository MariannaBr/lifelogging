export default function generateDefaultDays(firstDay, today) {
    for (var defaultDays=[], dt=new Date(firstDay); dt<=today; dt.setDate(dt.getDate()+1)) {
        defaultDays.push(new Date(dt))
    }
    const days = defaultDays.map((day) => (day.getFullYear()).toString() + "-" + (((day.getMonth()+1) < 10 ? "0" : "") + (day.getMonth()+1).toString()) + "-" + (((day.getDate() < 10 ? "0" : "") + (day.getDate()).toString())))
    return days
}