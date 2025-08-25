import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      when: "beforeChildren",
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function ApartmentsHero() {
  return (
    <section className="relative h-[80vh] md:h-[85vh] lg:h-[75vh] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/videos/Apartments-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Left-bottom animated content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="absolute left-4 md:left-12 bottom-6 md:bottom-12 z-20 max-w-md lg:max-w-lg"
        aria-hidden={false}
      >
        <motion.h2
          variants={itemUp}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
        >
          Our Apartments
        </motion.h2>

        <motion.p
          variants={itemUp}
          className="mt-3 text-sm md:text-lg text-gray-200 max-w-xs md:max-w-sm"
        >
          Curated residences crafted for modern luxury — exceptional design, premium amenities, and timeless comfort.
        </motion.p>

        <motion.a
          variants={itemUp}
          href="#apartments"
          className="inline-block mt-6 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-yellow-300 transition"
        >
          View Listings
        </motion.a>
      </motion.div>

      {/* subtle decorative gradient on far-right for balance (optional) */}
      <div className="absolute right-0 bottom-0 top-0 w-24 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}


export default ApartmentsHero;