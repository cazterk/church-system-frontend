import { Tab } from "@headlessui/react";
import ChildrenTable from "src/components/tables/attendance/children";
import YouthsTable from "src/components/tables/attendance/youths";
import AdultsTable from "src/components/tables/attendance/adults";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AttendanceTabs = () => {
  let [categories] = useState({
    Children: 1,
    Youths: 2,
    Adults: 3,
  });
  return (
    <div className=" flex flex-col  justify-center  w-full ">
      <Tab.Group>
        <Tab.List className=" flex space-x-1 rounded-xl bg-blue-300/20 p-1">
          {Object.keys(categories).map((category, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-200 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-black hover:bg-white/[0.12]"
                )
              }
            >
              {" "}
              {category}
            </Tab>
          ))}
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
