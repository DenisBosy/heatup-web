import { useState, useEffect } from 'react'
const NAV_ITEMS = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'Referencie', href: '#referencie' },
  { label: 'Konfigurátor', href: '#konfigurator' },
  { label: 'Kontakt', href: '#kontakt' },
]
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const handleNav = (e, href) => { e.preventDefault(); setMenuOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" onClick={e => handleNav(e, '#')} className="flex items-center">
          <img src="https://www.heatup.sk/assets/logo-DLdpf-AR.jpg" alt="HeatUp Project" className="h-12 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <a key={item.href} href={item.href} onClick={e => handleNav(e, item.href)} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{item.label}</a>
          ))}
          <a href="#kontakt" onClick={e => handleNav(e, '#kontakt')} className="ml-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-brand-gradient hover:opacity-90 transition-opacity">Kontakt</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`block w-5 h-0.5 bg-foreground mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>
      {menuOpen && (<div className="md:hidden bg-white border-t border-border px-4 pb-4">{NAV_ITEMS.map(item => (<a key={item.href} href={item.href} onClick={e => handleNav(e, item.href)} className="block py-3 text-sm font-medium text-foreground border-b border-border last:border-0">{item.label}</a>))}</div>)}
    </header>
  )
}