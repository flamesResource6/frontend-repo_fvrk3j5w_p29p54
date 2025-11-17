import React from 'react'

const FAQ = ({ lang }) => {
  const t = {
    de: {
      title: 'Häufige Fragen',
      qs: [
        'Wie lange dauert ein Projekt?',
        'Welche Ressourcen werden intern benötigt?',
        'Funktioniert es mit meinem CRM?',
        'Was passiert, wenn mein Team wächst?',
        'Müssen Mitarbeiter geschult werden?',
      ],
    },
    en: {
      title: 'FAQ',
      qs: [
        'How long does a project take?',
        'What internal resources are needed?',
        'Will it work with my CRM?',
        'What happens as my team grows?',
        'Do employees need training?',
      ],
    },
  }[lang]

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.title}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {t.qs.map((q, i) => (
            <details key={i} className="group p-5 bg-gray-50 rounded-lg">
              <summary className="cursor-pointer font-medium text-gray-800">{q}</summary>
              <p className="mt-2 text-sm text-gray-600">Antworten werden im Gespräch geklärt.</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
