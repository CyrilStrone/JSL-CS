import React, { useEffect, useRef, useState } from "react";
import "../Styles/ContentBlockPreview.css";

export interface IContentBlockPreview {
  id?: string;
  shortName?: string;
  category?: string;
  Component?:JSX.Element;
}
export const ContentBlockPreview = (params: IContentBlockPreview) => {
  const [check,setcheck] = useState(false);
  const rootEl = useRef(null);
  useEffect(() => {
    const onClick = (e: { target: any; }) => rootEl.current.contains(e.target) || setcheck(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return (
    <div ref={rootEl} className="Home-Content__Block-Preview" onClick={()=>setcheck(true)}>
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
      {check ? params.Component:null}
    </div>
  );
};
