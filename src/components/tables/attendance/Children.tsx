import { useQuery } from "@tanstack/react-query";

import AttendanceService from "src/services/attendance.service";
import SuspenseLoader from "src/components/SuspenseLoader";

import AttendanceTable from ".";

const ChildrenTable = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["children"],
    queryFn: AttendanceService.getAllChildren,
  });

  if (isLoading)
    return (
      <div>
        {" "}
        <SuspenseLoader />
      </div>
    );

  if (error instanceof Error)
    return (
      <div className="text-center text-red-500 font-bold ">
        {" "}
        An error has occurred: {error.message}⚠️
      </div>
    );

  return (
    <>
      <AttendanceTable data={data} url="update-children" />
    </>
  );
};

export default ChildrenTable;
