import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { NavbarData } from "../../components/navbar/navbarData";

const NavBar = () => {
  return (
    <div className="w-full ">
      <div className=" sider-menu flex justify-center">
        {NavbarData.map((item, index) => {
          return (
            <li className=" list-none">
              <IconContext.Provider value={{ size: "30" }}>
                <Link
                  to={item.path}
                  className="flex items-center text-base text-black font-semibold h-full rounded hover:bg-gray-100 hover:w-full p-4"
                >
                  {item.icon}
                  <span className="w-full ml-4">{item.title}</span>
                </Link>
              </IconContext.Provider>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
