import React from "react";
import { useStore } from "effector-react";
import { $searchGlob, setsearchGlob } from "../Hooks";



export const SearchBlock = () => {
  const searchGlob = useStore($searchGlob);

  return (
    <div className="Home__Search-Panel__Search-Block">
      <input
        value={searchGlob}
        type="text"
        className="Home__Search-Panel__Search-Block__Input"
        placeholder="Search"
        onChange={(e) => {setsearchGlob(e.currentTarget.value)}}
      />
    </div>
  );
};
