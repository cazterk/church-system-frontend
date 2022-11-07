import AttendanceTabs from "src/components/tabs/attendanceTabs";
import AttendanceTable from "src/components/tables/attendanceTable";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BsIcons from "react-icons/bs";

const GroupEntries = "children" || "youths" || "adults";

const Attendance = () => {
  const [group, setGroup] = useState(GroupEntries);
  // let attendancePostFun;
  // if (group === "children") {
  //   attendancePostFun = AttendanceService.createChildren;
  // } else if (group === "youths") {
  //   attendancePostFun = AttendanceService.createYouths;
  // } else if (group === "adults") {
  //   attendancePostFun = AttendanceService.createAdults;
  // }

  const childrenClicked = () => setGroup("children");
  const youthsClicked = () => setGroup("youths");
  const adultsClicked = () => setGroup("adults");

  // useEffect(() => {
  //   console.log("clicked group is :", group);
  // });

  return (
    <div className=" w-4/6">
      <h1 className="text-center py-5">This is the attendance page</h1>
      <div className="flex justify-end my-2">
        <h2 className="font-semibold mr-6">Create Entry</h2>
        <i>
          {" "}
          <BsIcons.BsFillArrowRightSquareFill />
        </i>
        <Link to="/attendance-form">
          <Button size="sm" className="p-1 bg-green-600">
            Children
          </Button>
        </Link>
        <Link to="/youths-form">
          <Button size="sm" className="p-1 mx-1">
            Youths
          </Button>
        </Link>
        <Link to="/adults-form">
          <Button size="sm" className="p-1">
            Adults
          </Button>
        </Link>
      </div>
      <AttendanceTabs />
    </div>
  );
};

export default Attendance;
