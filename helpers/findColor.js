export default function findColor(cellName, definedCategories) {
    let cellColor = ""
    definedCategories.forEach(category => {
        category.cells.forEach(cell => {
            if (cell.name === cellName) {
                cellColor = category.color
            }
        })
    })
    return cellColor
}