import { filterData } from "../data"
function Nav(){
    function showCard(){
         filterData && filterData.map(data=>)
    }
    return (
       <div>
           <button onClick={showCard}>All</button>
           <button onClick={showCard}>Development</button>
           <button onClick={showCard}>Business</button>
           <button onClick={showCard}>Design</button>
           <button onClick={showCard}>Lifestyle</button>
       </div>
    )dd
}
export default Nav