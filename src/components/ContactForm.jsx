import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // replace with real API call when ready
      console.log("Contact form submit:", form);
      await new Promise((r) => setTimeout(r, 700));
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-2">Send us a message</h3>
      <p className="text-sm text-gray-600 mb-4">We typically reply within one business day.</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input name="name" value={form.name} onChange={handleChange} required className="p-2 rounded-md border" placeholder="Full name" />
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="p-2 rounded-md border" placeholder="Email address" />
        </div>

        <input name="phone" value={form.phone} onChange={handleChange} className="p-2 rounded-md border w-full" placeholder="Phone (optional)" />

        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="p-2 rounded-md border w-full" placeholder="How can we help?" />

        <div className="flex items-center gap-3">
          <button type="submit" className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
            <FaPaperPlane /> {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && <span className="text-green-600">Thanks — we'll be in touch.</span>}
          {status === "error" && <span className="text-red-600">Something went wrong.</span>}
        </div>
      </form>
    </div>
  );
}