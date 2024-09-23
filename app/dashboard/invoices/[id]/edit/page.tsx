import { fetchInvoiceById, fetchCustomers } from "~/app/lib/data";

import Breadcrumbs from "~/app/ui/components/invoices/breadcrumbs";
import Form from "~/app/ui/components/invoices/create-form";
import EditInvoiceForm from "~/app/ui/components/invoices/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

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
