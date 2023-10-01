
import Card from "./Card"
function Cards(props){
    const courses=props.course
    const category=props.category
    function getcourses(){
        if(category==="All"){
          let arr=[]
          Object.values(courses).forEach(course=>(
              course.forEach(item=>(
                 arr.push(item)
              ))
          ))
          return arr
        }
        else{
            return courses[category]
        }
     }
    
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4 ">
           {
             getcourses().map(part =>(
                <Card key={part.id} course={part}/>
             ))
           }
        </div>
    )
}
export default Cards