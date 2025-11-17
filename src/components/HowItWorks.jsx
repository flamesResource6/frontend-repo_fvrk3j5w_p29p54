import React from 'react'

const HowItWorks = ({ lang }) => {
  const t = {
    de: {
      title: 'Ablauf',
      steps: [
        'Analyse-Call: Wir sprechen über Prozesse und Ziele.',
        'Workflow-Audit: Engpässe erkennen, Einsparpotenziale berechnen.',
        'Umsetzung: Automatisierungen und Software werden gebaut.',
        'Integration & Schulung: Dein Team arbeitet sofort effizienter.',
        'Support: Stabilität und Updates inklusive.',
      ],
    },
    en: {
      title: 'How it works',
      steps: [
        'Analysis call: We discuss your processes and goals.',
        'Workflow audit: Identify bottlenecks and calculate savings potential.',
        'Implementation: Automations and software are built.',
        'Integration & training: Your team works more efficiently immediately.',
        'Support: Stability and updates included.',
      ],
    },
  }[lang]

  return (
    <section id="how" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.title}</h2>
        <ol className="mt-6 space-y-3 list-decimal list-inside text-gray-700">
          {t.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
