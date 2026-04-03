/**
 * Navbar — ancres via Lenis (SmoothAnchor).
 */

import { useState } from 'react';
import SmoothAnchor from './SmoothAnchor';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Processus', href: '#processus' },
  { label: 'Pourquoi nous', href: '#pourquoi-backyard' },
  { label: 'Tarifs', href: '#tarifs' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-backyard-border bg-backyard-bg/80 backdrop-blur-md">
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
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
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
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
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
