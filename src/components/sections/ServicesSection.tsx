/**
 * Services — Bento + GlowCard, entrée scrollytelling (stagger).
 */

import { motion } from 'framer-motion';
import GlowCard from '../GlowCard';
import SectionHeading from './SectionHeading';
import { inViewOnce, popIn, sectionStaggerWide } from '../../motion/variants';

const CARDS = [
  {
    title: 'Web Perf & SEO Local',
    body: 'Sites qui chargent en un éclair et structure data pensée pour Google Maps — moins de friction, plus de demandes qualifiées.',
    glow: 'blue' as const,
    className: 'lg:col-span-4 lg:row-span-2 min-h-[240px] lg:min-h-[340px]',
    image: 'https://images.unsplash.com/photo-1534779182058-26272ba6a04f?auto=format&fit=crop&w=1080&q=75',
  },
  {
    title: 'Automatisation Business',
    body: 'CRM, Zapier, Make : nous connectons vos outils pour supprimer les tâches répétitives et sécuriser votre pipeline.',
    glow: 'purple' as const,
    className: 'lg:col-span-2 min-h-[180px]',
    image: 'https://images.unsplash.com/photo-1610913721979-b20ede600e63?auto=format&fit=crop&w=1080&q=75',
  },
  {
    title: 'IA Sur-Mesure',
    body: 'Agents vocaux, LLM privés et workflows intelligents — disponibles quand vous ne l’êtes pas.',
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
          <SectionHeading title="Trois leviers pour prendre l’avantage sur votre zone." />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-6 lg:grid-rows-2 lg:auto-rows-fr"
          variants={sectionStaggerWide}
        >
          {CARDS.map((card) => (
            <motion.div key={card.title} variants={popIn} className={`${card.className} min-h-0 group`}>
              <GlowCard glowColor={card.glow} className="h-full flex flex-col justify-end">
                {/* Integration de l'image DA Dark Tech */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden z-0">
                  <img
                    src={card.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-30 mix-blend-luminosity grayscale brightness-[0.4] transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-40"
                    aria-hidden="true"
                  />
                  {/* Overlay pour garantir la lisibilité du texte */}
                  <div className="absolute inset-0 bg-gradient-to-t from-backyard-bg/95 via-backyard-bg/50 to-transparent" />
                </div>

                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end text-left h-full">
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-prose">
                    {card.body}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
