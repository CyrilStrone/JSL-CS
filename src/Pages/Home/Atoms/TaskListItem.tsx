import React, { useEffect, useState } from "react";
import { $itemsListArray, $resetList, setitemsListArray } from "../Hooks";
export interface ITaskListItem {
  id?: string;
  class?: string;
  Name: string;
}
import { useStore } from "effector-react";

export const TaskListItem = (params: ITaskListItem) => {
  const [value, setvalue] = useState(false);
  const resetList = useStore($resetList);
  const itemsListArray = useStore($itemsListArray);

  useEffect(()=>{
    if(value){
      setitemsListArray([...itemsListArray,params.Name])
    }else{
      setitemsListArray(itemsListArray.filter((n) => {return n != params.Name}))
    }
  },[value])

  useEffect(()=>{
    setvalue(false)
  },[resetList])
  
  return (
    <div className="Home-Header__TaskList__Item">
      <label htmlFor={params.id}>
        <input type="checkbox" id={params.id} checked={value} onChange={() => setvalue(!value)} name={params.Name}></input>
        {params.Name}
      </label>
    </div>
  );
};
