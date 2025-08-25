import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background image fills the section */}
      <img
        src="/src/images/gallery-bg.webp"
        alt="Gallery background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

      {/* Left-bottom content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-4 md:left-12 bottom-6 md:bottom-12 z-10 max-w-md text-left text-white"
        aria-hidden={false}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Our <span className="text-yellow-400">Gallery</span>
        </h2>
        <p className="mt-3 text-sm md:text-lg text-gray-200 max-w-xs md:max-w-sm">
          A curated collection of residences and spaces — explore interiors, exteriors and amenities.
        </p>
      </motion.div>

      {/* subtle decorative gradient on the right (balance) */}
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}