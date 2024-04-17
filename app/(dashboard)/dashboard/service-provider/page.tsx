"use client";
import BreadCrumb from "@/components/breadcrumb";
import SelectOptions from "@/components/select-options";
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
  const [skill, setSkill] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();
  const [search, setSearch] = useState<string | undefined>();
  // Function to fetch data
  const fetchData = async () => {
    // Use URLSearchParams to manage query parameters
    const params = new URLSearchParams({
      page_number: String(page),
      page_size: String(limit),
    });

    // Append skill to the parameters only if it's defined
    if (skill) {
      params.append("skill", skill);
    }
    if (type) {
      params.append("job_type", type);
    }
    if (search) {
      params.append("search_key", search);
    }

    // Make the HTTP request with dynamic query parameters
    const response = await axios.get(`/admin/service_provider?${params}`);
    return response.data.data;
  };

  // The query for fetching data
  const { data, isLoading, isError, refetch } = useQuery(
    ["service_providers", page, limit, skill, search], // Use a key array to include all dependencies
    fetchData,
    {
      keepPreviousData: true, // Optional: useful for pagination
      staleTime: 5000, // Consider how long the data is fresh to avoid unnecessary updates
    },
  );

  // useEffect to trigger refetching when dependencies change
  useEffect(() => {
    refetch();
  }, [page, limit, skill, refetch, type]); // Include skill and refetch to the dependencies array

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
            href={"/dashboard/service-provider/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        <EmployeeTable
          setSearch={setSearch}
          setLimit={setLimit}
          setPage={setPage}
          searchKey="Service provider"
          pageNo={page}
          columns={columns}
          totalUsers={data?.total}
          data={data?.service_providers || []}
          pageCount={data?.service_providers?.length}
          filter={
            <div className="flex items-center gap-2">
              <SelectOptions
                placeholder="Filter by Skills"
                onValueChange={setSkill}
                options={SkillsOtions}
              />
              <SelectOptions
                placeholder="Filter by Job Type"
                onValueChange={setType}
                options={jobTypeOptions}
              />
            </div>
          }
        />
      </div>
    </>
  );
}

const SkillsOtions = [
  { value: "electrician", label: "Electrician" },
  { value: "plumber", label: "Plumber" },
  { value: "carpenter", label: "Carpenter" },
  { value: "painter", label: "Painter" },
  { value: "gardener", label: "Gardener" },
  { value: "cleaner", label: "Cleaner" },
];
const jobTypeOptions = [
  { value: "full-time", label: "Full Time" },
  { value: "part-time", label: "Part Time" },
  { value: "contract", label: "Contract" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
  { value: "temporary", label: "Temporary" },
];
