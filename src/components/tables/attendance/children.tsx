import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import AttendanceService from "src/services/attendance.service";
import SuspenseLoader from "src/components/SuspenseLoader";
import { getMeeting } from "src/enums/meeting_types";
import Pagination from "src/components/Pagination";
import { tableTd, tableTh } from "src/styles/table";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import AttendanceTable from ".";

const ChildrenTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(7);
  let [categories] = useState({
    Meeting: 1,
    Brothers: 2,
    Sisters: 3,
    Date: 4,
    Actions: 5,
  });

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

  const indexOfLastEntry = currentPage * rowsPerPage;
  const indexOfFirstEntry = indexOfLastEntry - rowsPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <AttendanceTable data={data} url="update-children" />
    </>
  );
};

export default ChildrenTable;
