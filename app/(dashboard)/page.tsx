import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center my-auto">
      <div className="flex items-center justify-center my-auto h-screen mx-auto">
        <Link href={"/login"} className="px-6 py-4 bg-blue-400 rounded-3xl">
          Login
        </Link>
      </div>
    </div>
  );
};

export default page;
