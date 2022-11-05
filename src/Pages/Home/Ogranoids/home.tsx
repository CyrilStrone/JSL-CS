import React from "react";
import { SearchSettingsPanel } from "../Molecules/SearchSettingsPanel";
import { TaskList } from "../Molecules/TaskList";
import "../Styles/Home.css";

export const Home = () => {

  return (
    <div className="Home">
     <SearchSettingsPanel />
     <TaskList />
    </div>
  );
};
