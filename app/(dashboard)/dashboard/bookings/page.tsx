"use client";
import BreadCrumb from "@/components/breadcrumb";
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

const breadcrumbItems = [
  { title: "Service Provider", link: "/dashboard/service-provider" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: paramsProps) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, isError, refetch } = useQuery("page", async () => {
    const { data } = await axios.get("booking?page_number=1&page_size=10");
    return data.data;
  });

  useEffect(() => {
    refetch();
  }, [page, limit]);

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
          setLimit={setLimit}
          setPage={setPage}
          searchKey="country"
          pageNo={page}
          columns={BookingColumns}
          totalUsers={data?.total}
          data={data?.bookings || []}
          pageCount={data?.total}
        />
      </div>
    </>
  );
}
