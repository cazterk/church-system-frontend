import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";

import AttendanceForm from "src/components/forms/AttendanceForm";
import AttendanceService from "src/services/attendance.service";
import { meetingTypesSetter } from "src/enums/meeting_types";

const CreateYouthsAttendance = () => {
  const initialValues = {
    brothers: 0,
    sisters: 0,
    meetingType: 0,
    date: new Date(),
  };

  const { mutate } = useMutation(AttendanceService.createYouths);

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
