"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { Container } from "./ui";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const initialTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.add("theme-transition");
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
    window.setTimeout(() => document.documentElement.classList.remove("theme-transition"), 400);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Close the mobile menu on Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/85 backdrop-blur-xl transition-colors ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div
        className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-accent"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name}, back to top`}>
          <span className="grid size-8 place-items-center rounded-md bg-accent font-mono text-xs font-semibold text-white shadow-[0_8px_24px_rgb(37_99_235_/_20%)]">
            {site.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-ink">{site.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link relative py-2 text-sm transition-colors hover:text-ink ${
                active === link.href ? "text-ink" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.resume}
            download="Jawad-Olamide-Yuusuf-Resume.pdf"
            className="nav-resume inline-flex items-center gap-1.5 rounded-md border border-line bg-paper px-3 py-2 text-sm font-medium text-ink"
          >
            <Download className="size-3.5" aria-hidden />
            Résumé
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-button grid size-9 place-items-center rounded-full border border-line bg-paper text-accent hover:border-accent"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-button grid size-10 place-items-center rounded-md text-accent"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="icon-button -mr-2 grid size-10 place-items-center rounded-md text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <Container className="flex h-[calc(100dvh-4rem)] flex-col py-4">
              <nav aria-label="Mobile" className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="nav-mobile-link border-b border-line py-4 text-lg font-medium text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={site.resume}
                download="Jawad-Olamide-Yuusuf-Resume.pdf"
                onClick={() => setOpen(false)}
                className="site-button mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgb(37_99_235_/_20%)]"
              >
                <Download className="size-4" aria-hidden />
                Download Résumé
              </a>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
