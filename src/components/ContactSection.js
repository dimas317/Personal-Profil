import React from "react";

function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Tertarik Kolaborasi?
          </h3>
          <p className="text-gray-600 mb-6">
            Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan
            produk digital yang impactful buat bisnismu.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>📧 arie@email.com</li>
            <li>📱 0812-3456-7890</li>
            <li>📍 Jakarta, Indonesia</li>
          </ul>
        </div>
        <div className="flex-1 bg-white shadow rounded-2xl p-6">
          <input className="border w-full p-3 rounded-lg mb-3" placeholder="Nama" />
          <input className="border w-full p-3 rounded-lg mb-3" placeholder="Email" />
          <textarea className="border w-full p-3 rounded-lg mb-4" rows="4" placeholder="Pesan"></textarea>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg w-full">
            Kirim Pesan 🚀
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
