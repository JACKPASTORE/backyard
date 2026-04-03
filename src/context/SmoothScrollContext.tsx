/**
 * Lenis + API scroll ciblée pour ancres (navbar, CTA).
 */

import Lenis from 'lenis';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';

type SmoothScrollContextValue = {
  scrollTo: (selector: string, options?: { offset?: number; duration?: number }) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

const DEFAULT_OFFSET = -88;
const DEFAULT_DURATION = 1.35;

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Optimisation Lenis "super fluide" - Suppression de la boucle custom `requestAnimationFrame` 
    // en faveur de autoRaf, et utilisation de lerp pour une fluidité absolue.
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      syncTouch: true, // Syncro du tactile pour une meilleure sensation mobile
    });
    lenisRef.current = lenis;

    document.documentElement.classList.add('lenis', 'lenis-smooth');

    return () => {
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback(
    (selector: string, options?: { offset?: number; duration?: number }) => {
      const lenis = lenisRef.current;
      if (!lenis) return;
      lenis.scrollTo(selector, {
        offset: options?.offset ?? DEFAULT_OFFSET,
        duration: options?.duration ?? DEFAULT_DURATION,
        easing: easeOutQuart,
      });
    },
    [],
  );

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  const ctx = useContext(SmoothScrollContext);
  if (!ctx) {
    throw new Error('useSmoothScroll doit être utilisé dans SmoothScrollProvider');
  }
  return ctx;
}
