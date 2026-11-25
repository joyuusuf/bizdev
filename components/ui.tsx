import type { ComponentProps, ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line py-20 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{lead}</p> : null}
    </div>
  );
}

const base =
  "site-button inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent text-white shadow-[0_10px_30px_rgb(37_99_235_/_20%)] hover:bg-[#1d4ed8]",
  secondary: "border border-line bg-paper text-ink hover:border-accent",
} as const;

type ButtonProps = ComponentProps<"a"> & { variant?: keyof typeof variants };

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function DotList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm leading-relaxed text-muted">
      {items.map((item, i) => (
        <span key={item} className="inline-flex items-center">
          {i > 0 ? <span className="mr-1.5 text-accent/60" aria-hidden>·</span> : null}
          <span className="break-words">{item}</span>
        </span>
      ))}
    </div>
  );
}
