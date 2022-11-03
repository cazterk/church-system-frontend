import { useQuery } from "@tanstack/react-query";
import AttendanceService from "src/services/attendance.service";
import SuspenseLoader from "src/components/SuspenseLoader";
import { getMeeting } from "src/enums/meeting_types";

const AdultsTable = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["adults"],
    queryFn: AttendanceService.getAllAdults,
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
    <>
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
                      Brothers
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Sisters
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
                  {data.map((adults: any, index: any) => (
                    <tr className="border-b" key={index}>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {getMeeting(adults.meetingType)}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {adults.brothers}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {adults.sisters}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {adults.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdultsTable;
