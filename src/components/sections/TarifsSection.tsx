/**
 * Tarifs — colonnes + feature lists + motion, CTA Lenis.
 */

import { motion } from 'framer-motion';
import SmoothAnchor from '../SmoothAnchor';
import SectionHeading from './SectionHeading';
import { inViewOnce, popIn, sectionStaggerWide } from '../../motion/variants';

const CHECK = (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.25" />
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PLANS = [
  {
    name: 'Starter',
    badge: null,
    tagline: 'Site vitrine premium + visibilité locale.',
    price: 'Sur devis',
    priceNote: 'Audit gratuit inclus',
    featured: false,
    features: [
      'Site vitrine React / Next.js haute perf',
      'Score Lighthouse ≥ 95',
      'SEO local : Google Business + structured data',
      'Hébergement & nom de domaine 1 an',
      'Formulaire de contact intégré',
      'Support 30 jours post-livraison',
    ],
  },
  {
    name: 'Growth',
    badge: 'Le plus populaire',
    tagline: 'Starter + automatisation CRM complète.',
    price: 'Sur devis',
    priceNote: 'Audit gratuit inclus',
    featured: true,
    features: [
      'Tout le plan Starter',
      'CRM sur-mesure (HubSpot / Notion / custom)',
      'Automatisations Make / Zapier',
      'Sync multi-canaux (SMS, Instagram, email)',
      'Dashboard analytique temps réel',
      'Support prioritaire 60 jours',
    ],
  },
  {
    name: 'Enterprise AI',
    badge: null,
    tagline: 'Growth + agent vocal IA disponible 24/7.',
    price: 'Sur devis',
    priceNote: 'Audit gratuit inclus',
    featured: false,
    features: [
      'Tout le plan Growth',
      'Agent vocal IA (qualification entrante)',
      'LLM privé connecté à vos données',
      'Workflows IA sur-mesure (n8n / custom)',
      'Rapports business mensuels',
      'Support dédié & SLA garanti',
    ],
  },
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
              {plan.badge ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-backyard-blue to-backyard-amethyst px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-lg whitespace-nowrap">
                  {plan.badge}
                </span>
              ) : null}

              <div className="mb-6 mt-2">
                <h3 className="text-lg font-semibold text-white tracking-tight mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{plan.tagline}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-backyard-border">
                <span className="text-2xl font-bold text-white">{plan.price}</span>
                <p className="mt-1 text-xs text-gray-500">{plan.priceNote}</p>
              </div>

              <ul className="flex-grow mb-8 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className={`flex items-start gap-2.5 text-sm font-light leading-snug ${plan.featured ? 'text-gray-300' : 'text-gray-400'}`}>
                    <span className={plan.featured ? 'text-backyard-blue-bright mt-0.5' : 'text-gray-600 mt-0.5'}>
                      {CHECK}
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

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

        <motion.p variants={popIn} className="mt-8 text-center text-xs text-gray-600 font-light">
          Chaque projet démarre par un audit gratuit de 30 min. Aucun engagement requis.
        </motion.p>
      </motion.div>
    </section>
  );
}
