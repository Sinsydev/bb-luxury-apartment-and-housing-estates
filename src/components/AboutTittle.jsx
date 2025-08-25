 import { motion } from "framer-motion";
import { FaGem, FaRegLightbulb, FaUsers } from "react-icons/fa";

function AboutTittle() {
  const cards = [
    {
      icon: <FaGem className="text-3xl text-yellow-400 mb-3" />,
      title: "Distinctive Design",
      desc: "Timeless architecture and premium finishes crafted to endure."
    },
    {
      icon: <FaRegLightbulb className="text-3xl text-yellow-400 mb-3" />,
      title: "Thoughtful Innovation",
      desc: "Smart features and modern amenities for effortless living."
    },
    {
      icon: <FaUsers className="text-3xl text-yellow-400 mb-3" />,
      title: "Community Focus",
      desc: "Spaces and services designed to connect residents and foster wellbeing."
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="text-sm text-yellow-500 font-semibold mb-2">Our Identity</p>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.08, duration: 0.7 }}
        >
          Crafted for <span className="text-yellow-400">Luxury</span>, Built for Life
        </motion.h2>

        <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6" />

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.16, duration: 0.7 }}
        >
          At BB Luxury we combine elegant design, thoughtful amenities and community-first planning to deliver residences that stand out and stand the test of time.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.article
              key={i}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.12 * i, duration: 0.7, ease: "easeOut" }}
            >
              {c.icon}
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm">{c.desc}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <a
            href="/about#mission"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
          >
            Read Our Mission
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutTittle;