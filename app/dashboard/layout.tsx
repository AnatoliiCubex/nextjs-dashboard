import { PropsWithChildren } from "react";
import SideNav from "~/app/ui/components/dashboard/sidenav";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex md:flex-row flex-col h-screen md:overflow-hidden'>
      <SideNav />
      <div className='flex-grow p-6 md:p-12 md:overflow-y-auto'>{children}</div>
    </div>
  );
}
