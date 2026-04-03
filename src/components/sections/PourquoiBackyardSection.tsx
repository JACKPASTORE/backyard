/**
 * Pourquoi Backyard — cartes + icônes + scrollytelling.
 */

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { inViewOnce, popIn, sectionStaggerWide } from '../../motion/variants';

const PAIN_POINTS = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <circle cx="10" cy="10" r="7.5" strokeOpacity="0.3" />
        <path strokeLinecap="round" d="M10 6v4l2.5 2.5" />
      </svg>
    ),
    color: '#3b82f6',
    hook: 'Si vous en avez marre de perdre 10 h / semaine à confirmer des RDV à la main…',
    outcome:
      `Des flux automatisés libèrent du temps vendeur et réduisent les oublis — vous vous concentrez sur l'accueil et la caisse.`,
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <circle cx="10" cy="8" r="3" strokeOpacity="0.4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeOpacity="0.6" />
        <path strokeLinecap="round" d="M10 2v1M10 13v1M2 8h1M17 8h1" strokeOpacity="0.3" />
      </svg>
    ),
    color: '#8b5cf6',
    hook: 'Si votre site est lent ou invisible sur Google Maps…',
    outcome:
      `La perf web et le SEO local ne sont pas du luxe : ils décident si un client vous trouve avant le concurrent d'à côté.`,
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <rect x="3" y="4" width="14" height="11" rx="2" strokeOpacity="0.35" />
        <path strokeLinecap="round" d="M7 8h6M7 11h4" strokeOpacity="0.7" />
      </svg>
    ),
    color: '#3b82f6',
    hook: 'Si vos leads arrivent en vrac (SMS, Instagram, téléphone) sans historique…',
    outcome:
      'Un CRM relié à vos canaux donne une vision claire : qui a appelé, quand relancer, quoi proposer ensuite.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <rect x="4" y="4" width="5" height="5" rx="1" strokeOpacity="0.4" />
        <rect x="11" y="4" width="5" height="5" rx="1" />
        <rect x="4" y="11" width="5" height="5" rx="1" />
        <rect x="11" y="11" width="5" height="5" rx="1" strokeOpacity="0.4" />
      </svg>
    ),
    color: '#8b5cf6',
    hook: 'Si vous voulez être joignable « comme un grand groupe » sans embaucher la nuit…',
    outcome:
      `L'IA et la voix sur-mesure peuvent qualifier une demande, prendre un message ou orienter — selon vos règles, vos données.`,
  },
];

export default function PourquoiBackyardSection() {
  return (
    <section
      id="pourquoi-backyard"
      className="relative scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 border-t border-backyard-border bg-backyard-bg/40"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <motion.div
        className="relative mx-auto max-w-6xl px-6"
        variants={sectionStaggerWide}
        initial="hidden"
        whileInView="show"
        viewport={inViewOnce}
      >
        <motion.div variants={popIn}>
          <SectionHeading kicker="Alignement" title="Pourquoi Backyard ?" />
        </motion.div>

        <motion.p
          variants={popIn}
          className="-mt-8 mb-12 max-w-2xl text-sm md:text-base text-gray-400 font-light leading-relaxed"
        >
          Nous ne promettons pas de chiffres empruntés à d'autres. Nous intervenons quand le terrain numérique
          de votre commerce physique devient un frein — et nous construisons des systèmes mesurables pour le
          transformer en levier.
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6" variants={sectionStaggerWide}>
          {PAIN_POINTS.map((item, i) => (
            <motion.article
              key={i}
              variants={popIn}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
              className="rounded-2xl border border-backyard-border bg-backyard-surface/80 backdrop-blur-sm p-6 md:p-8 transition-colors duration-300 hover:border-backyard-border/90"
            >
              {/* Icon */}
              <div
                className="mb-4 w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${item.color}12`,
                  border: `1px solid ${item.color}28`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              <p className="text-sm md:text-base font-medium text-white leading-snug mb-4">{item.hook}</p>
              <p className="text-sm text-gray-500 font-light leading-relaxed border-t border-backyard-border pt-4">
                {item.outcome}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
