import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: "t1",
    name: "Amaka Johnson",
    role: "Resident, Skyline Penthouse",
    rating: 5,
    text: "Living here transformed our lifestyle — impeccable design, attentive management and a real sense of community.",
    img: "/src/images/comments.webp",
  },
  {
    id: "t2",
    name: "Chinedu Okoro",
    role: "Owner, Garden Suite",
    rating: 5,
    text: "Thoughtful finishes and amenities. Every detail screams quality — highly recommended.",
    img: "/src/images/comments.webp",
  },
  {
    id: "t3",
    name: "Ibrahim Aminu Said",
    role: "Tenant, Urban Loft",
    rating: 5,
    text: "The location and interior finishes are exceptional. Management is responsive and professional.",
    img: "/src/images/comments.webp",
  },
  {
    id: "t4",
    name: "Olumide Akin",
    role: "Family, Riverside Corner",
    rating: 5,
    text: "Spacious, secure and beautifully designed — perfect for families.",
    img: "/src/images/comments.webp",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  );
}

function Avatar({ src, name }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-neutral-900 shadow-sm"
        loading="lazy"
      />
    );
  }
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 to-yellow-500 text-white font-bold shadow-sm">
      {initials}
    </div>
  );
}

function TestimonialCard({ t, i }) {
  const ref = useRef(null);
  // will re-trigger each time the element re-enters viewport
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: i * 0.06 }}
      className="rounded-xl p-6 shadow-lg"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(250,250,250,0.85))",
      }}
    >
      <div className="flex flex-col md:flex-row items-start gap-4">
        <Avatar src={t.img} name={t.name} />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">{t.name}</h3>
              <div className="text-sm text-neutral-600">{t.role}</div>
            </div>
            <StarRow count={t.rating} />
          </div>
          <p className="mt-3 text-sm text-neutral-700">{t.text}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function ApartmentsComment() {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
          Resident Stories
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          Real experiences from people who call BB Luxury home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
 