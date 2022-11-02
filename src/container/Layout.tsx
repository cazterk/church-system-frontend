import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center p-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
