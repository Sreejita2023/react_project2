
import { useState } from "react"
import Card from "./Card"
function Cards(props){
    const courses=props.course
    const category=props.category
    const [likecourse,setLikecourse]=useState([])
    function add(){
        
    }
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
                <Card key={part.id} course={part} setLikecourse={setLikecourse} likecourse={likecourse}/>
             ))
           }
        </div>
    )
}
export default Cards