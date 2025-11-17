import React from 'react'

const UseCases = ({ lang }) => {
  const t = {
    de: {
      list: [
        'Automatisierte Dokumentenerstellung: Formulare, PDFs, CRM, Archiv – alles ohne doppelte Eingaben.',
        'Interne & externe Workflows: Von Anfrage bis Abrechnung nahtlos automatisiert.',
        'CRM-Integrationen: Make, n8n oder individuelle API-Lösungen, die alles verbinden.',
        'AI-Agenten für wiederkehrende Aufgaben: Kundenservice, Lead-Qualifizierung, Gutachter-Sachbearbeitung.',
        'Custom Software (Next.js): Wenn keine Standardlösung passt, bauen wir sie.',
      ],
      title: 'Use Cases',
    },
    en: {
      list: [
        'Automated document creation: Forms, PDFs, CRM, archiving – all without duplicate entries.',
        'Internal & external workflows: Seamlessly automated from request to billing.',
        'CRM integrations: Make, n8n, or custom API solutions that connect everything.',
        'AI agents for repetitive tasks: Customer service, lead qualification, expert-administrator workflows.',
        'Custom software (Next.js): When no standard solution fits, we build it.',
      ],
      title: 'Use Cases',
    },
  }[lang]

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {t.list.map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
