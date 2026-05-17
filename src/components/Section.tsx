import clsx from "clsx";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps): JSX.Element {
  return (
    <section id={id} className={clsx("py-24 px-5", className)}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title || description) && (
          <div className="max-w-2xl mb-12">
            {eyebrow && (
              <div className="font-mono text-[11px] uppercase tracking-[2px] text-accent-green mb-3">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-text-secondary leading-relaxed">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
