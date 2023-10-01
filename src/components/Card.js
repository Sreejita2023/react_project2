import React from "react"
function Card(props){
    
   const course=props.course
   
   return (
      <div className="w-[300px] rounded-md overflow-hidden">
         <div>
            <img src={course.image.url}/>
         </div>
         <div>
            {course.title}
         </div>
         <div>
            {
                course.description.length>100?course.description.substr(0,100)+"...":course.description

            }
         </div>
      </div>
   )
}
export default Card