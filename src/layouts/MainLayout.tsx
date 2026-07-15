import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
