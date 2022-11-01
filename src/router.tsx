import { Suspense, lazy, ReactComponentElement } from "react";
import type { RouteObject } from "react-router-dom";
import SuspenseLoader from "./components/SuspenseLoader";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// components
const Layout = Loader(lazy(() => import("./container/Layout")));

// pages
const HomePage = Loader(lazy(() => import("./pages/home")));
const AttendancePage = Loader(lazy(() => import("./pages/attendance")));
const TithePage = Loader(lazy(() => import("./pages/tithe")));

const routes: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/attendance",
        element: <AttendancePage />,
      },
      {
        path: "/tithe",
        element: <TithePage />,
      },
    ],
  },
];

export default routes;
