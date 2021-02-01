
export default function CategoryCell(props) {
    
    return (
            <span className={`text-xl mt-4 text-${props.color}-300`}>{props.id}, </span>
    )
}