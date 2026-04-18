"use client";

export default function HeroAnimated() {
  return (
    <section className="relative isolate overflow-x-hidden bg-[#07111f]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(32,168,255,0.72),transparent_34%),radial-gradient(circle_at_18%_20%,rgba(16,118,255,0.34),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(77,221,255,0.3),transparent_25%),linear-gradient(180deg,#1297ee_0%,#0a5eb6_30%,#07111f_72%,#05080d_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(0,0,0,0.02),rgba(0,0,0,0.72)_40%,rgba(0,0,0,0.96)_72%)]" />
        <div className="absolute left-1/2 top-0 h-[22rem] w-[70rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-10 pt-28 text-center sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-[6.1rem]">
          Sua empresa merece uma contabilidade a altura do proximo passo.
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-xl sm:leading-8">
          A Contabilidade Sao Jose une proximidade, clareza e execucao cuidadosa para transformar a rotina
          fiscal, contabil e trabalhista em uma base segura para crescer.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contato"
            className="inline-flex items-center rounded-[0.9rem] bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-white/92"
          >
            Falar com a equipe
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center rounded-[0.9rem] border border-white/14 bg-white/7 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/12"
          >
            Ver servicos
          </a>
        </div>
      </div>
    </section>
  );
}
