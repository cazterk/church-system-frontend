import AttendanceTabs from "src/components/tabs/attendanceTabs";
import AttendanceTable from "src/components/tables/attendanceTable";

const Attendance = () => {
  return (
    <div className=" w-4/6">
      <h1 className="text-center py-5">This is the attendance page</h1>
      <AttendanceTabs />
    </div>
  );
};

export default Attendance;
