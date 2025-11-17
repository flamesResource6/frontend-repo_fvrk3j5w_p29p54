import React from 'react'

const Navbar = ({ lang, onToggleLang }) => {
  const t = {
    de: {
      nav: [
        { href: '#home', label: 'Start' },
        { href: '#use-cases', label: 'Beispiele' },
        { href: '#pain', label: 'Probleme' },
        { href: '#why-us', label: 'Warum wir' },
        { href: '#how', label: 'Ablauf' },
        { href: '#pricing', label: 'Preise' },
        { href: '#faq', label: 'FAQ' },
      ],
      lang: 'EN',
    },
    en: {
      nav: [
        { href: '#home', label: 'Home' },
        { href: '#use-cases', label: 'Use Cases' },
        { href: '#pain', label: 'Pain Points' },
        { href: '#why-us', label: 'Why us' },
        { href: '#how', label: 'How it works' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#faq', label: 'FAQ' },
      ],
      lang: 'DE',
    },
  }[lang]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold">klaus-schwarzkopf.com</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-gray-900">
              {item.label}
            </a>
          ))}
        </nav>
        <button onClick={onToggleLang} className="px-3 py-1.5 text-sm rounded-full border bg-white hover:bg-gray-50">
          {t.lang}
        </button>
      </div>
    </header>
  )
}

export default Navbar
