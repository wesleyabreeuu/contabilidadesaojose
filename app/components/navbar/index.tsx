"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#numeros", label: "Numeros" }, // mantém o id #numeros
  { href: "#contato", label: "Contato" },
];

const WA_URL =
  "https://wa.me/5524981326908?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Contabilidade%20S%C3%A3o%20Jos%C3%A9.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll suave com compensação da navbar
  const scrollToId = (hash: string) => {
    const el = document.querySelector(hash) as HTMLElement | null;
    if (!el) return;
    // Se você usa Tailwind `scroll-mt-*` nas seções, o offset já é tratado.
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(hash);
  };

  const handleBrand = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-all",
        "bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70",
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.08)]" : "",
      ].join(" ")}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4 lg:px-6">
        {/* Brand -> Topo */}
        <Link
          href="/"
          onClick={handleBrand}
          className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-white md:text-lg"
        >
          <span className="relative">
            Contabilidade São José
            <span className="absolute -bottom-1 left-0 h-[2px] w-4 rounded-full bg-blue-500/70"></span>
          </span>
        </Link>

        {/* Links (desktop) */}
        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={(e) => handleAnchor(e, l.href)}
                  className="group relative text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA (desktop) -> WhatsApp */}
        <div className="hidden md:block">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Fale Conosco
          </a>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white/90 outline-none ring-0 transition hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={[
          "md:hidden",
          "origin-top transition-all duration-200 ease-out",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav
          className="mx-2 mb-2 overflow-hidden rounded-xl border border-white/10 bg-black/90 backdrop-blur"
          aria-label="Mobile"
        >
          <ul className="grid gap-1 p-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={(e) => handleAnchor(e, l.href)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mb-2 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
