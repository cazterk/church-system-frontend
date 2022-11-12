import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import AttendanceService from "src/services/attendance.service";
import AttendanceForm from "src/components/forms/AttendanceForm";

const UpdateChildrenAttendance = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["children", { id }],
    queryFn: AttendanceService.getOneChildrenEntry,
  });
  const { mutate } = useMutation(AttendanceService.updateChildren);

  const handleSubmit = useCallback((values) => {
    mutate({ ...values, id });
  }, []);

  return (
    <>
      <AttendanceForm
        initialValues={data}
        submit={handleSubmit}
        title={`Update`}
      />
    </>
  );
};

export default UpdateChildrenAttendance;
