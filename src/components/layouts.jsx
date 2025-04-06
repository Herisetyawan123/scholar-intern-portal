import { Link, Outlet } from "react-router-dom";
import Navbar from "./navbar";
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
