/**
 * Tarifs — colonnes + motion, CTA Lenis.
 */

import { motion } from 'framer-motion';
import SmoothAnchor from '../SmoothAnchor';
import SectionHeading from './SectionHeading';
import { inViewOnce, popIn, sectionStaggerWide } from '../../motion/variants';

const PLANS = [
  { name: 'Starter', desc: 'Site vitrine premium + SEO local.', featured: false },
  { name: 'Growth', badge: 'Mise en avant', desc: 'Starter + Automatisation CRM.', featured: true },
  { name: 'Enterprise AI', desc: 'Growth + Agent vocal IA.', featured: false },
];

export default function TarifsSection() {
  return (
    <section
      id="tarifs"
      className="relative scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 border-t border-backyard-border bg-backyard-surface/30"
    >
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={sectionStaggerWide}
        initial="hidden"
        whileInView="show"
        viewport={inViewOnce}
      >
        <motion.div variants={popIn}>
          <SectionHeading title="Des formules qui montent en gamme avec votre ambition." />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch"
          variants={sectionStaggerWide}
        >
          {PLANS.map((plan) => (
            <motion.article
              key={plan.name}
              variants={popIn}
              whileHover={
                plan.featured
                  ? { scale: 1.03, transition: { type: 'spring', stiffness: 360, damping: 22 } }
                  : { y: -6, transition: { type: 'spring', stiffness: 380, damping: 24 } }
              }
              whileTap={{ scale: 0.99 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? 'border-backyard-blue/40 bg-backyard-surface-2/90 glow-pricing z-10'
                  : 'border-backyard-border bg-backyard-surface/60 hover:border-backyard-border/90'
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-backyard-blue to-backyard-amethyst px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-lg">
                  {plan.badge}
                </span>
              ) : null}
              <h3 className="text-lg font-semibold text-white tracking-tight mb-2 mt-2">{plan.name}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed flex-grow mb-8">{plan.desc}</p>
              <SmoothAnchor
                href="#contact"
                className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  plan.featured
                    ? 'bg-backyard-blue text-white hover:bg-backyard-blue-light glow-blue hover:scale-[1.02] active:scale-[0.98]'
                    : 'border border-backyard-border text-white hover:border-backyard-blue/50 hover:bg-white/5'
                }`}
              >
                Demander une estimation
              </SmoothAnchor>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
