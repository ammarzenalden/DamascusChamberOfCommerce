import { Outlet } from 'react-router';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
