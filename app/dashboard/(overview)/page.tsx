import CardWrapper from "~/app/ui/components/dashboard/cards";
import RevenueChart from "~/app/ui/components/dashboard/revenue-chart";
import LatestInvoices from "~/app/ui/components/dashboard/latest-invoices";
import { lusitana } from "~/app/ui/fonts/fonts";

import { Suspense } from "react";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "~/app/ui/components/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4'>
        <Suspense key={"card-skeleton"} fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 mt-6'>
        <Suspense key={"revenue-skeleton"} fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense
          key={"invoices-skeleton"}
          fallback={<LatestInvoicesSkeleton />}
        >
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
