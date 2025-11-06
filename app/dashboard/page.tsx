// app/dashboard/page.tsx
import SideNav from '../ui/dashboard/sidenav';

export default function Page() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100">
        <SideNav />
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to the dashboard page.</p>
      </main>
    </div>
  );
}
