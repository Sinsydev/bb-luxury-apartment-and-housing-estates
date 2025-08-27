 import { motion } from "framer-motion";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const apartments = [
  {
    id: "apt-01",
    title: "Skyline Penthouse",
    price: "₦45,000,000",
    img: "/images/apartments1.webp",
    beds: 3,
    baths: 3,
    area: "2,500 sqft",
    desc: "Panoramic views, premium finishes.",
  },
  {
    id: "apt-02",
    title: "Garden Suite",
    price: "₦28,000,000",
    img: "/images/apartments2.webp",
    beds: 2,
    baths: 2,
    area: "1,400 sqft",
    desc: "Green courtyard, serene living.",
  },
  {
    id: "apt-03",
    title: "Urban Loft",
    price: "₦32,500,000",
    img: "/images/apartments3.webp",
    beds: 2,
    baths: 2,
    area: "1,600 sqft",
    desc: "High ceilings, modern open plan.",
  },
  {
    id: "apt-04",
    title: "Riverside Corner",
    price: "₦80,000,000",
    img: "/images/apartments4.webp",
    beds: 3,
    baths: 3,
    area: "2,100 sqft",
    desc: "Corner unit with abundant light.",
  },
  {
    id: "apt-05",
    title: "Executive Residence",
    price: "₦52,000,000",
    img: "/images/apartments5.webp",
    beds: 4,
    baths: 4,
    area: "3,200 sqft",
    desc: "Spacious layouts for refined living.",
  },
  {
    id: "apt-06",
    title: "Cozy Studio",
    price: "₦42,000,000",
    img: "/images/apartments6.webp",
    beds: 1,
    baths: 1,
    area: "650 sqft",
    desc: "Efficient layout, ideal for professionals.",
  },
  {
    id: "apt-07",
    title: "Family Townhouse",
    price: "₦90,000,000",
    img: "/images/apartments7.webp",
    beds: 3,
    baths: 3,
    area: "2,300 sqft",
    desc: "Private entrance, family focused design.",
  },
];

function ApartmentsCard() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Available Residences</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
        >
          {apartments.map((a, i) => (
            <motion.article
              key={a.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="relative bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              aria-labelledby={`apt-${a.id}-title`}
            >
              <div className="h-52 md:h-56 w-full bg-gray-200">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <h3 id={`apt-${a.id}-title`} className="text-lg font-semibold">
                    {a.title}
                  </h3>
                  <div className="text-yellow-400 font-bold">{a.price}</div>
                </div>

                <p className="mt-2 text-sm text-gray-600">{a.desc}</p>

                <div className="mt-4 flex items-center gap-4 text-gray-600 text-sm">
                  <span className="flex items-center gap-2"><FaBed /> {a.beds}</span>
                  <span className="flex items-center gap-2"><FaBath /> {a.baths}</span>
                  <span className="flex items-center gap-2"><FaRulerCombined /> {a.area}</span>
                </div>

                <div className="mt-4 flex gap-3">
                  <Link
                    to={`/apartments/${a.id}`}
                    className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    View Details
                  </Link>
                  <a
                    href="/contact"
                    className="inline-block text-sm px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100"
                  >
                    Enquire
                  </a>
                </div>
              </div>

              {/* Hover caption overlay (reveals on hover) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ApartmentsCard;