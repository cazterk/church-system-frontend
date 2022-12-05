import { Avatar } from "flowbite-react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import AvatarTooltip from "../tooltips/AvatarTooltip";

const NavBar = () => {
  return (
    <div className="w-full shadow-md flex justify-between px-8 ">
      <i className="flex items-center">logo</i>
      <div className=" sider-menu flex justify-center px-5">
        {NavbarData.map((item, index) => {
          return (
            <li className=" list-none " key={index}>
              <IconContext.Provider value={{ size: "30" }}>
                <Link
                  to={item.path}
                  className="flex items-center text-base text-black font-semibold h-full rounded-md hover:bg-gray-100 hover:w-full p-4"
                >
                  {item.icon}
                  <span className="w-full ml-4">{item.title}</span>
                </Link>
              </IconContext.Provider>
            </li>
          );
        })}
      </div>
      <AvatarTooltip />
    </div>
  );
};

export default NavBar;
