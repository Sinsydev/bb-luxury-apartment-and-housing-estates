import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-black text-white">
      <img
        src="/src/images/bb-logo.webp"
        alt="Contact BB Luxury"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col justify-end h-full pb-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}>
          <p className="text-sm text-yellow-400 font-medium mb-2">Get in touch</p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Contact BB Luxury</h1>
          <p className="mt-3 text-gray-200 max-w-2xl">
            Whether you're enquiring about a listing, scheduling a viewing or want to partner with us — we're here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}