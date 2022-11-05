import { Home } from "Pages/Home/Ogranoids/Home";
import React from "react";
import { useRoutes } from "react-router-dom";
import "../Common/Styles/reset.css";

const App: React.FC = (): JSX.Element => {
  const GeneralRoutes = {
    path: "/",
    element: <Home />,
  };
  const routing = useRoutes([GeneralRoutes]);

  return <>{routing}</>;
};

export default App;
