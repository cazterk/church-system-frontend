import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

import TitheService from "src/services/titthe.service";
import SuspenseLoader from "src/components/SuspenseLoader";
import Pagination from "../Pagination";
import { getMeeting } from "src/enums/meeting_types";
import { tableTd, tableTh } from "src/styles/table";

const TitheTable = () => {
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(7);
  let [categories] = useState({
    Meeting: 1,
    "Amount Collected": 2,
    Date: 3,
    Actions: 4,
  });

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["tithe"],
    queryFn: TitheService.getAllTithe,
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
    <React.Fragment>
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
                  {currentEntries.map((tithe: any, index: any) => (
                    <tr className="border-b" key={index}>
                      <td className={`${tableTd}`}>
                        {getMeeting(tithe.meetingType)}
                      </td>
                      <td className={`${tableTd}`}>{tithe.collectedAmount}</td>
                      <td className={`${tableTd}`}>{tithe.date}</td>
                      <td className={`${tableTd}`}>
                        {" "}
                        <Link to={`/update-tithe/${tithe.id}`}>
                          <Button
                            color="orange"
                            size="xm"
                            className="p-1.5 bg-orange-400 text-white rounded"
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
    </React.Fragment>
  );
};

export default TitheTable;
