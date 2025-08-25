import { motion } from "framer-motion";

function HomeHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/videos/bb-bg1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      {/* Animated Headline */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl md:text-5xl font-extrabold mb-6 drop-shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, type: "spring" }}
        >
           BB Luxury Appartment And Housing Estates For <span className="text-yellow-400">Luxury Living</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl font-medium mb-10 drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Discover the Pinnacle of Sustainable, Remarkable, Captivated living Apartments.<br />
          Welcome to a world where elegance meets comfort and every moment is unforgettable.
        </motion.p>
        <motion.a
          href="#apartments"
          className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          Explore Our Estates
        </motion.a>
      </motion.div>
    </section>
  );
}

export default HomeHero;