"use client";
import BreadCrumb from "@/components/breadcrumb";
import SelectOptions from "@/components/select-options";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import {
  BookingColumns,
  columns,
} from "@/components/tables/user-tables/columns";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
const statusFilter = [
  {
    value: "PENDING",
    label: "Pending",
  },
  {
    value: "CONFIRMED",
    label: "Confirmed",
  },
  {
    value: "CANCELLED",
    label: "Cancelled",
  },
  {
    value: "COMPLETED",
    label: "Completed",
  },
  {
    value: "ALL",
    label: "All",
  },
];
const breadcrumbItems = [
  { title: "Service Provider", link: "/dashboard/service-provider" },
];

export default function Page() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState<string>("ALL");
  const [search, setSearch] = useState<string | undefined>();
  const fetchBookings = async () => {
    const queryParams = new URLSearchParams({
      page_number: page.toString(),
      page_size: limit.toString(),
    });

    if (status !== "ALL") {
      queryParams.append("status", status);
    }
    if (search) {
      queryParams.append("search_key", search);
    }
    const response = await axios.get(
      `/admin/booking?${queryParams.toString()}`,
    );
    return response.data.data;
  };

  const { data, isLoading, isError, refetch } = useQuery(
    ["bookings", page, limit, status, search], // This ensures the query reruns when any of these values change
    fetchBookings,
    {
      keepPreviousData: true, // Useful for pagination to keep old data visible while new data is loading
    },
  );

  useEffect(() => {
    refetch();
  }, [page, limit, status, refetch, search]); // Include `refetch` as it is stable and comes from useQuery

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Bookings (${data?.total || 0})`}
            description="Manage Bookings (Server side table functionalities.)"
          />
        </div>
        <Separator />

        <EmployeeTable
          setSearch={setSearch}
          setLimit={setLimit}
          setPage={setPage}
          searchKey="country"
          pageNo={page}
          columns={BookingColumns}
          totalUsers={data?.total}
          data={data?.bookings || []}
          pageCount={data?.total}
          filter={
            <SelectOptions
              placeholder="Filter by status"
              onValueChange={setStatus}
              options={statusFilter}
            />
          }
        />
      </div>
    </>
  );
}
