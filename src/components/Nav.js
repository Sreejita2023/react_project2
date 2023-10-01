import React from "react"


function Nav(props){
    let filterData=props.filterData
    let category=props.category
    let setCategory=props.setCategory


    const showNav=filterData.map((data)=>
        <button className={` text-lg py-2 px-4 rounded-md font-medium mb-3
        text-white bg-black mr-4 hover:bg-opacity-50 border-2 transition duration-300 ${category===data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}key={data.id} onClick={()=>{setCategory(data.title)}}>
             {data.title}
        </button>
     )
    return (
       <div className=" w-11/12 flex flex-wrap justify-center max-w-max space-x-4 mx-auto py-4 gap-y-4 ">
           <div >{showNav}</div>
       </div>
       
    )
}
export default Nav