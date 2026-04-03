/**
 * Hero — Shader + Framer Motion (entrée orchestrée, ancres Lenis).
 */

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { heroItem, heroStagger } from '../motion/variants';
import ShaderAnimation from './ShaderAnimation';
import GlowCard from './GlowCard';
import SmoothAnchor from './SmoothAnchor';

interface Founder {
  id: number;
  initials: string;
  firstName: string;
  fullTitle: string;
  role: string;
  color: string;
  description: string;
  strengths: string[];
  cta: string;
}

const FOUNDERS: Founder[] = [
  {
    id: 1,
    initials: 'J',
    firstName: 'Jack',
    fullTitle: 'Jack — Co-fondateur & Data/Business Strategist',
    role: 'Maths Appliquées · Albert School',
    color: '#3b82f6',
    description:
      'Expert en mathématiques appliquées et stratégie business (Albert School). Jack conçoit les architectures de données et les stratégies de référencement (SEO) qui transforment un commerce physique en leader local.',
    strengths: ['Architecture Data', 'SEO Local', 'Automatisation Business', "Stratégie d'Acquisition"],
    cta: 'Réserver un audit avec Jack →',
  },
  {
    id: 2,
    initials: 'A',
    firstName: 'Alexandre',
    fullTitle: 'Alexandre — Co-fondateur & AI Architect',
    role: 'Intelligence Artificielle · Eveyens',
    color: '#8b5cf6',
    description:
      'Spécialiste en intelligence artificielle avec une solide expérience terrain (actuellement chez Eveyens). Alexandre développe des modèles sur mesure et automatise les processus complexes pour vous faire gagner des dizaines d’heures par semaine.',
    strengths: ['Intégration LLM', 'Ingénierie Prompt', 'Workflows IA', 'Développement Full-Stack'],
    cta: 'Discuter technique avec Alexandre →',
  },
];

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="p-6 md:p-8 text-left">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-white leading-snug">{founder.fullTitle}</h3>
          <p className="mt-1 text-xs text-gray-500 tracking-wide">{founder.role}</p>
        </div>
        <span
          className="mt-0.5 shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
          style={{
            backgroundColor: `${founder.color}18`,
            color: founder.color,
            border: `1px solid ${founder.color}35`,
          }}
        >
          Co-fondateur
        </span>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-gray-400">{founder.description}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {founder.strengths.map((skill) => (
          <span
            key={skill}
            className="rounded-md px-2.5 py-1 text-xs font-medium"
            style={{
              backgroundColor: `${founder.color}10`,
              color: `${founder.color}`,
              border: `1px solid ${founder.color}28`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
      <SmoothAnchor
        href="#contact"
        className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95"
        style={{
          background: `linear-gradient(135deg, ${founder.color}cc, ${founder.color}88)`,
          boxShadow: `0 0 18px ${founder.color}40`,
        }}
      >
        {founder.cta}
      </SmoothAnchor>
    </div>
  );
}

export default function Hero() {
  const [activeFounder, setActiveFounder] = useState(0);
  const currentFounder = FOUNDERS[activeFounder];

  function selectFounder(index: number) {
    if (index === activeFounder) return;
    setActiveFounder(index);
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-backyard-bg/80 bg-grid"
    >
      <ShaderAnimation />
      <div className="absolute inset-0 bg-[#0a0a0a]/75 z-0" aria-hidden />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-32 pb-16 flex flex-col items-center text-center"
        variants={heroStagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={heroItem}
          className="mb-5 text-4xl md:text-6xl lg:text-[3.35rem] font-extrabold leading-[1.08] tracking-tight text-white"
        >
          Dégagez du temps.
          <span className="block mt-1 md:mt-2 text-backyard-blue-bright">Dominez votre marché local.</span>
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="mb-10 max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed font-light"
        >
          L’IA et l’automatisation pour votre commerce physique — moins de frictions opérationnelles, plus
          de marge et de visibilité là où vos clients cherchent.
        </motion.p>

        <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <SmoothAnchor
            href="#contact"
            id="hero-cta-primary"
            className="group inline-flex items-center gap-2 rounded-full bg-backyard-blue px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-backyard-blue-bright hover:scale-105 active:scale-95 glow-blue"
          >
            Démarrer mon projet
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </SmoothAnchor>
          <SmoothAnchor
            href="#services"
            id="hero-cta-secondary"
            className="inline-flex items-center gap-2 rounded-full border border-backyard-border bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-gray-500 hover:bg-white/5"
          >
            Voir nos services
          </SmoothAnchor>
        </motion.div>

        <motion.div variants={heroItem} className="w-full max-w-2xl">
          <div className="mb-5 flex flex-col items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">L'équipe fondatrice</p>
            <div className="flex items-center gap-3">
              {FOUNDERS.map((f, i) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => selectFounder(i)}
                  className="relative flex flex-col items-center gap-1.5 transition-all duration-200"
                  aria-label={`Voir le profil de ${f.firstName}`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white transition-all duration-200 ${
                      activeFounder === i ? 'scale-110 tab-ring-active' : 'opacity-50 hover:opacity-80'
                    }`}
                    style={{ backgroundColor: f.color }}
                  >
                    {f.initials}
                  </div>
                  <span
                    className={`text-xs font-medium transition-colors duration-200 ${
                      activeFounder === i ? 'text-white' : 'text-gray-600'
                    }`}
                  >
                    {f.firstName}
                  </span>
                  <span
                    className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                      activeFounder === i ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundColor: activeFounder === i ? f.color : 'transparent' }}
                  />
                </button>
              ))}
            </div>
          </div>

          <GlowCard glowColor={activeFounder === 0 ? 'blue' : 'purple'} className="w-full text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFounder.id}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <FounderCard founder={currentFounder} />
              </motion.div>
            </AnimatePresence>
          </GlowCard>
        </motion.div>

        <motion.p
          variants={heroItem}
          className="mt-10 text-xs text-gray-600 uppercase tracking-widest font-medium"
        >
          Co-fondateurs · Albert School · IA terrain
        </motion.p>
      </motion.div>
    </section>
  );
}
