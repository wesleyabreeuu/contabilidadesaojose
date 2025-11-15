"use client";

import Image from "next/image";

export default function HeroAnimated() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950">
      {/* Fundo: gradientes discretos + vinheta */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,.18),transparent_60%)] blur-2xl" />
        <div className="absolute right-[-10rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,.14),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_120%,rgba(0,0,0,.65),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-24 lg:px-8">
        {/* Texto */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Você pode contar com a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              melhor contabilidade da região
            </span>{" "}
            auxiliando o crescimento da sua empresa.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-300">
            Gestão contábil moderna, segura e próxima do seu negócio.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Falar com a Contabilidade 🚀
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center rounded-xl border border-white/10 px-6 py-3 text-base font-semibold text-white/80 backdrop-blur transition hover:border-white/20 hover:text-white"
            >
              Ver serviços
            </a>
          </div>
        </div>

        {/* Logo em evidência */}
        <div className="mt-12 flex items-center justify-center lg:mt-0">
          <figure
            className="relative animate-float"
            aria-label="Logotipo Contabilidade São José"
          >
            {/* Glow/halo */}
            <div
              className="pointer-events-none absolute -inset-8 rounded-3xl opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(37,99,235,.35) 0%, rgba(37,99,235,0) 70%)",
              }}
            />

            {/* ✅ A LOGO (usar caminho do /public) */}
            <div className="relative rounded-2xl p-3 shadow-[0_10px_40px_rgba(0,0,0,.45)] ring-1 ring-white/5">
              <Image
                src="/logo.jpg"  
                alt="Logotipo Contabilidade São José"
                width={420}
                height={420}
                priority
                className="select-none rounded-xl object-contain drop-shadow-[0_0_30px_rgba(37,99,235,.45)]"
              />

              {/* Shimmer leve */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute -inset-1 -translate-x-full animate-shimmer bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.25),transparent)] mix-blend-screen" />
              </div>
            </div>
          </figure>
        </div>
      </div>

      {/* CSS local das animações */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-10deg); }
          100% { transform: translateX(100%) skewX(-10deg); }
        }
        .animate-shimmer { animation: shimmer 2.8s linear infinite; }
      `}</style>
    </section>
  );
}
