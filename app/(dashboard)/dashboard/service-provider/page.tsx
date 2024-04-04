"use client";
import BreadCrumb from "@/components/breadcrumb";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import { columns } from "@/components/tables/user-tables/columns";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import axios from "@/lib/axios";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
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
    const { data } = await axios.get(
      "service_provider?page_number=1&page_size=5",
    );
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
            title={`Service Provider (${data?.total})`}
            description="Manage Service Providers (Server side table functionalities.)"
          />

          <Link
            href={"/dashboard/employee/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        <EmployeeTable
          setLimit={setLimit}
          setPage={setPage}
          searchKey="country"
          pageNo={page}
          columns={columns}
          totalUsers={data?.total}
          data={data?.service_providers || []}
          pageCount={data?.service_providers?.length}
        />
      </div>
    </>
  );
}
