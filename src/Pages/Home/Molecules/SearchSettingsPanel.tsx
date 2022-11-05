import React, { useEffect, useState } from "react";
import { SearchBlock } from "../Atoms/SearchBlock";
import "../Styles/SearchSettingsPanel.css";

export const SearchSettingsPanel = () => {
  const [searchGlob, setSearchGlob] = useState("");

  useEffect(() => {
    console.log("searchGlob", searchGlob);
  }, [searchGlob]);

  return (
    <div className="Home__Search-Panel">
      <SearchBlock setSearchGlob={setSearchGlob} />
      <button  value="success">
        
      </button>
      <button  value="error">
      </button>
    </div>
  );
};
