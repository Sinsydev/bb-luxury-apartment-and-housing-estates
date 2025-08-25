import { motion } from "framer-motion";
import { FaShieldAlt, FaCouch, FaMapMarkerAlt, FaSwimmingPool } from "react-icons/fa";

function HomeTittle() {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-yellow-500 mb-2" />,
      title: "24/7 Security",
      desc: "Enjoy peace of mind with round-the-clock surveillance and gated access."
    },
    {
      icon: <FaCouch className="text-3xl text-yellow-500 mb-2" />,
      title: "Unmatched Comfort",
      desc: "Spacious, elegantly designed interiors for a truly luxurious lifestyle."
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-yellow-500 mb-2" />,
      title: "Prime Locations",
      desc: "Live close to the city’s best attractions, business hubs, and schools."
    },
    {
      icon: <FaSwimmingPool className="text-3xl text-yellow-500 mb-2" />,
      title: "World-Class Amenities",
      desc: "From pools to gyms, experience amenities that elevate your everyday."
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Why Choose <span className="text-yellow-500">BB Luxury</span>?
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
        <p className="text-lg md:text-xl text-gray-600 font-medium mb-10">
          Step into a world where sophistication, security, and serenity blend seamlessly. 
          Our estates are designed for those who demand the extraordinary—where every detail is crafted for comfort, style, and unforgettable living.
        </p>
      </motion.div>
      {/* Feature Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HomeTittle;