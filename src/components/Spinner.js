
import "./Spinner.css"
function Spinner(){
    return(
        <div className="flex flex-col items-center">
            <div className="custom-loader"></div>
            <div>Loading...</div>
        </div>
    )
}
export default Spinner