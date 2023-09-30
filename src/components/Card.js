
function Card(props){
    // const idx=props.index
    // const branch=props.name
    const field=props.items
    
    const cards=field.Development}.map((part)=>(
         <div key={part.index}>
             {part.title}
         </div>
    ))
    return(
        <div>
            {cards}
        </div>
    )
}
export default Card