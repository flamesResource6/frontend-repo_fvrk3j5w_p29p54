import React from 'react'

const Trust = ({ lang }) => {
  const t = {
    de: {
      text: 'Bereits im Einsatz bei Agenturen, Dienstleistern, Bildungsanbietern und Beratungen.',
      hint: 'Hier können später Logos oder kurze Testimonials eingefügt werden.',
    },
    en: {
      text: 'Already in use by agencies, service providers, educational organizations, and consultancies.',
      hint: 'Logos or short testimonials can be added here later.',
    },
  }[lang]

  return (
    <section id="trust" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg md:text-xl text-gray-700">{t.text}</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 rounded-md" />
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">{t.hint}</p>
      </div>
    </section>
  )
}

export default Trust
