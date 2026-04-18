"use client";

type Item = {
  title: string;
  body: string;
  pos: string;
};

const items: Item[] = [
  {
    title: "Assessoria Contábil",
    body:
      "Com a Contabilidade São José, você recebe assessoria contábil completa, com suporte financeiro, fiscal e análises estratégicas para crescimento do negócio.",
    pos: "lg:col-span-2 lg:col-start-1",
  },
  {
    title: "Abertura de Empresas",
    body:
      "A Contabilidade São José oferece abertura de empresas, cuidando de todos os trâmites legais para garantir que seu negócio comece regularizado e pronto para operar.",
    pos: "lg:col-span-2 lg:col-start-3",
  },
  {
    title: "Assessoria Fiscal",
    body:
      "A Contabilidade São José oferece assessoria fiscal, garantindo conformidade com a legislação, redução de riscos e eficiência tributária.",
    pos: "lg:col-span-2 lg:col-start-5",
  },
  {
    title: "Departamento Pessoal",
    body:
      "A Contabilidade São José oferece serviços completos de departamento pessoal, garantindo processos trabalhistas corretos e dentro da lei.",
    pos: "lg:col-span-2 lg:col-start-2",
  },
  {
    title: "Encerramento de Empresas",
    body:
      "A Contabilidade São José realiza o encerramento empresarial de forma correta, evitando pendências fiscais e burocráticas.",
    pos: "lg:col-span-2 lg:col-start-4",
  },
];

export default function ServicosStaggered() {
  return (
    <section id="servicos" className="section-shell bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--accent-soft)]">Serviços</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Soluções contábeis pensadas para sustentar cada fase da empresa.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
            Do início da operação à rotina mensal, a Contabilidade São José oferece suporte completo para
            manter sua empresa organizada e segura.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {items.map((it, idx) => (
            <article
              key={idx}
              className={`rounded-[2rem] border border-white/10 bg-white/6 p-7 text-left shadow-[0_20px_80px_rgba(2,8,23,.3)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:shadow-[0_35px_120px_rgba(15,23,42,0.45)] ${it.pos}`}
            >
              <div className="mb-6 h-10 w-10 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/12" />
              <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">{it.title}</h3>
              <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
