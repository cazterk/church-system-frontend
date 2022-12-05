import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

import routes from "src/router";
import { ToastContainer } from "react-toastify";

const App = () => {
  const queryClient = new QueryClient();
  const appInstance = useRoutes(routes);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      {appInstance}
    </QueryClientProvider>
  );
};

export default App;
