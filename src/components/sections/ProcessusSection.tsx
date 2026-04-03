/**
 * Processus — timeline + stagger élastique.
 */

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { inViewOnce, popInFromLeft, sectionStagger } from '../../motion/variants';

const STEPS = [
  {
    n: '01',
    title: 'Audit technique',
    desc: `Jack & Alexandre co-réalisent l'audit : données, SEO local, stack et points de friction client.`,
  },
  {
    n: '02',
    title: 'Architecture',
    desc: `Jack & Alexandre conçoivent l'architecture : parcours, workflows et intégrations — un seul fil direct.`,
  },
  {
    n: '03',
    title: 'Déploiement éclair',
    desc: 'Jack & Alexandre livrent ensemble un système robuste, testé et prêt pour la charge réelle.',
  },
  {
    n: '04',
    title: 'Optimisation continue',
    desc: `Jack & Alexandre itèrent avec vous : métriques, scaling et ajustements jusqu'à la performance cible.`,
  },
];

export default function ProcessusSection() {
  return (
    <section
      id="processus"
      className="relative scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 border-t border-backyard-border bg-backyard-surface/40"
    >
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={inViewOnce}
      >
        <motion.div variants={popInFromLeft}>
          <SectionHeading title="De l'audit au scaling : une méthode unique, à quatre temps." />
        </motion.div>

        <div className="relative max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <div
            className="absolute left-[1.125rem] md:left-[1.75rem] top-8 bottom-8 w-px bg-gradient-to-b from-backyard-blue/50 via-backyard-amethyst/40 to-transparent"
            aria-hidden
          />
          <motion.ol className="relative" variants={sectionStagger}>
          {STEPS.map((step) => (
            <motion.li key={step.n} variants={popInFromLeft} className="relative pl-14 md:pl-20 pb-14 last:pb-0">
              <div
                className="absolute left-0 md:left-1 top-0 flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full border border-backyard-blue/40 bg-backyard-bg text-[10px] md:text-xs font-bold tracking-widest text-backyard-blue-bright glow-step-num"
                aria-hidden
              >
                {step.n}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-2">{step.title}</h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">{step.desc}</p>
            </motion.li>
          ))}
          </motion.ol>
        </div>
      </motion.div>
    </section>
  );
}
