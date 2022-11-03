import { useQuery } from "@tanstack/react-query";
import TitheService from "src/services/titthe.service";
import React, { useEffect } from "react";
import SuspenseLoader from "src/components/SuspenseLoader";

const TitheTable = () => {
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
  if (error)
    return (
      <div className="text-center ">
        {" "}
        An error has occurred: {error.message}
      </div>
    );

  return (
    <React.Fragment>
      <div className="flex flex-col  ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Meeting
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Amount Collected
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((tithe: any, index: any) => (
                    <tr className="border-b" key={index}>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {tithe.meetingType}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {tithe.collectionedAmount}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {tithe.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TitheTable;
