 import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function HomeFooter() {
  return (
    <footer className="bg-gradient-to-tr from-black via-gray-900 to-gray-800 text-white py-10 px-4 mt-16">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-2">
            BB Luxury Apartment & Housing Estates
          </h2>
          <p className="text-gray-300 text-lg italic">
            "Where comfort meets class, and every detail is unforgettable."
          </p>
        </div>
        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <FaPhoneAlt className="text-lg" />
            <span>+234 8165 0066 85</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-lg" />
            <span>Lagos, Nigeria</span>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">
              <FaFacebookF size={22} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition">
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="text-center text-gray-400 text-sm mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} BB Luxury Apartment & Housing Estates. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default HomeFooter;