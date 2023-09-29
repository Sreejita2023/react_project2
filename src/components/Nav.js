import React from "react"
import { useState } from "react"
import { filterData } from "../data"
import Cards from "./Cards"
function Nav(){
    const[idx,setIdx]=useState(1)
    function showCard(props){
        setIdx(props)
    }
    const showNav=filterData.map((data)=>(
        <button onClick={showCard(data.id)}>
             {data.title}
        </button>
    ))
    return (
       <div>
          <div>{showNav}</div>
          <div>
              <Cards name={idx}></Cards>
          </div>
       </div>
    )
}
export default Nav