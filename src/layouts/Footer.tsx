// layouts/Footer.tsx
"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      toast.warn("Please enter your email before subscribing! 😅");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Hmm, this doesn't look like a valid email 😅");
      return;
    }
    toast.success(`Congrats! You’re now subscribed with ${email} 🎉`);
    setEmail("");
  };

  return (
    <footer className="bg-[#9CAFAA] text-gray-800 mt-10 relative">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand Section */}
        <div>
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-gray-900"
          >
            <Package size={24} />
            <span>Trackify</span>
          </Link>
          <p className="mt-2 text-xl font-normal text-black">
            Reliable parcel tracking and management made simple. Manage, track,
            and deliver with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/parcels"
                className="hover:underline hover:text-gray-900"
              >
                Parcels
              </Link>
            </li>
            <li>
              <Link
                to="/tracking"
                className="hover:underline hover:text-gray-900"
              >
                Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:underline hover:text-gray-900"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-gray-900"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:underline hover:text-gray-900"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline hover:text-gray-900">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +8801890159627
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@trackify.com
            </li>
            <li className="flex items-center gap-2">
              <span>123 Boalkhali, Chittagong, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for latest updates and offers.
          </p>
          <div className="flex gap-2 mb-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2  w-full"
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>

          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-[#D6DAC8] rounded-full hover:bg-gray-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-[#D6DAC8] rounded-full hover:bg-gray-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-[#D6DAC8] rounded-full hover:bg-gray-300"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#D6DAC8] text-center text-sm py-3 mt-6">
        © {new Date().getFullYear()} Trackify. All rights reserved. | Developed
        by Mainur Rahat
      </div>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </footer>
  );
};

export default Footer;
