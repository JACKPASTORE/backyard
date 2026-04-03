/**
 * Pourquoi Backyard — cartes + scrollytelling.
 */

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { inViewOnce, popIn, sectionStaggerWide } from '../../motion/variants';

const PAIN_POINTS = [
  {
    hook: 'Si vous en avez marre de perdre 10 h / semaine à confirmer des RDV à la main…',
    outcome:
      'Des flux automatisés libèrent du temps vendeur et réduisent les oublis — vous vous concentrez sur l’accueil et la caisse.',
  },
  {
    hook: 'Si votre site est lent ou invisible sur Google Maps…',
    outcome:
      'La perf web et le SEO local ne sont pas du luxe : ils décident si un client vous trouve avant le concurrent d’à côté.',
  },
  {
    hook: 'Si vos leads arrivent en vrac (SMS, Instagram, téléphone) sans historique…',
    outcome:
      'Un CRM relié à vos canaux donne une vision claire : qui a appelé, quand relancer, quoi proposer ensuite.',
  },
  {
    hook: 'Si vous voulez être joignable « comme un grand groupe » sans embaucher la nuit…',
    outcome:
      'L’IA et la voix sur-mesure peuvent qualifier une demande, prendre un message ou orienter — selon vos règles, vos données.',
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
          Nous ne promettons pas de chiffres empruntés à d’autres. Nous intervenons quand le terrain numérique
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
