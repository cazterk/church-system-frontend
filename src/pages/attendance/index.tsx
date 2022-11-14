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

        <Link to="/create-children">
          <Button
            color="success"
            size="sm"
            className="p-1 bg-green-500 rounded-md"
          >
            Children
          </Button>
        </Link>
        <Link to="/create-youths">
          <Button
            color="success"
            size="sm"
            className="p-1 mx-1 bg-green-500 rounded-md"
          >
            Youths
          </Button>
        </Link>
        <Link to="/create-adults">
          <Button
            color="success"
            size="sm"
            className="p-1 bg-green-500 rounded-md"
          >
            Adults
          </Button>
        </Link>
      </div>
      <AttendanceTabs />
    </div>
  );
};

export default Attendance;
