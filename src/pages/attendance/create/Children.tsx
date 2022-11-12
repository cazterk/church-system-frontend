import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";

import AttendanceService from "src/services/attendance.service";
import AttendanceForm from "src/components/forms/AttendanceForm";

const CreateChildrenAttendance = () => {
  const initialValues = {
    brothers: 0,
    sisters: 0,
    meetingType: null,
    date: new Date().toISOString(),
  };

  const { mutate } = useMutation(AttendanceService.createChildren);

  const handleSubmit = useCallback((values, { resetForm }) => {
    mutate({ ...values });
    resetForm({});
  }, []);
  return (
    <>
      <AttendanceForm
        initialValues={initialValues}
        submit={handleSubmit}
        title={`Children`}
      />
    </>
  );
};

export default CreateChildrenAttendance;
