import { useState } from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import AttendanceService from "src/services/attendance.service";
import SuspenseLoader from "src/components/SuspenseLoader";
import { getMeeting } from "src/enums/meeting_types";
import Pagination from "src/components/Pagination";
import { tableTd, tableTh } from "src/styles/table";
import { Button } from "flowbite-react";

const YouthsTable = () => {
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
    queryKey: ["youths"],
    queryFn: AttendanceService.getAllYouths,
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
      <div className="flex flex-col  ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    {Object.keys(categories).map((category, index) => (
                      <th key={index} scope="col" className={`${tableTh}`}>
                        {category}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentEntries.map((youths: any, index: any) => (
                    <tr className="border-b" key={index}>
                      <td className={`${tableTd}`}>
                        {getMeeting(youths.meetingType)}
                      </td>
                      <td className={`${tableTd}`}>{youths.brothers}</td>
                      <td className={`${tableTd}`}>{youths.sisters}</td>
                      <td className={`${tableTd}`}>{youths.date}</td>
                      <td className={`${tableTd}`}>
                        <Link to={`/update-youths/${youths.id}`}>
                          <Button
                            color="orange"
                            size="xm"
                            className="p-1.5 bg-orange-400 text-white"
                          >
                            Update
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                rowsPerPage={rowsPerPage}
                totalPages={data.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouthsTable;
