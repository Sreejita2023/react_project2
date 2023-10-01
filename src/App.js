import "./App.css";
import React, { useState ,useEffect} from "react";
import Head from "./components/Head";
import Nav from "./components/Nav";
import { filterData,apiUrl } from "./data";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";
function App() {

  const[data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const[category,setCategory]=useState(filterData[0].title)


    async function report (){
        setLoading(true)
        try{
            const response= await fetch(apiUrl) 
            // if(!response.ok){
            //     throw new Error("There is network problem")
            // }
            const jsonData=await response.json()
            setData(jsonData.data)
        }
        catch(error){
            console.error("Error fetching data",error)
        }
        setLoading(false)
    }
    useEffect(()=>{
        report()
    },[])
  return (
   <div>
       <div><Head></Head></div>
       <div className="bg-bg_dark min-h-screen flex flex-col ">
          <div >
             <Nav filterData={filterData} setCategory={setCategory}
             category={category}></Nav>
          </div>
          <div className="flex justify-center flex-wrap  items-center w-11/12 max-w-[1200px] min-h-[50vh] mx-auto">
             {
               loading ? <Spinner/> :<Cards course={data} category={category}/>
             }
          </div>
       </div>
   </div>
    
  );
}

export default App;
