/**
 * Titre de section — typographie minimaliste, animations CSS.
 */

interface SectionHeadingProps {
  title: string;
  kicker?: string;
  className?: string;
  animateClassName?: string;
}

export default function SectionHeading({
  title,
  kicker,
  className = '',
  animateClassName = 'animate-fade-in opacity-init',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${className}`}>
      {kicker ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] text-backyard-amethyst-bright/80 mb-4 ${animateClassName}`}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={`text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight text-white leading-tight ${animateClassName}`}
      >
        {title}
      </h2>
    </div>
  );
}
