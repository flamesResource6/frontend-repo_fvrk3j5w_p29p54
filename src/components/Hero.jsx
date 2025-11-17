import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Hero = ({ lang, onCTAClick }) => {
  const t = {
    de: {
      title: 'Automatisierte Abläufe, die jeden Monat hunderte Stunden sparen.',
      subtitle:
        'Wir entwickeln Automatisierungen und maßgeschneiderte Software für KMU, die Prozesse beschleunigen, Fehler reduzieren und Kosten senken.',
      cta: 'Kostenlose Prozessanalyse anfragen',
    },
    en: {
      title: 'Automated workflows that save hundreds of hours every month.',
      subtitle:
        'We create automation and custom software for SMEs that streamline processes, reduce errors, and cut costs.',
      cta: 'Request a free process analysis',
    },
  }[lang]

  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            {t.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-700">
            {t.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onCTAClick}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              {t.cta}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
