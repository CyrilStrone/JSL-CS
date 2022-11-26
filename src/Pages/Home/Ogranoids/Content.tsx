import { useStore } from "effector-react";
import React from "react";
import { $TaskLIst } from "../../../Common/GeneralHooks";
import { $GlobalSearchList } from "../Hooks";
import { ContentBlockPreview } from "../Molecules/ContentBlockPreview";
import "../Styles/Content.css";

export const Content = () => {
  const TaskLIst = useStore($TaskLIst);
  console.log(TaskLIst);
  const GlobalSearchList = useStore($GlobalSearchList);

  return (
    <div className="Home-Content">
      {TaskLIst.map((e: any, i: any) =>
        GlobalSearchList.ListCategory.length == 0 &&
        GlobalSearchList.Text == "" ? (
          <ContentBlockPreview
            shortName={e.shortName}
            category={e.category}
            id={e.id}
            Component={e.Component}
          />
        ) : GlobalSearchList.Text == "" ? (
          GlobalSearchList.ListCategory.map((e2: any) => {
            e2 == e.category ? (
              <ContentBlockPreview
                shortName={e.shortName}
                category={e.category}
                id={e.id}
                Component={e.Component}
              />
            ) : null
          })
        ) : GlobalSearchList.Text == e.shortName ? (
          <ContentBlockPreview
            shortName={e.shortName}
            category={e.category}
            id={e.id}
            Component={e.Component}
          />
        ) : (
          GlobalSearchList.ListCategory.map((e2: any) => {
            e2 == e.category ? (
              GlobalSearchList.Text == e.shortName ? (
                <ContentBlockPreview
                  shortName={e.shortName}
                  category={e.category}
                  id={e.id}
                  Component={e.Component}
                />
              ) : null
            ) : null;
          })
        )
      )}
    </div>
  );
};
