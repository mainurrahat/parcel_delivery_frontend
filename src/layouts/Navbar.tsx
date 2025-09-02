// layouts/Navbar.tsx
import { Link, NavLink } from "react-router-dom";
import {
  Package,
  Home,
  ClipboardList,
  User,
  Users,
  LogOut,
  Menu,
} from "lucide-react";
import { useState } from "react";

// Simulate a logged-in user role for now
type UserRole = "guest" | "sender" | "receiver" | "admin";
const currentUserRole: UserRole = "guest"; // Replace with auth state from Redux/RTK Query

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define role-based links
  const roleBasedLinks = {
    guest: [
      { path: "/", label: "Home", icon: <Home size={18} /> },
      { path: "/about", label: "About", icon: <ClipboardList size={18} /> },
      { path: "/contact", label: "Contact", icon: <Package size={18} /> },
      { path: "/login", label: "Login", icon: <User size={18} /> },
      { path: "/register", label: "Register", icon: <User size={18} /> },
    ],
    sender: [
      { path: "/", label: "Dashboard", icon: <Home size={18} /> },
      {
        path: "/create-parcel",
        label: "Create Parcel",
        icon: <Package size={18} />,
      },
      {
        path: "/my-parcels",
        label: "My Parcels",
        icon: <ClipboardList size={18} />,
      },
      { path: "/tracking", label: "Track Parcel", icon: <Package size={18} /> },
      { path: "/profile", label: "Profile", icon: <User size={18} /> },
      { path: "/logout", label: "Logout", icon: <LogOut size={18} /> },
    ],
    receiver: [
      { path: "/", label: "Dashboard", icon: <Home size={18} /> },
      {
        path: "/incoming-parcels",
        label: "Incoming Parcels",
        icon: <ClipboardList size={18} />,
      },
      { path: "/tracking", label: "Track Parcel", icon: <Package size={18} /> },
      { path: "/profile", label: "Profile", icon: <User size={18} /> },
      { path: "/logout", label: "Logout", icon: <LogOut size={18} /> },
    ],
    admin: [
      { path: "/", label: "Dashboard", icon: <Home size={18} /> },
      { path: "/users", label: "Manage Users", icon: <Users size={18} /> },
      {
        path: "/parcels",
        label: "Manage Parcels",
        icon: <Package size={18} />,
      },
      {
        path: "/tracking",
        label: "Track Parcel",
        icon: <ClipboardList size={18} />,
      },
      { path: "/profile", label: "Profile", icon: <User size={18} /> },
      { path: "/logout", label: "Logout", icon: <LogOut size={18} /> },
    ],
  };

  const links = roleBasedLinks[currentUserRole];

  return (
    <nav className="bg-[#9CAFAA] text-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-bold tracking-wide text-gray-900"
        >
          <Package size={24} />
          <span>ParcelManager</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md transition ${
                  isActive ? "bg-[#D6DAC8]" : "hover:bg-[#D6DAC8]"
                }`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[#D6DAC8]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#D6DAC8] px-4 py-3 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md transition ${
                  isActive ? "bg-[#9CAFAA]" : "hover:bg-[#9CAFAA]"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
