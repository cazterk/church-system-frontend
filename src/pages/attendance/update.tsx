import { useCallback } from "react";
import AttendanceForm from "src/components/forms/AttendanceForm";
import AttendanceService from "src/services/attendance.service";

const Update = () => {
  const handleSubmit = useCallback((values) => {
    console.log("values", values);
    AttendanceService.createChildren(JSON.stringify(values, null, 2));
  }, []);
  return (
    <>
      <AttendanceForm submit={handleSubmit} />
    </>
  );
};

export default Update;
