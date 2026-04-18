"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#numeros", label: "Números" },
  { href: "#contato", label: "Contato" },
];

const WA_URL =
  "https://wa.me/5524981326908?text=Olá%2C%20vim%20pelo%20site%20da%20Contabilidade%20São%20José.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastScrollY.current;

      if (currentY < 24) {
        setCompact(false);
      } else if (scrollingUp && currentY < 110) {
        setCompact(false);
      } else if (currentY > 56) {
        setCompact(true);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (hash: string) => {
    const el = document.querySelector(hash) as HTMLElement | null;
    if (!el) return;
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
    <header className="fixed inset-x-0 top-0 z-50" role="banner">
      <div className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div
          className={[
            "mx-auto grid w-full items-center transition-all duration-300 ease-out",
            compact
              ? "max-w-[58rem] grid-cols-[minmax(0,12rem)_1fr_auto] rounded-[1.25rem] border border-white/10 bg-[rgba(9,14,23,0.88)] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5"
              : "max-w-7xl grid-cols-[auto_1fr_auto] rounded-none bg-transparent px-4 py-4 sm:px-6 lg:px-8",
          ].join(" ")}
        >
          <Link
            href="/"
            onClick={handleBrand}
            className={[
              "inline-flex min-w-0 items-center text-white",
              compact ? "gap-3" : "gap-3.5",
            ].join(" ")}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/18 bg-[rgba(255,255,255,0.08)]">
              <Image
                src="/logo.jpg"
                alt="Logo Contabilidade São José"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                priority
              />
            </span>

            <span
              className={[
                "min-w-0 font-semibold tracking-tight",
                compact ? "flex flex-col leading-[1.05] text-[0.88rem]" : "text-sm sm:text-base",
              ].join(" ")}
            >
              {compact ? (
                <>
                  <span>Contabilidade</span>
                  <span>São José</span>
                </>
              ) : (
                <span>Contabilidade São José</span>
              )}
            </span>
          </Link>

          <nav className="hidden md:flex md:justify-center" aria-label="Main">
            <ul
              className={[
                "flex items-center text-white/85",
                compact ? "gap-4 lg:gap-6" : "gap-6 lg:gap-8",
              ].join(" ")}
            >
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => handleAnchor(e, l.href)}
                    className={[
                      "font-medium transition hover:text-white",
                      compact ? "text-[0.95rem]" : "text-sm",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex md:justify-end">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className={[
                "inline-flex items-center justify-center font-semibold transition",
                compact
                  ? "min-h-[3.65rem] rounded-[1rem] bg-white px-5 text-[0.95rem] text-slate-950 hover:bg-white/92"
                  : "rounded-[0.95rem] bg-[rgba(9,14,23,0.88)] px-5 py-3 text-sm text-white hover:bg-[rgba(9,14,23,0.96)]",
              ].join(" ")}
            >
              Falar conosco
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-auto inline-flex items-center justify-center rounded-xl p-2 text-white transition hover:bg-white/10 md:hidden"
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

        <div
          className={[
            "mx-auto overflow-hidden transition-all duration-250 ease-out md:hidden",
            open ? "mt-2 max-h-[420px] max-w-[58rem] opacity-100" : "max-h-0 max-w-[58rem] opacity-0",
          ].join(" ")}
        >
          <nav className="rounded-[1.15rem] border border-white/10 bg-[rgba(9,14,23,0.92)] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => handleAnchor(e, l.href)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-white/88 transition hover:bg-white/8 hover:text-white"
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
                  className="block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-white/92"
                >
                  Falar conosco
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
