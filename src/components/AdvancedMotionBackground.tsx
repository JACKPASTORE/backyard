/**
 * Fond circuit / particules abstraites + parallax (useScroll + useTransform).
 * Layers séparés pour limiter les re-renders (styles animés via MotionValues uniquement).
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useMemo } from 'react';

/** Grille de segments type PCB — SVG statique mémoïsé */
const CircuitLayer = memo(function CircuitLayer({
  seed,
  strokeOpacity,
}: {
  seed: number;
  strokeOpacity: number;
}) {
  const paths = useMemo(() => {
    const out: string[] = [];
    const cols = 14;
    const rows = 10;
    const w = 100;
    const h = 100;
    const gx = w / cols;
    const gy = h / rows;
    const jitter = (i: number, j: number) => ((i * 17 + j * 31 + seed * 13) % 7) * 0.4;

    for (let j = 0; j <= rows; j++) {
      for (let i = 0; i < cols; i++) {
        const x = i * gx + jitter(i, j);
        const y = j * gy + jitter(j, i);
        if ((i + j + seed) % 3 === 0) {
          out.push(`M ${x} ${y} L ${x + gx * 0.85} ${y}`);
        }
        if ((i + j + seed) % 4 === 1) {
          out.push(`M ${x} ${y} L ${x} ${y + gy * 0.75}`);
        }
        if ((i + j + seed) % 5 === 2) {
          out.push(`M ${x} ${y} L ${x + gx * 0.5} ${y + gy * 0.5}`);
        }
      }
    }
    return out;
  }, [seed]);

  return (
    <svg
      className="absolute left-1/2 top-0 h-[140%] w-[140%] -translate-x-1/2"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={`grad-circuit-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity={strokeOpacity} />
          <stop offset="55%" stopColor="rgb(139, 92, 246)" stopOpacity={strokeOpacity * 0.7} />
          <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity={strokeOpacity * 0.35} />
        </linearGradient>
      </defs>
      {paths.map((d, idx) => (
        <path
          key={`${seed}-${idx}`}
          d={d}
          stroke={`url(#grad-circuit-${seed})`}
          strokeWidth={0.08}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
});

export default function AdvancedMotionBackground() {
  const { scrollY } = useScroll();

  const ySlow = useTransform(scrollY, [0, 2800], [0, 220]);
  const yFast = useTransform(scrollY, [0, 2800], [0, -380]);
  const rotateLayer = useTransform(scrollY, [0, 2400], [0, 2.5]);
  const opacityFront = useTransform(scrollY, [0, 1200, 2600], [0.32, 0.22, 0.14]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-backyard-bg" />
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: ySlow, rotate: rotateLayer }}
      >
        <CircuitLayer seed={1} strokeOpacity={0.45} />
      </motion.div>
      <motion.div
        className="absolute inset-0 will-change-transform mix-blend-screen"
        style={{ y: yFast, opacity: opacityFront }}
      >
        <CircuitLayer seed={2} strokeOpacity={0.55} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-backyard-bg via-transparent to-backyard-bg opacity-90" />
    </div>
  );
}
