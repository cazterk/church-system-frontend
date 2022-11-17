import { Suspense, lazy, ReactComponentElement } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import SuspenseLoader from "src/components/SuspenseLoader";
import AuthService from "src/services/auth.service";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// components
const Layout = Loader(lazy(() => import("src/container/Layout")));

// pages
const LoginPage = Loader(lazy(() => import("src/container/Login")));
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
const CreateTithe = Loader(lazy(() => import("src/pages/tithe/create/")));

const UpdateYouthsAttendance = Loader(
  lazy(() => import("src/pages/attendance/update/Youths"))
);
const UpdateChildrenAttendance = Loader(
  lazy(() => import("src/pages/attendance/update/Children"))
);
const UpdateAdultsAttendance = Loader(
  lazy(() => import("src/pages/attendance/update/Adults"))
);
const UpdateTithe = Loader(lazy(() => import("src/pages/tithe/update")));

let isAuthenticated = null;
const token = AuthService.getCurrentToken();
isAuthenticated = token !== "expired";

const routes: RouteObject[] = [
  {
    path: "",
    element: !isAuthenticated ? <LoginPage /> : <Navigate to="home" />,
  },

  {
    path: "",
    element: isAuthenticated ? <Layout /> : <LoginPage />,
    children: [
      {
        path: "home",
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
        path: "/create-tithe",
        element: <CreateTithe />,
      },
      {
        path: "/update-youths/:id",
        element: <UpdateYouthsAttendance />,
      },
      {
        path: "update-children/:id",
        element: <UpdateChildrenAttendance />,
      },
      {
        path: "update-adults/:id",
        element: <UpdateAdultsAttendance />,
      },
      {
        path: "update-tithe/:id",
        element: <UpdateTithe />,
      },
    ],
  },
];

export default routes;
