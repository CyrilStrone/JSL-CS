import React, { useEffect, useState } from "react";
import { SearchSettingsPanel } from "../Molecules/SearchSettingsPanel";
import { TaskList } from "../Molecules/TaskList";
import { useStore } from "effector-react";

import "../Styles/Home.css";
import {
  $GlobalSearchList,
  $itemsListArray,
  $resetList,
  $searchGlob,
  setGlobalSearchList,
  setitemsListArray,
  setresetList,
  setsearchGlob,
} from "../Hooks";
import { Content } from "./Content";
let checkNumner = 0;

export const Home = () => {
  const [check, setcheck] = useState(false);
  useEffect(()=>{console.log(check)},[check])
  const GlobalSearchList = useStore($GlobalSearchList);
  const itemsListArray = useStore($itemsListArray);
  const searchGlob = useStore($searchGlob);
  const resetList = useStore($resetList);
  useEffect(() => {
    if (resetList == true) {
      setitemsListArray([]);
      setsearchGlob("");
    }
  }, [resetList]);
  useEffect(() => {
    if (resetList) {
      checkNumner = checkNumner + 1;
    }
    if (checkNumner == 0) {
      setGlobalSearchList({ ListCategory: itemsListArray, Text: searchGlob });
    }
    if (checkNumner == 2) {
      setGlobalSearchList({ ListCategory: itemsListArray, Text: searchGlob });
      setresetList(false);
      checkNumner = 0;
    }
  }, [searchGlob, itemsListArray]);

  useEffect(() => {
    console.log("GlobalSearchList", GlobalSearchList);
  }, [GlobalSearchList]);

  return (
    <div className="Home" onClick={() => setcheck(false)}>
      <div className="Home-Header">
        <SearchSettingsPanel />
        <TaskList />
      </div>
      <Content icheck={check}  />
    </div>
  );
};
