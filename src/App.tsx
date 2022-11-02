import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import routes from "src/router";

const App = () => {
  const queryClient = new QueryClient();

  const appInstance = useRoutes(routes);
  return (
    <QueryClientProvider client={queryClient}>
      {appInstance}
    </QueryClientProvider>
  );
};

export default App;
