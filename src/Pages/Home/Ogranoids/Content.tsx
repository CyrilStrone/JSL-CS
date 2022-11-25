import { useStore } from "effector-react";
import React from "react";
import { $TaskLIst } from "../../../Common/GeneralHooks";
import { ContentBlockPreview } from "../Molecules/ContentBlockPreview";
import "../Styles/Content.css";

export interface IContentBlockPreview {
  icheck?:boolean;
}

export const Content = (params:IContentBlockPreview) => {
  const TaskLIst = useStore($TaskLIst);

  return (
      <div className="Home-Content">
        {
        TaskLIst.map((e:any, i:any) => (
              <ContentBlockPreview shortName={e.shortName} category={e.category} id={e.id} Component={e.Component} icheck={params.icheck} />
            ))
        }
      </div>
  );
};
