import { Suspense, lazy, ReactComponentElement } from "react";
import type { RouteObject } from "react-router-dom";
import SuspenseLoader from "src/components/SuspenseLoader";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// components
const Layout = Loader(lazy(() => import("src/container/Layout")));

// pages
const HomePage = Loader(lazy(() => import("src/pages/home")));
const AttendancePage = Loader(lazy(() => import("src/pages/attendance")));
const TithePage = Loader(lazy(() => import("src/pages/tithe")));

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
