import React from 'react'

const Benefits = ({ lang }) => {
  const t = {
    de: {
      title: 'Vorteile',
      list: [
        'Bis zu 10 Minuten pro Fall eingespart – bei 6.000 Fällen über 1.000 Stunden pro Jahr.',
        'Weniger Fehler und geringere Mitarbeiterbelastung.',
        'Kürzere Durchlaufzeiten für Kunden.',
        'Skalierbare Prozesse ohne zusätzliche Köpfe.',
        'Echtzeit-Überblick über alle Abläufe und Daten.',
      ],
    },
    en: {
      title: 'Benefits',
      list: [
        'Save up to 10 minutes per case – over 6,000 cases, that’s more than 1,000 hours per year.',
        'Fewer errors and reduced employee workload.',
        'Shorter turnaround times for customers.',
        'Scalable processes without extra staff.',
        'Real-time overview of all workflows and data.',
      ],
    },
  }[lang]

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.title}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {t.list.map((b, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
