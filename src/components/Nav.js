import React from "react"
import { useState } from "react"
import { filterData } from "../data"
import Cards from "./Cards"
function Nav(){
    const[idx,setIdx]=useState("All")
    const showNav=filterData.map((data,index)=>
        <button key={index} onClick={()=>{setIdx(data.title)}}>
             {data.title}
        </button>
     )
    return (
       <div>
           <div>{showNav}</div>
           <Cards name={idx}></Cards>
       </div>
       
    )
}
export default Nav