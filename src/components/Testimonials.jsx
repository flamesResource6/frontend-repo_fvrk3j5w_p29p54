import React from 'react'

const Testimonials = ({ lang }) => {
  const t = {
    de: {
      title: 'Kundenstimmen',
      quote: '„Unsere Arbeitslast wurde deutlich reduziert, Prozesse laufen jetzt fehlerfrei.“ – Kunde X',
      note: 'Hier später echte Testimonials einfügen.',
    },
    en: {
      title: 'Testimonials',
      quote: '“Our workload has been significantly reduced, processes now run error-free.” – Client X',
      note: 'Add real testimonials later here.',
    },
  }[lang]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.title}</h2>
        <p className="mt-6 text-lg text-gray-700">{t.quote}</p>
        <p className="mt-2 text-sm text-gray-500">{t.note}</p>
      </div>
    </section>
  )
}

export default Testimonials
