import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { getMeeting } from "src/enums/meeting_types";
import { IAttendance } from "src/Interfaces/attendance.interface";

type Props = {
  data: IAttendance[];
  url: string;
};

const columHelper = createColumnHelper<IAttendance>();

const AttendanceTable = ({ data, url }: Props) => {
  const columns = [
    columHelper.accessor("meetingType", {
      cell: (info) => <>{getMeeting(info.getValue())}</>,
      header: () => "Meeting ",
    }),
    columHelper.accessor("brothers", {
      cell: (info) => info.getValue(),
      header: () => "Brothers",
    }),
    columHelper.accessor("sisters", {
      cell: (info) => info.getValue(),
      header: () => "Sisters",
    }),
    columHelper.accessor("date", {
      cell: (info) => info.getValue(),
      header: () => "Date",
    }),
    columHelper.accessor("id", {
      cell: (info) => (
        <Link to={`/${url}/${info.getValue()}`}>
          <Button
            color="orange"
            size="xm"
            className="p-1.5 bg-orange-400 text-white rounded-md"
          >
            Update
          </Button>
        </Link>
      ),
      header: () => "",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Table>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Head
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
            key={headerGroup.id}
          >
            {headerGroup.headers.map((header) => (
              <Table.HeadCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Table.HeadCell>
            ))}
          </Table.Head>
        ))}

        <Table.Body className="divide-y">
          {table.getRowModel().rows.map((row) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <Table.Cell
                  className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default AttendanceTable;
