import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import AttendanceService from "src/services/attendance.service";
import SuspenseLoader from "src/components/SuspenseLoader";
import { getMeeting } from "src/enums/meeting_types";
import Pagination from "src/components/pagination";

const ChildrenTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(7);
  let [categories] = useState({
    Meeting: 1,
    Brothers: 2,
    Sisters: 3,
    Date: 3,
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

  if (error)
    return (
      <div className="text-center ">
        {" "}
        An error has occurred: {error.message}
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
                      <th
                        key={index}
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {category}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentEntries.map((children: any, index: any) => (
                    <tr className="border-b" key={index}>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {getMeeting(children.meetingType)}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {children.brothers}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {children.sisters}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {children.date}
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

export default ChildrenTable;
