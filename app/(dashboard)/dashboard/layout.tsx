"use client";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

import { QueryClient, QueryClientProvider } from "react-query";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <QueryClientProvider client={queryClient}>
          <main className="w-full pt-16">{children}</main>
        </QueryClientProvider>
      </div>
    </>
  );
}
