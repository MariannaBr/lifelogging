export default function deleteItem(arr, val) {
    return (arr.filter((cell) => cell != val))
}