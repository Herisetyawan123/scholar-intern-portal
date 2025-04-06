import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  BookOpenIcon,
  GiftIcon,
  Squares2X2Icon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Scholarships", path: "/scholarships", icon: <BookOpenIcon className="w-5 h-5" /> },
    { name: "Internships", path: "/internships", icon: <GiftIcon className="w-5 h-5" /> },
    { name: "Not found", path: "/aasfdw4trvdcv", icon: <Squares2X2Icon className="w-5 h-5" /> },
  ];

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-400 to-blue-700 flex items-center justify-center text-white">
            <BookOpenIcon className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold text-blue-900">ScholarHub</span>
        </div>

        {/* Hamburger Button (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // close menu on click
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
