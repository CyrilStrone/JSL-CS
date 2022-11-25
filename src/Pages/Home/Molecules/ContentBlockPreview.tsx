import React, { useEffect, useState } from "react";
import "../Styles/ContentBlockPreview.css";

export interface IContentBlockPreview {
  id?: string;
  shortName?: string;
  category?: string;
  Component?:JSX.Element;
  icheck?:boolean;
}
export const ContentBlockPreview = (params: IContentBlockPreview) => {
  const [check,setcheck] = useState(false);
  useEffect(()=>{
    setcheck(false)
  },[params.icheck])
  return (
    <>
    <div className="Home-Content__Block-Preview" onClick={()=>setcheck(true)}>
      <div className="Home-Content__Block-Preview__shortName">
        {params.shortName}
      </div>
      <div className="Home-Content__Block-Preview__category">
      <div className="Home-Content__Block-Preview__category-title">
        Категория:
      </div>
      <div className="Home-Content__Block-Preview__category-name">
        {params.category}
      </div>
      </div>
    </div>
    {check ? params.Component:null}
    </>
  );
};
