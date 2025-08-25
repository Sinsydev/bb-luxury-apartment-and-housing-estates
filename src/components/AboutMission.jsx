 import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaBullseye, FaLightbulb, FaHandsHelping, FaLeaf } from "react-icons/fa";

function Count({ value, inView, duration = 900 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let raf;
    let start;
    const from = 0;
    const to = Number(value);
    if (!inView) {
      setCount(from);
      return;
    }
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, inView, duration]);

  return <div className="text-2xl font-bold text-gray-900">{count}{typeof value === "string" ? "" : ""}</div>;
}

function AboutMission() {
  const values = [
    {
      icon: <FaBullseye className="text-3xl text-yellow-400 mx-auto" />,
      title: "Our Mission",
      desc: "Deliver thoughtfully designed residences that elevate daily living through quality, comfort and service.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-400 mx-auto" />,
      title: "Innovation",
      desc: "We adopt modern design and smart home features to future‑proof every project.",
    },
    {
      icon: <FaHandsHelping className="text-3xl text-yellow-400 mx-auto" />,
      title: "Community",
      desc: "Create inclusive communities where residents connect, relax and thrive.",
    },
    {
      icon: <FaLeaf className="text-3xl text-yellow-400 mx-auto" />,
      title: "Sustainability",
      desc: "Commitment to greener choices, efficient systems and long‑term value.",
    },
  ];

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: false, amount: 0.4 });

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Promise — Built on Purpose
          </h2>
          <p className="text-gray-600 text-lg">
            We design homes for life: balancing timeless craftsmanship, modern conveniences and thoughtful stewardship of the communities we serve.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.article
              key={i}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: 0.12 * i, duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-4">{v.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </motion.article>
          ))}
        </div>

        {/* Stats + CTA */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            ref={statsRef}
            className="flex gap-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <Count value={10} inView={statsInView} />
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="text-center">
              <Count value={500} inView={statsInView} />
              <div className="text-sm text-gray-500">Happy Residents</div>
            </div>
            <div className="text-center">
              <Count value={20} inView={statsInView} />
              <div className="text-sm text-gray-500">Awarded Projects</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
              >
                Talk to Our Team 
              </a>
              </motion.div>
              </div>
              </div>
              </section>
  );
}

export default AboutMission;