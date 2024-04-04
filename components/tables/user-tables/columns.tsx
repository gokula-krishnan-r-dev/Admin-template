"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "full_name",
    header: "NAME",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "mobile_number",
    header: "MOBILE",
  },
  {
    accessorKey: "residential_address",
    header: "ADDRESS",
  },
  {
    accessorKey: "type_of_service_provided",
    header: "TYPE",
  },
  // {
  //   accessorKey: "licence",
  //   header: "LICENCE",
  // },
  // {
  //   accessorKey: "experience_in_years",
  //   header: "EXPERIENCE",
  // },
  // {
  //   accessorKey: "workingHoursStartTime",
  //   header: "START TIME",
  // },
  {
    accessorKey: "profilePic",
    header: "PROFILE PIC",
  },
  {
    accessorKey: "languagesSpeak",
    header: "LANGUAGES",
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
export const BookingColumns: ColumnDef<User>[] = [
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
    accessorKey: "booking_uid",
    header: "ID",
  },
  {
    accessorKey: "customer_name",
    header: "NAME",
  },
  {
    accessorKey: "location",
    header: "LOCATION",
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  {
    accessorKey: "service_provider_name",
    header: "SERVICE PROVIDER",
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
    accessorKey: "cus_uid",
    header: "CUSTOMER ID",
  },
  {
    accessorKey: "sp_uid",
    header: "SERVICE PROVIDER ID",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
