import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";

import AttendanceForm from "src/components/forms/AttendanceForm";
import AttendanceService from "src/services/attendance.service";

const CreateYouthsAttendance = () => {
  const initialValues = {
    brothers: 0,
    sisters: 0,
    meetingType: null,
    date: new Date(),
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
        title={`Youths`}
      />
    </>
  );
};

export default CreateYouthsAttendance;
