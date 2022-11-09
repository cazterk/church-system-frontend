import { useCallback } from "react";
import AttendanceForm from "src/components/forms/AttendanceForm";
import AttendanceService from "src/services/attendance.service";

const Update = () => {
  const initialValues = {
    brothers: 0,
    sisters: 0,
    meetingType: null,
    date: new Date(),
  };
  const handleSubmit = useCallback((values) => {
    // mutate({ ...values });
    // resetForm({});
  }, []);
  return (
    <>
      <AttendanceForm
        initialValues={initialValues}
        submit={handleSubmit}
        title={`update`}
      />
    </>
  );
};

export default Update;
