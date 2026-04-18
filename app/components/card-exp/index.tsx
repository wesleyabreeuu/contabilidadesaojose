"use client";

import React, { useEffect, useRef, useState } from "react";

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

function Counter({
  to,
  duration = 1500,
  className = "",
  prefix = "+",
}: {
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setVal(Math.round(easeOutCubic(p) * to));
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, duration, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
    </span>
  );
}

function TitleTwoTone({ text }: { text: string }) {
  const parts = text.trim().split(/\s+/);
  const first = parts.slice(0, 2).join(" ");
  const rest = parts.slice(2).join(" ");
  return (
    <h2 className="mb-14 text-center text-4xl font-semibold tracking-tight md:text-5xl">
      <span className="text-white">{first} </span>
      <span className="text-[var(--accent)]">{rest}</span>
    </h2>
  );
}

export default function Experiencia() {
  return (
    <section id="numeros" className="section-shell w-full bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TitleTwoTone text="Números da Contabilidade" />

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <li className="group flex min-h-[340px] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/6 p-12 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_18px_55px_rgba(15,23,42,0.4)] hover:ring-2 hover:ring-[var(--accent)]/35 lg:p-14">
            <Counter
              to={15}
              className="mb-3 block text-6xl font-semibold tracking-tight text-[var(--accent)] md:text-7xl lg:text-8xl"
            />
            <p className="text-center text-lg font-medium text-white/88 md:text-xl">anos de experiência</p>
          </li>

          <li className="group flex min-h-[340px] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/6 p-12 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_18px_55px_rgba(15,23,42,0.4)] hover:ring-2 hover:ring-[var(--accent)]/35 lg:p-14">
            <Counter
              to={300}
              className="mb-3 block text-6xl font-semibold tracking-tight text-[var(--accent)] md:text-7xl lg:text-8xl"
            />
            <p className="text-center text-lg font-medium text-white/88 md:text-xl">clientes atendidos</p>
          </li>

          <li className="group flex min-h-[340px] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/6 p-12 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_18px_55px_rgba(15,23,42,0.4)] hover:ring-2 hover:ring-[var(--accent)]/35 lg:p-14">
            <Counter
              to={100}
              className="mb-3 block text-6xl font-semibold tracking-tight text-[var(--accent)] md:text-7xl lg:text-8xl"
            />
            <p className="text-center text-lg font-medium text-white/88 md:text-xl">clientes ativos</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
