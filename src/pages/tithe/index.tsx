import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";
import TitheTable from "src/components/tables/tithe/tithe";

const Tithe = () => {
  return (
    <div className=" w-4/6">
      <h1 className="text-center">This is the tithe page</h1>
      <div className="flex justify-end my-2">
        <div className="flex items-center mr-2">
          <h2 className="font-bold mr-1 ">Create Entry</h2>

          <i>
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle" } }}
            ></IconContext.Provider>
            <BsIcons.BsFillArrowRightSquareFill />
          </i>
        </div>

        <Link to="/create-tithe">
          <Button
            color="success"
            size="sm"
            className="p-1 bg-green-500 rounded-md"
          >
            Tithe
          </Button>
        </Link>
      </div>
      <TitheTable />
    </div>
  );
};

export default Tithe;
