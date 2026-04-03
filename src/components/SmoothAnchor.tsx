/**
 * Lien d’ancre : scroll fluide Lenis (évite le saut natif).
 */

import type { ComponentProps, MouseEvent } from 'react';
import { useSmoothScroll } from '../context/SmoothScrollContext';

type SmoothAnchorProps = ComponentProps<'a'> & {
  duration?: number;
  offset?: number;
};

export default function SmoothAnchor({
  href,
  onClick,
  duration,
  offset,
  children,
  ...rest
}: SmoothAnchorProps) {
  const { scrollTo } = useSmoothScroll();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    scrollTo(href, { duration, offset });
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
