'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const ids = links.map((l) => l.href.replace('#', ''))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <nav aria-label="Main navigation" className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border px-6 py-3">
        <a
          href="#hero"
          className="font-display text-lg font-extrabold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-gradient">MAHALINGAM</span>
          <span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-white/10 font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Contact Me
          </a>
          <button
            className="text-foreground lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-border p-3 lg:hidden">
          {links.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2.5 text-sm transition-colors ${
                  isActive ? 'bg-white/10 font-medium text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}
