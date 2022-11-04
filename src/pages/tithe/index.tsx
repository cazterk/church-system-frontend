import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TitheTable from "src/components/tables/titheTable";

const Tithe = () => {
  return (
    <div className=" w-4/6">
      <h1 className="text-center">This is the tithe page</h1>
      <TitheTable />

      <div className="flex flex-wrap items-center gap-2">
        <Link to="/tithe-form">
          <Button type="submit">Add New Entry</Button>
        </Link>
      </div>
    </div>
  );
};

export default Tithe;
