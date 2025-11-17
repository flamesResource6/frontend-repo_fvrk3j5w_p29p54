import React from 'react'

const Footer = ({ lang }) => {
  const t = {
    de: {
      contact: 'Kontakt',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      social: 'Social Media',
    },
    en: {
      contact: 'Contact',
      imprint: 'Imprint',
      privacy: 'Privacy',
      social: 'Social Media',
    },
  }[lang]

  return (
    <footer className="py-10 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-4 sm:flex sm:items-center sm:justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} klaus-schwarzkopf.com</p>
        <nav className="flex gap-6">
          <a href="#contact" className="hover:text-gray-900">{t.contact}</a>
          <a href="#imprint" className="hover:text-gray-900">{t.imprint}</a>
          <a href="#privacy" className="hover:text-gray-900">{t.privacy}</a>
          <a href="#social" className="hover:text-gray-900">{t.social}</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
