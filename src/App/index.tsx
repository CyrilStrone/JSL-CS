import { Home } from "Pages/Home/Ogranoids/home";
import React from "react";
import { useRoutes } from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  const GeneralRoutes = {
    path: "/",
    element: <Home />,
  };
  const routing = useRoutes([GeneralRoutes]);

  return <>{routing}</>;
};

export default App;
