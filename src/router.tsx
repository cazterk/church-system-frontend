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
const TitheForm = Loader(lazy(() => import("src/components/forms/TitheForm")));

// pages
const HomePage = Loader(lazy(() => import("src/pages/home")));
const AttendancePage = Loader(lazy(() => import("src/pages/attendance")));
const TithePage = Loader(lazy(() => import("src/pages/tithe")));
const CreateChildrenAttendance = Loader(
  lazy(() => import("src/pages/attendance/create/Children"))
);
const CreateYouthsAttendance = Loader(
  lazy(() => import("src/pages/attendance/create/Youths"))
);
const CreateAdultsAttendance = Loader(
  lazy(() => import("src/pages/attendance/create/Adults"))
);

const UpdateYouthsAttendance = Loader(
  lazy(() => import("src/pages/attendance/update/Youths"))
);

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
        path: "/create-children",
        element: <CreateChildrenAttendance />,
      },
      {
        path: "/create-youths",
        element: <CreateYouthsAttendance />,
      },
      {
        path: "/create-adults",
        element: <CreateAdultsAttendance />,
      },
      {
        path: "/update-youths/:id",
        element: <UpdateYouthsAttendance />,
      },
    ],
  },
];

export default routes;
