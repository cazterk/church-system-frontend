import { Tab } from "@headlessui/react";
import ChildrenTable from "src/components/tables/attendance/children";
import YouthsTable from "src/components/tables/attendance/youths";
import AdultsTable from "src/components/tables/attendance/adults";

const AttendanceTabs = () => {
  return (
    <div className=" flex flex-col  justify-center  w-full ">
      <Tab.Group>
        <Tab.List className="text-center">
          <Tab>Children</Tab>
          <Tab>Youths</Tab>
          <Tab>Adults</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ChildrenTable />
          </Tab.Panel>
          <Tab.Panel>
            <YouthsTable />
          </Tab.Panel>
          <Tab.Panel>
            <AdultsTable />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default AttendanceTabs;
