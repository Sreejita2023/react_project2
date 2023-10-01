import React from "react"
function Card(props){
    
   const course=props.course
   
   return (
      <div className="w-[300px] bg-black bg-opacity-40 rounded-md overflow-hidden">
         <div>
            <img src={course.image.url}/>
         </div>
         <div className="mx-4 my-5 text-white ">
             <div className=" text-xl mb-2 mr-4 font-semibold">
                {course.title}
             </div>
             <div className="text-base mb-2">
                {
                    course.description.length>100?course.description.substr(0,100)+"...":course.description
    
                }
             </div>
         </div>
      </div>
   )
}
export default Card