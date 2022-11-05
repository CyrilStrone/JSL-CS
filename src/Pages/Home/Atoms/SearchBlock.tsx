import React, { useEffect, useState } from "react";
interface ISearchBlock {
  setSearchGlob: React.Dispatch<React.SetStateAction<any>>;
}
export const SearchBlock = (params: ISearchBlock) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    params.setSearchGlob(search);
  }, [search]);

  return (
    <div className="Home__Search-Panel__Search-Block">
      <input
        value={search}
        type="text"
        className="Home__Search-Panel__Search-Block__Input"
        placeholder="Search"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </div>
  );
};
