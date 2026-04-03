/**
 * Services — Bento + GlowCard, entrée scrollytelling (stagger).
 */

import { motion } from 'framer-motion';
import GlowCard from '../GlowCard';
import SectionHeading from './SectionHeading';
import SmoothAnchor from '../SmoothAnchor';
import { inViewOnce, popIn, sectionStaggerWide } from '../../motion/variants';

const CARDS = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <circle cx="10" cy="10" r="8" strokeOpacity="0.4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 13.5c0-2 1-3.5 3.5-3.5s3.5 1.5 3.5 3.5M10 9V6.5" />
        <circle cx="10" cy="5.5" r="1" fill="currentColor" strokeWidth={0} />
      </svg>
    ),
    title: 'Web Perf & SEO Local',
    body: 'Sites qui chargent en un éclair et structure data pensée pour Google Maps — moins de friction, plus de demandes qualifiées.',
    tag: 'Score Lighthouse ≥ 95',
    glow: 'blue' as const,
    className: 'lg:col-span-4 lg:row-span-2 min-h-[240px] lg:min-h-[340px]',
    image: 'https://images.unsplash.com/photo-1534779182058-26272ba6a04f?auto=format&fit=crop&w=1080&q=75',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h4l2 6 3-10 2 4h3" />
      </svg>
    ),
    title: 'Automatisation Business',
    body: 'CRM, Zapier, Make : nous connectons vos outils pour supprimer les tâches répétitives et sécuriser votre pipeline.',
    tag: '-10 h / semaine en moyenne',
    glow: 'purple' as const,
    className: 'lg:col-span-2 min-h-[180px]',
    image: 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?auto=format&fit=crop&w=1080&q=75',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <rect x="3" y="3" width="6" height="6" rx="1.5" strokeOpacity="0.5" />
        <rect x="11" y="3" width="6" height="6" rx="1.5" />
        <rect x="3" y="11" width="6" height="6" rx="1.5" />
        <rect x="11" y="11" width="6" height="6" rx="1.5" strokeOpacity="0.5" />
      </svg>
    ),
    title: 'IA Sur-Mesure',
    body: 'Agents vocaux, LLM privés et workflows intelligents — disponibles quand vous ne l'êtes pas.',
    tag: 'Disponible 24 / 7',
    glow: 'purple' as const,
    className: 'lg:col-span-2 min-h-[180px]',
    image: 'https://images.unsplash.com/photo-1738640679960-58d445857945?auto=format&fit=crop&w=1080&q=75',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 border-t border-backyard-border bg-backyard-bg/40"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <motion.div
        className="relative mx-auto max-w-6xl px-6"
        variants={sectionStaggerWide}
        initial="hidden"
        whileInView="show"
        viewport={inViewOnce}
      >
        <motion.div variants={popIn}>
          <SectionHeading title="Trois leviers pour prendre l'avantage sur votre zone." />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-6 lg:grid-rows-2 lg:auto-rows-fr"
          variants={sectionStaggerWide}
        >
          {CARDS.map((card) => (
            <motion.div key={card.title} variants={popIn} className={`${card.className} min-h-0 group`}>
              <GlowCard glowColor={card.glow} className="h-full flex flex-col justify-end">
                {/* Image DA Dark Tech */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden z-0">
                  <img
                    src={card.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-30 mix-blend-luminosity grayscale brightness-[0.4] transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-40"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-backyard-bg/95 via-backyard-bg/50 to-transparent" />
                </div>

                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end text-left h-full gap-3">
                  {/* Icon + tag row */}
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-${card.glow === 'blue' ? 'backyard-blue-bright' : 'backyard-amethyst-bright'} opacity-80`}>
                      {card.icon}
                    </span>
                    <span className="rounded-full border border-backyard-border bg-backyard-bg/60 px-2.5 py-0.5 text-[10px] font-medium text-gray-500 tracking-wide">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-prose">
                    {card.body}
                  </p>

                  {/* Hover CTA */}
                  <SmoothAnchor
                    href="#contact"
                    className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-white transition-colors duration-200 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all"
                  >
                    En savoir plus
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 6h7M6.5 3l3 3-3 3" />
                    </svg>
                  </SmoothAnchor>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
