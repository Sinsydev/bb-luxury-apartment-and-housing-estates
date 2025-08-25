import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h4 className="font-semibold mb-2">Contact details</h4>
        <div className="text-sm text-gray-700 space-y-2">
          <div className="flex items-center gap-2"><FaPhoneAlt /> <span>+234 816 500 6685  </span></div>
          <div className="flex items-center gap-2"><FaEnvelope /> <span>info@bbluxury.ng</span></div>
          <div className="flex items-center gap-2"><FaMapMarkerAlt /> <span>Lagos, Nigeria</span></div>
        </div>
        <a href="/contact" className="mt-4 inline-block text-sm text-yellow-500">Contact sales</a>
      </div>

      <div className="bg-white rounded-xl p-0 overflow-hidden shadow-sm">
        <iframe
          title="BB Luxury location"
          src="https://www.google.com/maps?q=Lagos&output=embed"
          className="w-full h-56 border-0"
          loading="lazy"
          aria-hidden={false}
        />
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h5 className="font-semibold mb-2">Office hours</h5>
        <p className="text-sm text-gray-600">Mon — Fri: 9:00 — 18:00<br/>Sat: 10:00 — 14:00<br/>Sun: Closed</p>
      </div>
    </aside>
  );
}