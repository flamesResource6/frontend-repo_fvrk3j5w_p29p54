import React from 'react'
import { ChevronRight } from 'lucide-react'

const CTA = ({ lang }) => {
  const t = {
    de: {
      title: 'Lass uns herausfinden, wie viele Stunden du dieses Jahr sparen kannst.',
      button: 'Jetzt Prozessanalyse anfragen',
    },
    en: {
      title: 'Let’s find out how many hours you can save this year.',
      button: 'Request process analysis now',
    },
  }[lang]

  return (
    <section id="cta" className="py-20 md:py-28 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">{t.title}</h3>
        <a href="#contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:-translate-y-0.5 transition">
          {t.button}
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

export default CTA
