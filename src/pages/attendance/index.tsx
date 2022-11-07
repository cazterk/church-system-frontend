import AttendanceTabs from "src/components/tabs/attendanceTabs";
import AttendanceTable from "src/components/tables/attendanceTable";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Attendance = () => {
  return (
    <div className=" w-4/6">
      <h1 className="text-center py-5">This is the attendance page</h1>
      <div>
        <Link to="/children-form">
          <Button size="sm">Small</Button>
        </Link>
      </div>
      <AttendanceTabs />
    </div>
  );
};

export default Attendance;
