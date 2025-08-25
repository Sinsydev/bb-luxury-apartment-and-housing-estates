 import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const cards = [
  {
    id: 1,
    name: "Amaka Johnson",
    text: "Stunning visuals — the gallery truly captures the essence of the residences.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chinedu Okoro",
    text: "High quality images, fast loading and the viewer is seamless on mobile.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima Bello",
    text: "Loved the detail captions and the modal viewer — great experience.",
    rating: 5,
  },
];

const container = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function GalleryFeedback() {
  const [form, setForm] = useState({ name: "", email: "", message: "", rating: 5 });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleRating = (r) => setForm((s) => ({ ...s, rating: r }));
  const handleSubmit = (e) => {
    e.preventDefault();
    // simple client-side "send" simulation
    console.log("Gallery feedback submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "", rating: 5 });
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Form */}
        <motion.div
          className="bg-gray-50 rounded-xl p-6 shadow"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h3 className="text-2xl font-bold mb-2" variants={item}>
            Share your thoughts
          </motion.h3>
          <motion.p className="text-gray-600 mb-4" variants={item}>
            Loved an image or want to suggest something? Send us a short feedback — it helps us improve the gallery and the site.
          </motion.p>

          <motion.form onSubmit={handleSubmit} className="space-y-4" variants={item}>
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border-gray-200 p-2 bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border-gray-200 p-2 bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 w-full rounded-md border-gray-200 p-2 bg-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 block mb-1">Rating</label>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => {
                  const r = i + 1;
                  return (
                    <button
                      key={r}
                      type="button"
                      onClick={() => handleRating(r)}
                      className={`p-1 rounded ${form.rating >= r ? "text-yellow-400" : "text-gray-300"}`}
                      aria-label={`Rate ${r} star${r > 1 ? "s" : ""}`}
                    >
                      <FaStar />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="inline-block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-yellow-300 transition"
              >
                Send Feedback
              </button>
              {sent && <span className="text-green-600 text-sm">Thanks — feedback received.</span>}
            </div>
          </motion.form>
        </motion.div>

        {/* Right: Recent feedback cards */}
        <motion.div
          className="space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {cards.map((c, i) => (
            <motion.article
              key={c.id}
              className="bg-gradient-to-br from-white to-gray-100 rounded-xl p-4 shadow-sm"
              variants={item}
              transition={{ delay: i * 0.06 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-semibold">
                  {c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{c.name}</div>
                      <div className="text-sm text-gray-500">Guest</div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      {Array.from({ length: c.rating }).map((_, k) => (
                        <FaStar key={k} />
                      ))}
                      </div>
                 </div>
                 <p className="mt-3 text-sm text-gray-700">{c.text}</p>
                 </div>
                 </div>
                 </motion.article>
          ))}
          </motion.div>
          </div>
          </section>
  );
}