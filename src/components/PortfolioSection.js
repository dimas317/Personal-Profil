import React from "react";

function PortfolioSection() {
  const portfolios = [
    { title: "GoFinance App", tag: "Mobile App" },
    { title: "EduSmart Landing Page", tag: "Website" },
    { title: "DataHub Dashboard", tag: "Dashboard" },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Portfolio Pilihan</h2>
      <p className="text-gray-600 mb-10">Beberapa project terbaik yang pernah saya kerjakan.</p>
      <div className="flex flex-wrap justify-center gap-6">
        {portfolios.map((p) => (
          <div key={p.title} className="bg-white border shadow-sm rounded-xl p-6 w-72 hover:shadow-lg transition">
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{p.tag}</span>
            <h3 className="mt-4 font-bold text-gray-800">{p.title}</h3>
            <p className="text-gray-500 text-sm mt-2">Lihat Detail</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
