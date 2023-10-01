import React from "react"
import { toast } from "react-toastify"

import {FcLike,FcLikePlaceholder } from "react-icons/fc";
const Card=(props) =>{
   const likecourse=props.likecourse
   const setLikecourse=props.setLikecourse
   const course=props.course
   function clickHandler(){
    //    main logic(most important part of this project)
       if(likecourse.includes(course.id)){
            // agar pehle se hai
            setLikecourse((prev)=>prev.filter((cid)=>cid!==course.id))
            toast.warn('Liked removed', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
       }
       else{
           if(likecourse.length===0){
             setLikecourse([course.id])
           }
           else{
                 setLikecourse((prev)=>[...prev ,course.id])
           }
           toast.success('Liked Succesfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
       }
   }
   return (
      <div className="w-[300px] bg-black bg-opacity-40 rounded-md overflow-hidden">
         <div className="relative">
            <img src={course.image.url}/>
            <div className="w-[40px] h-[40px] absolute bg-white rounded-full  right-2 bottom-[-10px] grid place-items-center">
                <button onClick={clickHandler}>
                    {
                        likecourse.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)

                    }
                </button>
            </div>
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