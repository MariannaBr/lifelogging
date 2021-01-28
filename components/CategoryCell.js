
export default function CategoryCell(props) {
    
    return (
            <span className={`text-lg text-${props.color}-300`}>{props.id}, </span>
    )
}