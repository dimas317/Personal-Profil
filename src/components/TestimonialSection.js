import React from "react";

function TestimonialSection() {
  const testimonials = [
    {
      name: "Citra Nadya",
      role: "Product Manager, Fintech",
      quote:
        "Arie mampu memahami kebutuhan tim kami dan menerjemahkannya menjadi desain yang sangat user-friendly. Komunikasi dan delivery selalu on time!",
    },
    {
      name: "Rama Putra",
      role: "CEO, Edustartup",
      quote:
        "Kreativitas & kecepatan kerja Arie luar biasa. Landing page yang dibuat sangat modern & efektif meningkatkan konversi produk kami.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">Testimoni Klien</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white shadow rounded-xl p-6 w-80">
            <p className="text-gray-600 mb-4 italic">“{t.quote}”</p>
            <h4 className="font-bold text-gray-800">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
