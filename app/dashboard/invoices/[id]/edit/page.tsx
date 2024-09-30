import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchInvoiceById, fetchCustomers } from "~/app/lib/data";

import Breadcrumbs from "~/app/ui/components/invoices/breadcrumbs";
import EditInvoiceForm from "~/app/ui/components/invoices/edit-form";

export const metadata: Metadata = {
  title: "Edit Invoice",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
  );
}
