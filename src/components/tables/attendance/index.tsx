import { Link } from "react-router-dom";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Button, Table } from "flowbite-react";
import * as BiIcons from "react-icons/bi";

import { getMeeting } from "src/enums/meeting_types";
import { IAttendance } from "src/Interfaces/attendance.interface";
import { spliceDate } from "src/utils/functions";

interface Props {
  data: IAttendance[];
  url: string;
}

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
      cell: (info) => <>{spliceDate(info.getValue())}</>,
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
    getPaginationRowModel: getPaginationRowModel(),
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
              <Table.HeadCell key={header.id} className="capitalize text-base">
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
      <div>
        <div className="flex justify-center my-5 items-center">
          <Button
            pill={true}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <BiIcons.BiChevronsLeft className="h-6 w-6" />
          </Button>
          <Button
            pill={true}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <BiIcons.BiLeftArrowAlt className="h-6 w-6" />
          </Button>
          <Button
            pill={true}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <BiIcons.BiRightArrowAlt className="h-6 w-6" />
          </Button>
          <Button
            pill={true}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <BiIcons.BiChevronsRight className="h-6 w-6" />
          </Button>

          <span className="flex items-center gap-1 mx-2">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1 mx-2">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 h-9"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="border p-1 rounded w-24 h-9"
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default AttendanceTable;
