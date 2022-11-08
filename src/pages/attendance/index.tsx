import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";
import AttendanceTabs from "src/components/tabs/attendanceTabs";

const Attendance = () => {
  return (
    <div className=" w-4/6">
      <h1 className="text-center py-5">This is the attendance page</h1>
      <div className="flex justify-end my-2">
        <div className="flex items-center mr-2">
          <h2 className="font-bold mr-1 ">Create Entry</h2>

          <i>
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle" } }}
            ></IconContext.Provider>
            <BsIcons.BsFillArrowRightSquareFill />
          </i>
        </div>

        <Link to="/children-form">
          <Button color="success" size="sm" className="p-1 bg-green-500">
            Children
          </Button>
        </Link>
        <Link to="/youths-form">
          <Button color="success" size="sm" className="p-1 mx-1 bg-green-500">
            Youths
          </Button>
        </Link>
        <Link to="/adults-form">
          <Button color="success" size="sm" className="p-1 bg-green-500">
            Adults
          </Button>
        </Link>
      </div>
      <AttendanceTabs />
    </div>
  );
};

export default Attendance;
