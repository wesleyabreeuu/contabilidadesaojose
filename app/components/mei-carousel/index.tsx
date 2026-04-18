"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  id: string;
  title: string;
};

const slides: Slide[] = [
  { id: "mei-atrasado", title: "Regularizar seu MEI sem deixar a pendência crescer." },
  { id: "abertura", title: "Abrir sua empresa com direção desde o primeiro passo." },
  { id: "erros-mei", title: "Evitar os erros que mais travam o crescimento do MEI." },
  { id: "declaracao", title: "Declarar o MEI no prazo com orientação e tranquilidade." },
];

const HOLD_MS = 1800;
const TYPE_MS = 52;
const DELETE_MS = 28;

function useTypewriter(values: string[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!values.length) return;

    const currentValue = values[activeIndex];

    if (!isDeleting && visibleText === currentValue) {
      const timeout = window.setTimeout(() => setIsDeleting(true), HOLD_MS);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && visibleText.length === 0) {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setActiveIndex((current) => (current + 1) % values.length);
      }, DELETE_MS);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      if (isDeleting) {
        setVisibleText(currentValue.slice(0, Math.max(visibleText.length - 1, 0)));
        return;
      }

      setVisibleText(currentValue.slice(0, visibleText.length + 1));
    }, isDeleting ? DELETE_MS : TYPE_MS);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, isDeleting, values, visibleText]);

  return { activeIndex, visibleText };
}

export default function MeiCarousel() {
  const titles = useMemo(() => slides.map((slide) => slide.title), []);
  const { activeIndex, visibleText } = useTypewriter(titles);

  return (
    <section className="bg-[var(--background)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-base leading-7 uppercase tracking-[0.18em] text-[var(--muted-strong)] sm:text-lg">
          SÓ NA CONTABILIDADE SÃO JOSÉ É POSSÍVEL:
        </p>

        <div className="mx-auto mt-8 min-h-[7.5rem] max-w-4xl sm:min-h-[9rem]">
          <h2 className="inline text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl lg:text-[3.7rem]">
            {visibleText}
          </h2>
          <span className="ml-2 inline-block h-[0.95em] w-[0.14em] translate-y-1 rounded-full bg-[var(--accent-deep)] align-baseline animate-[pulse_1s_ease-in-out_infinite]" />
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <span
                key={slide.id}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "w-10 bg-[var(--accent-deep)]" : "w-2.5 bg-[var(--foreground)]/18"
                }`}
                aria-hidden
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
