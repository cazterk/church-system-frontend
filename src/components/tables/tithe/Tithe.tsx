import { useQuery } from "@tanstack/react-query";

import SuspenseLoader from "src/components/SuspenseLoader";
import TableData from "src/components/tables/tithe";
import TitheService from "src/services/titthe.service";

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

  if (error instanceof Error)
    return (
      <div className="text-center text-red-500 font-bold ">
        {" "}
        An error has occurred: {error.message}⚠️
      </div>
    );

  return (
    <>
      <TableData data={data} url="update-tithe" />
    </>
  );
};
export default TitheTable;
