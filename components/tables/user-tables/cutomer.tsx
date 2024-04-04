"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";

export const CustomerColumn: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "cus_uid",
    header: "ID",
  },
  {
    accessorKey: "full_name",
    header: "NAME",
  },
  {
    accessorKey: "mobile_number",
    header: "MOBILE",
  },
  {
    accessorKey: "location",
    header: "LOCATION",
  },
  {
    accessorKey: "latitude",
    header: "LATITUDE",
  },
  {
    accessorKey: "longitude",
    header: "LONGITUDE",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
