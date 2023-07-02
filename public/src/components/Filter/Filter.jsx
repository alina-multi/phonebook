import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filterSlice";



const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(getFilter);
const onChange = e => dispatch(changeFilter(e.target.value));


   return  <div className="flex flex-col gap-3">
       
        <label  
         htmlFor="filter"
          className="block text-sm font-medium text-gray-700"> Find contacts by name </label>
           <input type="text" name="filter" value={filter}  onChange={onChange}
      
           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           placeholder="Enter some name"/>
       

</div>
}

export default Filter;