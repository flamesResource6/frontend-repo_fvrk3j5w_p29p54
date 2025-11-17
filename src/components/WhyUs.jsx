import React from 'react'

const WhyUs = ({ lang }) => {
  const t = {
    de: {
      title: 'Warum wir',
      points: [
        'Pragmatisch statt theoretisch: Wir identifizieren die wichtigsten Prozesse und automatisieren sie zuerst.',
        'Technik, die zu deinem Unternehmen passt: Make, n8n, Next.js – wir nutzen, was funktioniert.',
        'Done-for-You Umsetzung: Beratung, Bau, Integration, Testing – alles aus einer Hand.',
      ],
    },
    en: {
      title: 'Why us',
      points: [
        'Pragmatic, not theoretical: We identify the most important processes and automate them first.',
        'Technology that fits your business: Make, n8n, Next.js – we use what works.',
        'Done-for-you execution: Consulting, build, integration, testing – everything from one team.',
      ],
    },
  }[lang]

  return (
    <section id="why-us" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.title}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {t.points.map((p, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
