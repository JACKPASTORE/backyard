/**
 * Variants Framer Motion partagés — scrollytelling & entrées élastiques.
 */

import type { Transition, Variants } from 'framer-motion';

export const springPop: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 26,
  mass: 0.82,
};

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 28,
  mass: 0.9,
};

/** Conteneur de section : cascade sur les enfants */
export const sectionStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

/** Cascade plus lente pour grilles denses (services, tarifs) */
export const sectionStaggerWide: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

/** Pop vertical + léger scale (effet « scrollytelling ») */
export const popIn: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springPop,
  },
};

/** Entrée latérale (timeline, cartes alignées) */
export const popInFromLeft: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: springPop,
  },
};

/** Hero above-the-fold : même ressort, sans scroll */
export const heroStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springSoft,
  },
};

/** Viewport commun pour whileInView (une seule lecture au scroll) */
export const inViewOnce = {
  once: true as const,
  margin: '0px 0px -100px 0px',
};
