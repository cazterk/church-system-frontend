import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

import routes from "src/router";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const queryClient = new QueryClient();
  const notify = () => toast("Wow so easy !");
  const appInstance = useRoutes(routes);
  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
      {appInstance}
    </QueryClientProvider>
  );
};

export default App;
