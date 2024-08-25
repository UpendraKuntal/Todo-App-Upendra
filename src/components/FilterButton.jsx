import { useSelector } from "react-redux";
import { markAllCompleted } from "../Redux/Action/actions";
import { useDispatch } from "react-redux";


const FilterButton = () => {
    const dispatch=useDispatch();
  
  return (
    <div className="flex space-x-4 items-center">
      
      <button onClick={()=>dispatch(markAllCompleted())} className="text-sm px-2 py-1 bg-blue-700 text-white ml-2 rounded">Mark All Completed</button>
    </div>
  )
}

export default FilterButton