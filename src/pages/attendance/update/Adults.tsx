import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import AttendanceForm from "src/components/forms/AttendanceForm";
import AttendanceService from "src/services/attendance.service";

const UpdateYouthsAttendance = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["adults", { id }],
    queryFn: AttendanceService.getOneAdultsEntry,
  });
  const { mutate } = useMutation(AttendanceService.updateAdults);

  const handleSubmit = useCallback((values) => {
    mutate({ ...values, id });
  }, []);

  return (
    <>
      <AttendanceForm
        initialValues={data}
        submit={handleSubmit}
        title={`Update This Adults`}
      />
    </>
  );
};

export default UpdateYouthsAttendance;
