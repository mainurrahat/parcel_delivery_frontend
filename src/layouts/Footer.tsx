// layouts/Footer.tsx
import { Link } from "react-router-dom";
import { Package, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#9CAFAA] text-gray-800 mt-10">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand Section */}
        <div>
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-gray-900"
          >
            <Package size={24} />
            <span>ParcelManager</span>
          </Link>
          <p className="mt-2 text-sm text-gray-700">
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
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
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
      <div className="bg-[#D6DAC8] text-center text-sm py-3 mt-4">
        © {new Date().getFullYear()} ParcelManager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
