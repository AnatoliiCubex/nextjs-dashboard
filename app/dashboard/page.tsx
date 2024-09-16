import { Card } from "~/app/ui/components/dashboard/cards";
import RevenueChart from "~/app/ui/components/dashboard/revenue-chart";
import LatestInvoices from "~/app/ui/components/dashboard/latest-invoices";
import { lusitana } from "~/app/ui/fonts/fonts";
import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from "~/app/lib/data";

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4'>
        <Card title='Collected' value={totalPaidInvoices} type='collected' />
        <Card title='Pending' value={totalPendingInvoices} type='pending' />
        <Card title='Total Invoices' value={numberOfInvoices} type='invoices' />
        <Card
          title='Total Customers'
          value={numberOfCustomers}
          type='customers'
        />
      </div>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 mt-6'>
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
