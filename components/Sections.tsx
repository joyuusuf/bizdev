import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import {
  about,
  alsoBuilt,
  capabilities,
  contact,
  crmAreas,
  education,
  experience,
  processSteps,
  projects,
  site,
  tools,
} from "@/lib/site";
import { Reveal } from "./Reveal";
import { ButtonLink, Container, DotList, Eyebrow, Section, SectionHeading } from "./ui";

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section id="top" className="pt-14 pb-20 sm:pt-20 sm:pb-24">
      <Container className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{site.categories.join(" · ")}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          </Reveal>
          <Reveal delay={0.16}>
          <p className="mt-6 text-xl leading-snug font-medium text-ink sm:text-2xl">{site.headline}</p>
          </Reveal>
          <Reveal delay={0.24}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{site.intro}</p>
          </Reveal>

          <Reveal delay={0.32}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#work">
              View my work
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink
              href={site.resume}
              download="Jawad-Olamide-Yuusuf-Resume.pdf"
              variant="secondary"
            >
              <Download className="size-4" aria-hidden />
              Download résumé
            </ButtonLink>
          </div>
          </Reveal>

          <Reveal delay={0.4}>
          <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" aria-hidden />
              {site.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {site.availability}
            </span>
          </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto w-full max-w-xs md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-soft">
            <Image
              src={site.photo}
              alt={site.photoAlt}
              fill
              priority
              sizes="(min-width: 768px) 360px, 320px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- About ---------- */

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Software, research and the work in between." />
      <Reveal className="max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.12}>
            <article className="lift-card h-full rounded-lg border border-line bg-paper p-6">
              <h3 className="text-lg font-semibold tracking-tight text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
              <div className="mt-5 border-t border-line pt-4">
                <DotList items={c.skills} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Business Development (process) + CRM ---------- */

export function BusinessDevelopment() {
  return (
    <Section id="business-development" className="bg-soft">
      <SectionHeading
        eyebrow="Business development"
        title="How I find and reach the right businesses."
        lead="A simple, repeatable process for business research, lead generation and outreach. Every lead is checked before anyone is contacted."
      />

      <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, i) => (
          <li key={step.title} className="bg-paper p-6 sm:p-7">
            <Reveal delay={(i % 3) * 0.1}>
              <span className="font-mono text-sm font-medium text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <div id="crm" className="mt-20 scroll-mt-20">
        <Eyebrow>GoHighLevel</Eyebrow>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          How I work in a CRM.
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          My day-to-day CRM work is in GoHighLevel, across client sub-accounts for a US-based agency. The
          focus is on keeping records accurate and making sure nothing is left without a next step.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {crmAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 4) * 0.09}>
              <div className="lift-card h-full rounded-lg border border-line bg-paper p-5">
                <h4 className="text-sm font-semibold text-ink">{area.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've worked." />

      <div className="divide-y divide-line border-y border-line">
        {experience.map((job) => (
          <Reveal key={`${job.role}-${job.org}`}>
            <article className="grid gap-4 py-8 md:grid-cols-[180px_1fr] md:gap-10">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted md:pt-1.5">
                {job.period}
              </p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {job.role}
                  <span className="font-normal text-muted"> · {job.org}</span>
                </h3>
                <p className="mt-1 text-sm text-muted">{job.meta}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent/50" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted">
        Full details are in my{" "}
        <a
          href={site.resume}
          download="Jawad-Olamide-Yuusuf-Resume.pdf"
          className="project-link font-medium text-ink underline decoration-line underline-offset-4"
        >
          résumé
        </a>
        .
      </p>
    </Section>
  );
}

/* ---------- Work ---------- */

export function Work() {
  return (
    <Section id="work">
      <SectionHeading eyebrow="Selected work" title="Projects." />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.12}>
            <article className="lift-card group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-paper">
              <div className="relative aspect-[16/10] border-b border-line bg-soft">
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.category}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-4">
                  <DotList items={p.tech} />
                </div>
                <div className="mt-auto pt-6">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link inline-flex items-center gap-1 rounded-sm text-sm font-medium text-ink underline decoration-line underline-offset-4"
                    >
                      View project
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  ) : (
                    <span className="text-sm text-muted">Link coming soon</span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {alsoBuilt.length ? (
        <p className="mt-8 text-sm text-muted">
          <span className="font-medium text-ink">Also built:</span> {alsoBuilt.join(", ")}.
        </p>
      ) : null}
    </Section>
  );
}

/* ---------- Tools ---------- */

export function Tools() {
  return (
    <Section id="tools" className="bg-soft">
      <SectionHeading eyebrow="Tools" title="What I work with." />
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((group, groupIndex) => (
          <Reveal key={group.category} delay={(groupIndex % 3) * 0.08}>
            <div className="tool-category border-t border-line pt-4">
              <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="tool-chip"
                    style={{ animationDelay: `${(groupIndex * 0.09 + itemIndex * 0.07).toFixed(2)}s` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Education ---------- */

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Training." />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {education.map((e) => (
          <Reveal key={e.title}>
            <div className="lift-card flex h-full items-start justify-between gap-6 rounded-lg border border-line p-6">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-ink">{e.title}</h3>
                <p className="mt-1 text-sm text-muted">{e.institution}</p>
              </div>
              {e.year ? <p className="font-mono text-sm text-muted">{e.year}</p> : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */

export function Contact() {
  const links = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail, external: false },
    { label: "Phone", value: contact.phone, href: contact.phoneHref, icon: Phone, external: false },
    contact.linkedin && {
      label: "LinkedIn",
      value: "linkedin.com/in/jawad-olamide-yuusuf",
      href: contact.linkedin,
      icon: ArrowUpRight,
      external: true,
    },
    contact.github && {
      label: "GitHub",
      value: contact.github.replace(/^https?:\/\/(www\.)?/, ""),
      href: contact.github,
      icon: ArrowUpRight,
      external: true,
    },
  ].filter(Boolean) as {
    label: string;
    value: string;
    href: string;
    icon: typeof Mail;
    external: boolean;
  }[];

  return (
    <Section id="contact">
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let&apos;s work together.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m open to remote roles in software development, business development and CRM operations.
            The quickest way to reach me is by email.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`mailto:${contact.email}`}>
              <Mail className="size-4" aria-hidden />
              Send an email
            </ButtonLink>
            <ButtonLink href={site.resume} download="Jawad-Olamide-Yuusuf-Resume.pdf" variant="secondary">
              <Download className="size-4" aria-hidden />
              Download résumé
            </ButtonLink>
          </div>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {links.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 py-5"
              >
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-wider text-muted">{label}</span>
                  <span className="mt-1 block truncate text-base font-medium text-ink group-hover:text-accent">
                    {value}
                  </span>
                </span>
                <Icon className="size-4 shrink-0 text-muted group-hover:text-accent" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.location}</p>
      </Container>
    </footer>
  );
}
