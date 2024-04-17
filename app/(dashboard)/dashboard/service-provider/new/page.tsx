import BreadCrumb from "@/components/breadcrumb";
import CreateFormSubmit from "@/components/forms/create-form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import React from "react";
const breadcrumbItems = [
  { title: "Service Provider", link: "/dashboard/service-provider" },
  { title: "New Service Provider", link: "/dashboard/service-provider/new" },
];

const page = () => {
  return (
    <main>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Service Provider `}
            description="Manage Service Providers (Server side table functionalities.)"
          />
        </div>
        <Separator />
        <div className="">
          <CreateFormSubmit />
        </div>
      </div>
    </main>
  );
};

export default page;
