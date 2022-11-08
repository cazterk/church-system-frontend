import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import AttendanceForm from "src/components/forms/AttendanceForm";
import AttendanceService from "src/services/attendance.service";
import SuspenseLoader from "src/components/SuspenseLoader";

const UpdateYouthsAttendance = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["youths", id],
    queryFn: AttendanceService.getOneYouthsEntry,
  });
  //   const { mutate } = useMutation(AttendanceService.updateYouths);

  const handleSubmit = useCallback((values, { resetForm }) => {
    // mutate({ ...values, id });
    resetForm({});
  }, []);

  if (isLoading)
    return (
      <div>
        {" "}
        <SuspenseLoader />
      </div>
    );

  if (error)
    return (
      <div className="text-center ">
        {" "}
        An error has occurred: {error.message}
      </div>
    );
  return (
    <>
      <AttendanceForm
        initialValues={data}
        submit={handleSubmit}
        title={`Youths`}
      />
    </>
  );
};

export default UpdateYouthsAttendance;
