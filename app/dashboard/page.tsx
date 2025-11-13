// app/dashboard/page.tsx
import SideNav from '../ui/dashboard/sidenav';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '../lib/data';

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100">
        <SideNav />
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to the dashboard page.</p>
        
        {/* You can add the dashboard components here later */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          {/* Card components will go here */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {/* RevenueChart and LatestInvoices will go here */}
        </div>
      </main>
    </div>
  );
}