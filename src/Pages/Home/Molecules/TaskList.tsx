import React, {  useState } from "react";
import {  TaskListItem } from "../Atoms/TaskListItem";
import { useStore } from "effector-react";
import { $itemsListArrayAll } from "../../../Common/GeneralHooks";

export const TaskList = () => {
  const itemsListArrayAll = useStore($itemsListArrayAll);


  let TaskList_itemsListArrayAll:any = [];
  itemsListArrayAll.value.map((e:any)=>{
    TaskList_itemsListArrayAll.push({ Name: e.Name,Id:e.Id},)
})

  const [TaskListShow, setTaskListShow] = useState(true);

  const onTaskListClick = () => {
    setTaskListShow(!TaskListShow);
  };
  return (
    <div className="Home-Header__TaskList">
      <button onClick={onTaskListClick}>Категории</button>
      <div
        className="Home-Header__TaskList__Items"
        style={TaskListShow ? { display: "none" } : {}}
      >
        {TaskList_itemsListArrayAll.map((e:any) => (
          <TaskListItem Name={e.Name} id={e.Id} />
        ))}
      </div>
    </div>
  );
};

