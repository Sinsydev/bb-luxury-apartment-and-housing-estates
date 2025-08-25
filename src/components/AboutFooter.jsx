 import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function AboutFooter() {
  return (
    <footer className="bg-black text-gray-200 py-12 px-4 mt-16">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold text-white mb-2">BB Luxury</h3>
          <p className="text-gray-400">
            Elevating everyday living with elegant design, uncompromising quality, and exceptional service.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+234 8165 0066 85</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaMapMarkerAlt /> <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Explore</h4>
          <ul className="text-gray-300 space-y-2">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="/apartments" className="hover:text-yellow-400 transition">Apartments</a></li>
            <li><a href="/gallery" className="hover:text-yellow-400 transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Get in touch</h4>
          <div className="text-gray-300 mb-4">
            <div className="flex items-center gap-2"><FaEnvelope /> <span>info@bbluxury.ng</span></div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a aria-label="Instagram" href="#" className="text-gray-300 hover:text-pink-400 transition"><FaInstagram size={20} /></a>
            <a aria-label="Facebook" href="#" className="text-gray-300 hover:text-blue-400 transition"><FaFacebookF size={20} /></a>
            <a aria-label="Twitter" href="#" className="text-gray-300 hover:text-sky-400 transition"><FaTwitter size={20} /></a>
          </div>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-center text-gray-500 text-sm mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        &copy; {new Date().getFullYear()} BB Luxury Apartment & Housing Estates. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default AboutFooter;