 import { motion } from "framer-motion";
import { FaAward, FaUsers, FaBuilding } from "react-icons/fa";

function HomeOverview() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image/Illustration */}
        <motion.img
          src="/images/estate-overview.webp"
          alt="BB Luxury Estate Overview"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        {/* Text & Stats */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-yellow-500">BB Luxury</span>
          </h3>
          <p className="text-gray-700 text-lg mb-8">
            At BB Luxury Apartment & Housing Estates, we redefine urban living with a blend of elegance, comfort, and innovation. Our commitment is to provide you with a home that’s not just a place to live, but a lifestyle to cherish.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <FaAward className="text-3xl text-yellow-500 mb-2" />
              <span className="text-2xl font-bold text-gray-900">10+</span>
              <span className="text-gray-600 text-sm">Years of Excellence</span>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-3xl text-yellow-500 mb-2" />
              <span className="text-2xl font-bold text-gray-900">500+</span>
              <span className="text-gray-600 text-sm">Happy Residents</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBuilding className="text-3xl text-yellow-500 mb-2" />
              <span className="text-2xl font-bold text-gray-900">Award-Winning</span>
              <span className="text-gray-600 text-sm">Architectural Designs</span>
            </div>
          </div>
          <a
            href="/about"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
          >
            Learn More About Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeOverview;