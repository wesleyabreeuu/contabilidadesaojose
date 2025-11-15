"use client";

import React, { useEffect, useRef, useState } from "react";

/* ==== helper: dispara apenas uma vez quando entra na viewport ==== */
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

/* ==== contador de 0 até “to” ==== */
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

/* ==== título: primeira palavra branca, restante azul ==== */
function TitleTwoTone({ text }: { text: string }) {
  const parts = text.trim().split(/\s+/);
  const first = parts.slice(0, 2).join(" "); // “Números da”
  const rest = parts.slice(2).join(" ");      // “Contabilidade”
  return (
    <h2 className="mb-14 text-center text-4xl md:text-5xl font-extrabold tracking-tight">
      <span className="text-white">{first} </span>
      <span className="text-blue-600">{rest}</span>
    </h2>
  );
}

/* ==== seção principal ==== */
export default function Experiencia() {
  return (
    <section id="numeros" className="w-full bg-black py-16">
      <div className="mx-auto max-w-6xl px-4">
        <TitleTwoTone text="Números da Contabilidade" />

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Card 1 */}
          <li className="group rounded-3xl border border-blue-600/20 bg-[#0b0f17] p-12 lg:p-14 min-h-[360px] flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_18px_55px_rgba(37,99,235,0.35)] hover:ring-2 hover:ring-blue-600/50">
            <Counter
              to={15}
              className="mb-3 block font-extrabold text-blue-500 tracking-tight text-6xl md:text-7xl lg:text-8xl"
            />
            <p className="text-white/90 font-bold text-lg md:text-xl">
              anos de experiência
            </p>
          </li>

          {/* Card 2 */}
          <li className="group rounded-3xl border border-blue-600/20 bg-[#0b0f17] p-12 lg:p-14 min-h-[360px] flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_18px_55px_rgba(37,99,235,0.35)] hover:ring-2 hover:ring-blue-600/50">
            <Counter
              to={300}
              className="mb-3 block font-extrabold text-blue-500 tracking-tight text-6xl md:text-7xl lg:text-8xl"
            />
            <p className="text-white/90 font-bold text-lg md:text-xl">
              clientes atendidos
            </p>
          </li>

          {/* Card 3 */}
          <li className="group rounded-3xl border border-blue-600/20 bg-[#0b0f17] p-12 lg:p-14 min-h-[360px] flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_18px_55px_rgba(37,99,235,0.35)] hover:ring-2 hover:ring-blue-600/50">
            <Counter
              to={100}
              className="mb-3 block font-extrabold text-blue-500 tracking-tight text-6xl md:text-7xl lg:text-8xl"
            />
            <p className="text-white/90 font-bold text-lg md:text-xl">
              clientes ativos
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
