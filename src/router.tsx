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

//forms
const TitheForm = Loader(lazy(() => import("src/components/forms/titheForm")));
const ChildrenForm = Loader(
  lazy(() => import("src/components/forms/ChildrenForm"))
);
const YouthsForm = Loader(
  lazy(() => import("src/components/forms/YouthsForm"))
);
const AdultsForm = Loader(
  lazy(() => import("src/components/forms/AdultsForm"))
);

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
      {
        path: "/tithe-form",
        element: <TitheForm />,
      },
      {
        path: "/children-form",
        element: <ChildrenForm />,
      },
      {
        path: "/youths-form",
        element: <YouthsForm />,
      },
      {
        path: "/adults-form",
        element: <AdultsForm />,
      },
    ],
  },
];

export default routes;
