"use client";
import CreateFormSubmit from "@/components/forms/create-form";
import axios from "@/lib/axios";
import { useQuery } from "react-query";

export default function Page({ params }: { params: { slug: string } }) {
  const {
    data: response,
    isLoading,
    isError,
  } = useQuery(["service_provider", params.slug], async () => {
    const response = await axios.get(`/admin/service_provider?&sp_uid=8`);
    return response.data?.data?.service_providers[0];
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      <div className="">
        <CreateFormSubmit status={"update"} response={response} />
      </div>
    </div>
  );
}
