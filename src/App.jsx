import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './components/Hero'
import Trust from './components/Trust'
import UseCases from './components/UseCases'
import PainPoints from './components/PainPoints'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const detectLang = () => {
    const navLang = navigator.language || navigator.userLanguage || 'de'
    return navLang.toLowerCase().startsWith('de') ? 'de' : 'en'
  }
  const [lang, setLang] = useState(detectLang())

  useEffect(() => {
    const onHash = (e) => {
      const id = window.location.hash.replace('#', '')
      if (!id) return
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const onCTAClick = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar lang={lang} onToggleLang={() => setLang(lang === 'de' ? 'en' : 'de')} />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Hero lang={lang} onCTAClick={onCTAClick} />
            <Trust lang={lang} />
            <UseCases lang={lang} />
            <PainPoints lang={lang} />
            <WhyUs lang={lang} />
            <HowItWorks lang={lang} />
            <Benefits lang={lang} />
            <Pricing lang={lang} />
            <Testimonials lang={lang} />
            <CTA lang={lang} />

            {/* Simple contact + legal sections */}
            <section id="contact" className="py-16 md:py-24 bg-white">
              <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{lang === 'de' ? 'Kontakt' : 'Contact'}</h3>
                  <p className="text-gray-700 mb-6">
                    {lang === 'de'
                      ? 'Schick uns eine Nachricht für eine kostenlose Prozessanalyse.'
                      : 'Send us a message to request a free process analysis.'}
                  </p>
                  <form className="grid gap-4">
                    <input className="border rounded-lg px-4 py-3" placeholder={lang === 'de' ? 'Name' : 'Name'} />
                    <input className="border rounded-lg px-4 py-3" placeholder="Email" />
                    <textarea className="border rounded-lg px-4 py-3" rows={4} placeholder={lang === 'de' ? 'Nachricht' : 'Message'} />
                    <button type="button" className="rounded-lg bg-gray-900 text-white px-5 py-3 font-semibold hover:opacity-90">
                      {lang === 'de' ? 'Abschicken' : 'Send'}
                    </button>
                  </form>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">klaus-schwarzkopf.com</h4>
                  <p className="text-sm text-gray-600">Berlin, Germany</p>
                </div>
              </div>
            </section>

            <section id="imprint" className="py-12 bg-gray-50">
              <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-xl font-bold mb-2">{lang === 'de' ? 'Impressum' : 'Imprint'}</h3>
                <p className="text-sm text-gray-600">Klaus Schwarzkopf · Berlin, Germany · kontakt@klaus-schwarzkopf.com</p>
              </div>
            </section>

            <section id="privacy" className="py-12 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-xl font-bold mb-2">{lang === 'de' ? 'Datenschutz' : 'Privacy'}</h3>
                <p className="text-sm text-gray-600">
                  {lang === 'de'
                    ? 'Wir verarbeiten personenbezogene Daten nur im Rahmen der gesetzlichen Bestimmungen der DSGVO.'
                    : 'We process personal data only within the framework of the GDPR.'}
                </p>
              </div>
            </section>

            <Footer lang={lang} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
