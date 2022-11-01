import { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = () => {
  const appInstance = useRoutes(routes);
  return <>{appInstance}</>;
};

export default App;
