 import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-gray-500 font-semibold"
            : "text-white hover:text-blue-600"
        }
        end
        onClick={() => setSidebarOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-gray-500 font-semibold"
            : "text-white hover:text-blue-600"
        }
        onClick={() => setSidebarOpen(false)}
      >
        About
      </NavLink>
      <NavLink
        to="/apartments"
        className={({ isActive }) =>
          isActive
            ? "text-gray-500 font-semibold"
            : "text-white hover:text-blue-600"
        }
        onClick={() => setSidebarOpen(false)}
      >
        Apartments
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive
            ? "text-gray-500 font-semibold"
            : "text-white hover:text-blue-900"
        }
        onClick={() => setSidebarOpen(false)}
      >
        Gallery
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-gray-500 font-semibold"
            : "text-white hover:text-blue-600"
        }
        onClick={() => setSidebarOpen(false)}
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/">
          <img
            src="/images/bb-logo.webp"
            alt="BB Luxury Logo"
            className="h-10 w-auto"
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">{navLinks}</div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-50 bg-black shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            <img
              src="/src/images/bb-logo.webp"
              alt="BB Luxury Logo"
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="text-white"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6 py-8">{navLinks}</div>
      </div>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

        </nav>
  );
}


export default Navbar;
