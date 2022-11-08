import { UA } from "Pages/Content";
import { Home } from "Pages/Home/Ogranoids/Home";
import React from "react";
import { useRoutes } from "react-router-dom";
import "../Common/Styles/reset.css";

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <Home />,
    
  };

  const accountRoutes = {
    path: 'account',
    element: <UA />,
  };

  const routing = useRoutes([mainRoutes, accountRoutes]);

  return <>{routing}</>;
 
};

export default App;
