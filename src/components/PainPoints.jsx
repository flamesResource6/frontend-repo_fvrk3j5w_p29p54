import React from 'react'

const PainPoints = ({ lang }) => {
  const t = {
    de: {
      title: 'Kundenprobleme',
      list: [
        'Stunden werden durch manuelle Copy-Paste-Arbeit verschwendet.',
        'Fehlerquote steigt, sobald das Team wächst.',
        'Wissen hängt an einzelnen Personen.',
        'Kunden warten unnötig lange auf Ergebnisse.',
        'Die Konkurrenz arbeitet schneller und effizienter.',
      ],
    },
    en: {
      title: 'Pain Points',
      list: [
        'Hours are wasted on manual copy-paste work.',
        'Error rates increase as the team grows.',
        'Knowledge is tied to individual employees.',
        'Customers wait unnecessarily long for results.',
        'Competitors work faster and more efficiently.',
      ],
    },
  }[lang]

  return (
    <section id="pain" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.title}</h2>
        <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
          {t.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PainPoints
