// ...existing code...
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ApartmentsFooter() {
  return (
    <footer className="bg-black text-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src="/src/images/bb-logo.webp"
              alt="BB Luxury Logo"
              className="h-10 w-auto"
            />
            <span className="text-lg font-semibold">BB Luxury</span>
          </Link>
          <p className="mt-3 text-gray-400 max-w-sm">
            Elegant residences crafted for lasting value, comfort and community.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Explore</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/apartments" className="hover:text-yellow-400 transition">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-400 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & social */}
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Contact</h4>
          <div className="text-gray-400 space-y-2">
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> <span className="text-sm">+234 800 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> <span className="text-sm">info@bbluxury.ng</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span className="text-sm">Lagos, Nigeria</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-300 hover:text-pink-400 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition text-sm"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BB Luxury Apartment & Housing Estates. All rights reserved.
      </div>
    </footer>
  );
}

export default ApartmentsFooter;