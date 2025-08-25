 import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const images = Array.from({ length: 11 }).map((_, i) => ({
  id: i + 1,
  src: `/src/images/gallery${i + 1}.webp`,
  alt: `Gallery image ${i + 1}`,
}));

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function GalleryCard() {
  const [openIndex, setOpenIndex] = useState(null);
  const open = openIndex !== null;

  // lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // keyboard navigation for modal
  const handleKey = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    },
    [open]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const openAt = (i) => setOpenIndex(i);
  const close = () => setOpenIndex(null);
  const next = () => setOpenIndex((i) => (i + 1) % images.length);
  const prev = () => setOpenIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Gallery</h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {images.map((img, i) => (
              <motion.button
                key={img.id}
                onClick={() => openAt(i)}
                className="relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-yellow-400"
                variants={item}
                aria-label={`Open ${img.alt}`}
                type="button"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute left-3 bottom-3 text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md text-sm">
                  {`Image ${i + 1}`}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* content */}
          <motion.div
            className="relative max-w-5xl w-full mx-auto"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.36, ease: "easeOut" }}
          >
            <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-xl">
              <img
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                className="w-full max-h-[80vh] object-contain bg-black"
              />

              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/75 to-transparent">
                <div className="text-white">
                  <div className="font-semibold">{images[openIndex].alt}</div>
                  <div className="text-sm text-gray-300">BB Luxury — Gallery</div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <button
                    onClick={close}
                    aria-label="Close"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* thumbs / index */}
            <div className="mt-3 flex items-center justify-center gap-2">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setOpenIndex(idx)}
                  aria-label={`Show image ${idx + 1}`}
                  className={`w-10 h-10 rounded overflow-hidden border-2 ${idx === openIndex ? "border-yellow-400" : "border-transparent"} focus:outline-none`}
                  type="button"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
      </>
  );
}