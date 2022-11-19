import React from "react";
import { SearchBlock } from "../Atoms/SearchBlock";
import {   setresetList } from "../Hooks";
import "../Styles/SearchSettingsPanel.css";
import { $resetList } from "../Hooks";
import { useStore } from "effector-react";

export const SearchSettingsPanel = () => {
  const resetList = useStore($resetList);

  return (
    <div className="Home-Header__Search-Panel">
      <SearchBlock />
      <button value="success">Поиск</button>
      <button value="error" onClick={()=>{setresetList(!resetList);}}>Отмена</button>
    </div>
  );
};
