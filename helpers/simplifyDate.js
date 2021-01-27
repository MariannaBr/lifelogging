export default function simplifyDate(date) {
    const day = date.slice(date.length-2)
    const month = date.slice(5,7)
    const chartDate = day + "." + month + "."
    return chartDate
}