import React, { useEffect, useState } from "react"
import Card from "./Card"
import { apiUrl } from "../data"
function Cards(props){
    const[data,setData]=useState(null)
    const report=async()=>{
        try{
            const response= await fetch(apiUrl) 
            if(!response.ok){
                throw new Error("There is network problem")
            }
            const jsonData=await response.json()
            setData(jsonData.data)
        }
        catch(error){
            console.error("Error fetching data",error)
        }
    }
    useEffect(()=>{
        report()
    },[])
    
    return(
        <div>
            <Card name={props.name} items={JSON.stringify(data)}></Card>
        </div>
    )
}
export default Cards