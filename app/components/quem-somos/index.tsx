"use client";

export default function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="section-shell relative isolate bg-[var(--background)]"
      aria-labelledby="quem-somos-title"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--accent)]">Quem somos</p>
          <h2
            id="quem-somos-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl"
          >
            Tradição local com uma atuação contábil moderna e cuidadosa.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--muted-strong)]">
            A Contabilidade São José atende empresas de pequeno e médio porte em Valença - RJ e região,
            oferecendo suporte próximo para quem busca mais controle, conformidade e clareza na gestão.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:p-10">
          <div className="grid gap-6">
            <p className="text-lg leading-8 text-[var(--muted-strong)]">
              Fundada por <strong className="text-[var(--foreground)]">Luís Clóvis do Nascimento</strong>,
              a empresa reúne formação sólida, experiência acadêmica e mais de{" "}
              <strong className="text-[var(--accent)]">15 anos de atuação</strong> no mercado.
            </p>

            <p className="text-lg leading-8 text-[var(--muted-strong)]">
              O diferencial está no atendimento personalizado e especializado, pautado por honestidade,
              pontualidade e proximidade com a realidade de cada cliente.
            </p>

            <p className="text-lg leading-8 text-[var(--muted-strong)]">
              O objetivo é transformar a contabilidade em uma base de apoio real para o crescimento do
              negócio, trazendo mais agilidade aos processos e mais segurança para a tomada de decisão.
            </p>

            <div className="mt-2 h-px w-full bg-[linear-gradient(90deg,var(--accent),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
