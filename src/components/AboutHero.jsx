 // ...existing code...
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="relative h-[80vh] md:h-[70vh] flex items-center">
      <img
        src="/src/images/estate-overview.webp"
        alt="BB Luxury Estate"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        {/* animate when scrolled into view; repeat every time it re-enters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm md:text-base text-yellow-400 font-medium mb-2 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.05, duration: 0.6 }}
          >
            Since 2014 • Premium Estates
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.12, duration: 0.9, ease: "easeOut" }}
          >
            Crafting Exceptional Living — <span className="text-yellow-400">Thoughtfully Designed</span> for You
          </motion.h1>

          <motion.p
            className="text-sm md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.22, duration: 0.8 }}
          >
            At BB Luxury we combine timeless architecture, modern amenities and community-focused living to create homes that matter.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.32, duration: 0.7 }}
          >
            <Link
              to="/about"
              className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
            >
              Our Story
            </Link>
            <a
              href="#team"
              className="inline-block text-white/90 border border-white/20 px-5 py-2 rounded-full hover:bg-white/5 transition text-sm"
            >
              Meet the Team
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* subtle scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm hidden md:block">
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          Scroll to learn more
        </motion.span>
      </div>
    </section>
  );
}

export default AboutHero;
// ...existing code...