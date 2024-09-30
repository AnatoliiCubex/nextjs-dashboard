import { Suspense } from "react";
import Table from "~/app/ui/components/invoices/table";
import { CreateInvoice } from "~/app/ui/components/invoices/buttons";
import Search from "~/app/ui/components/search";
import { InvoicesTableSkeleton } from "~/app/ui/components/skeletons";
import { lusitana } from "~/app/ui/fonts/fonts";
import { fetchInvoicesPages } from "~/app/lib/data";
import Pagination from "~/app/ui/components/invoices/pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices",
};

type Props = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className='w-full'>
      <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      <div className='flex justify-between items-center gap-2 mt-4 md:mt-8'>
        <Search placeholder='Search invoices...' />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className='flex justify-center mt-5 w-full'>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
