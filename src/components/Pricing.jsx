import React from 'react'

const Pricing = ({ lang }) => {
  const t = {
    de: {
      title: 'Preise',
      lines: ['Automatisierungen: 2.000 – 10.000 €', 'Individuelle Software: bis 50.000 €', 'Jedes Projekt ist individuell. Preise werden nach Prozessanalyse erstellt.'],
    },
    en: {
      title: 'Pricing',
      lines: ['Automations: €2,000 – €10,000', 'Custom software: up to €50,000', 'Each project is unique. Pricing is determined after process analysis.'],
    },
  }[lang]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.title}</h2>
        <div className="mt-6 space-y-2 text-gray-700">
          {t.lines.map((l, i) => (
            <p key={i}>{l}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
