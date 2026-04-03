/**
 * Contact + footer — success state inline, entrée motion.
 */

import { motion, AnimatePresence } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { inViewOnce, popIn, sectionStagger } from '../../motion/variants';
import SmoothAnchor from '../SmoothAnchor';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Processus', href: '#processus' },
  { label: 'Pourquoi nous', href: '#pourquoi-backyard' },
  { label: 'Tarifs', href: '#tarifs' },
];

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 360, damping: 26 }}
      className="rounded-2xl border border-backyard-blue/30 bg-backyard-surface/70 backdrop-blur-md p-10 flex flex-col items-center text-center gap-5"
    >
      <div className="w-16 h-16 rounded-full bg-backyard-blue/15 border border-backyard-blue/30 flex items-center justify-center">
        <svg className="w-7 h-7 text-backyard-blue-bright" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Message bien reçu !</h3>
        <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">
          Jack & Alexandre reviennent vers vous sous 24 h avec un plan d'action concret.
        </p>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 text-xs text-gray-600 hover:text-gray-400 transition-colors underline underline-offset-2"
      >
        Envoyer une autre demande
      </button>
    </motion.div>
  );
}

export default function ContactFooterSection() {
  const [nom, setNom] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [typeCommerce, setTypeCommerce] = useState('');
  const [probleme, setProbleme] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  function handleReset() {
    setNom('');
    setEntreprise('');
    setTypeCommerce('');
    setProbleme('');
    setSent(false);
  }

  return (
    <>
      <section
        id="contact"
        className="relative scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 border-t border-backyard-border bg-gradient-to-b from-backyard-surface/60 to-backyard-bg"
      >
        <motion.div
          className="mx-auto max-w-6xl px-6"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          <div className="max-w-xl mx-auto">
            <motion.p
              variants={popIn}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-backyard-amethyst-bright/80 mb-4 text-center"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={popIn}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight text-center mb-3"
            >
              Décrivez votre friction — on vous répond avec un plan.
            </motion.h2>
            <motion.p
              variants={popIn}
              className="text-sm text-gray-500 font-light text-center mb-12 max-w-md mx-auto leading-relaxed"
            >
              Réponse sous 24 h. Audit de 30 min offert sans engagement.
            </motion.p>

            <AnimatePresence mode="wait">
              {sent ? (
                <SuccessState key="success" onReset={handleReset} />
              ) : (
                <motion.form
                  key="form"
                  variants={popIn}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.96 }}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-backyard-border bg-backyard-surface/70 backdrop-blur-md p-6 md:p-10 space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-nom" className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
                        Nom de l'entrepreneur
                      </label>
                      <input
                        id="contact-nom"
                        name="nom"
                        type="text"
                        autoComplete="name"
                        required
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        className="w-full rounded-xl border border-backyard-border bg-backyard-bg/80 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors focus:border-backyard-blue/50 focus:ring-1 focus:ring-backyard-blue/30"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-entreprise" className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
                        Entreprise
                      </label>
                      <input
                        id="contact-entreprise"
                        name="entreprise"
                        type="text"
                        autoComplete="organization"
                        value={entreprise}
                        onChange={(e) => setEntreprise(e.target.value)}
                        className="w-full rounded-xl border border-backyard-border bg-backyard-bg/80 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors focus:border-backyard-blue/50 focus:ring-1 focus:ring-backyard-blue/30"
                        placeholder="SARL / enseigne"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
                      Type de commerce
                    </label>
                    <input
                      id="contact-type"
                      name="typeCommerce"
                      type="text"
                      value={typeCommerce}
                      onChange={(e) => setTypeCommerce(e.target.value)}
                      className="w-full rounded-xl border border-backyard-border bg-backyard-bg/80 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors focus:border-backyard-blue/50 focus:ring-1 focus:ring-backyard-blue/30"
                      placeholder="ex. Studio sportif, cabinet libéral, retail…"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-probleme" className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
                      Votre problème principal
                    </label>
                    <textarea
                      id="contact-probleme"
                      name="probleme"
                      rows={4}
                      required
                      value={probleme}
                      onChange={(e) => setProbleme(e.target.value)}
                      className="w-full resize-y min-h-[120px] rounded-xl border border-backyard-border bg-backyard-bg/80 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors focus:border-backyard-amethyst/50 focus:ring-1 focus:ring-backyard-amethyst/25"
                      placeholder="Temps perdu, visibilité Maps, no-shows, leads dispersés…"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="w-full rounded-full bg-backyard-blue hover:bg-backyard-blue-light py-3.5 text-sm font-semibold text-white transition-colors duration-200 glow-blue"
                  >
                    Envoyer ma demande →
                  </motion.button>
                  <p className="text-center text-xs text-gray-600">
                    Vos données restent confidentielles. Aucun spam.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-backyard-border bg-backyard-bg pt-10 pb-8"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-backyard-blue rounded-sm flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 14L3 6L9 3L15 6L15 14L9 17L3 14Z" fill="#0a0a0b" stroke="#0a0a0b" strokeWidth="0.5" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">backyard</span>
            </a>
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <SmoothAnchor
                  key={link.href}
                  href={link.href}
                  className="text-xs text-gray-600 hover:text-gray-400 transition-colors font-medium"
                >
                  {link.label}
                </SmoothAnchor>
              ))}
            </nav>
          </div>
          <div className="border-t border-backyard-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600 font-light">© 2026 Backyard. Tous droits réservés.</p>
            <p className="text-xs text-gray-700 font-light">Conçu & développé par Jack & Alexandre</p>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
