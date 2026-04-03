/**
 * Navbar — ancres via Lenis + active section highlight (IntersectionObserver).
 */

import { useState, useEffect } from 'react';
import SmoothAnchor from './SmoothAnchor';

const NAV_LINKS = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Processus', href: '#processus', id: 'processus' },
  { label: 'Pourquoi nous', href: '#pourquoi-backyard', id: 'pourquoi-backyard' },
  { label: 'Tarifs', href: '#tarifs', id: 'tarifs' },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-backyard-border bg-backyard-bg/90 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.4)]'
          : 'border-transparent bg-backyard-bg/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-backyard-blue rounded-sm flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 14L3 6L9 3L15 6L15 14L9 17L3 14Z" fill="#0a0a0b" stroke="#0a0a0b" strokeWidth="0.5"/>
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-white/95 group-hover:text-white transition-colors">
            backyard
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <SmoothAnchor
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-backyard-blue-bright rounded-full" />
              )}
            </SmoothAnchor>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <SmoothAnchor
            href="#contact"
            className="text-sm font-semibold text-white bg-backyard-blue hover:bg-backyard-blue-light px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Prendre contact
          </SmoothAnchor>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-backyard-border bg-backyard-bg px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <SmoothAnchor
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </SmoothAnchor>
          ))}
          <SmoothAnchor
            href="#contact"
            className="text-sm font-semibold text-backyard-bg bg-backyard-blue px-5 py-2.5 rounded-full text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Prendre contact
          </SmoothAnchor>
        </div>
      )}
    </header>
  );
}
