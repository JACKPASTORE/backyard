/**
 * GlowCard — lumière au pointeur + micro-interactions Framer Motion.
 */

import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef, useCallback, useEffect, useRef, type ReactNode } from 'react';

interface GlowCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
}

const GLOW_COLOR_MAP = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};



const GLOW_CSS = `
[data-glow]::before,
[data-glow]::after {
  pointer-events: none;
  content: "";
  position: absolute;
  inset: calc(var(--border-size) * -1);
  border: var(--border-size) solid transparent;
  border-radius: calc(var(--radius) * 1px);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 0;
  mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
  mask-clip: padding-box, border-box;
  mask-composite: intersect;
}
[data-glow]::before {
  background-image: radial-gradient(
    calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
    calc(var(--xrel, 0) * 1px + var(--border-size)) calc(var(--yrel, 0) * 1px + var(--border-size)),
    hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)),
    transparent 100%
  );
  filter: brightness(2);
}
[data-glow]::after {
  background-image: radial-gradient(
    calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
    calc(var(--xrel, 0) * 1px + var(--border-size)) calc(var(--yrel, 0) * 1px + var(--border-size)),
    hsl(0 100% 100% / var(--border-light-opacity, 1)),
    transparent 100%
  );
}
[data-glow] [data-glow] {
  position: absolute;
  inset: 0;
  will-change: filter;
  opacity: var(--outer, 1);
  border-radius: calc(var(--radius) * 1px);
  border-width: calc(var(--border-size) * 20);
  filter: blur(calc(var(--border-size) * 10));
  background: none;
  pointer-events: none;
  border: none;
}
[data-glow] > [data-glow]::before {
  inset: -10px;
  border-width: 10px;
}
`;

const GLOW_STYLE_ATTR = 'data-glow-style';

function mergeRefs<T>(...refs: (import('react').Ref<T> | undefined)[]) {
  return (node: T | null) => {
    refs.forEach((r) => {
      if (r == null) return;
      if (typeof r === 'function') r(node);
      else (r as import('react').MutableRefObject<T | null>).current = node;
    });
  };
}

const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(function GlowCard(
  { children, className = '', glowColor = 'blue', style: motionStyle, ...motionProps },
  ref,
) {
  const cardRef = useRef<HTMLDivElement>(null);
  const setRef = mergeRefs(cardRef, ref);

  useEffect(() => {
    if (document.querySelector(`[${GLOW_STYLE_ATTR}]`)) return;
    const el = document.createElement('style');
    el.setAttribute(GLOW_STYLE_ATTR, '');
    el.textContent = GLOW_CSS;
    document.head.appendChild(el);
  }, []);

  const syncPointer = useCallback((e: PointerEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--xp', (e.clientX / window.innerWidth).toFixed(2));
    cardRef.current.style.setProperty('--yp', (e.clientY / window.innerHeight).toFixed(2));
    cardRef.current.style.setProperty('--xrel', (e.clientX - rect.left).toFixed(2));
    cardRef.current.style.setProperty('--yrel', (e.clientY - rect.top).toFixed(2));
  }, []);

  useEffect(() => {
    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, [syncPointer]);

  const { base, spread } = GLOW_COLOR_MAP[glowColor];

  const glowStyles: React.CSSProperties & Record<string, string | number> = {
    '--base': base,
    '--spread': spread,
    '--radius': '14',
    '--border': '2',
    '--backdrop': 'hsl(220 20% 8% / 0.85)',
    '--backup-border': 'rgba(255,255,255,0.08)',
    '--size': '220',
    '--outer': '1',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 150) * 1px)',
    '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--xrel, 0) * 1px) calc(var(--yrel, 0) * 1px),
      hsl(var(--hue, 210) 100% 70% / 0.08),
      transparent
    )`,
    backgroundColor: 'var(--backdrop, transparent)',
    border: 'var(--border-size) solid var(--backup-border)',
    position: 'relative',
    touchAction: 'manipulation',
    transformStyle: 'preserve-3d',
  };

  const mergedStyle = {
    ...glowStyles,
    ...(motionStyle as React.CSSProperties),
    transformPerspective: 1200,
  } as React.CSSProperties;

  return (
    <motion.div
      ref={setRef}
      data-glow
      style={mergedStyle}
      className={`rounded-2xl relative ${className}`}
      {...motionProps}
      whileHover={{
        scale: 1.02,
        rotateX: 4.5,
        rotateY: -3.5,
        transition: { type: 'spring', stiffness: 420, damping: 24 },
      }}
      whileTap={{
        scale: 0.985,
        rotateX: 0,
        rotateY: 0,
        transition: { type: 'spring', stiffness: 500, damping: 30 },
      }}
    >
      <div data-glow />
      {children}
    </motion.div>
  );
});

export default GlowCard;
