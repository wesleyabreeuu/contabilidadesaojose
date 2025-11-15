"use client";

type Item = {
  title: string;
  body: string;
  pos: string; // classes utilitárias de posição na grid
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
    <section id="servicos" className="bg-neutral-950 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Serviços <span className="text-blue-500">oferecidos</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {items.map((it, idx) => (
            <article
              key={idx}
              className={`
                rounded-2xl border border-white/5 bg-neutral-900/60 p-6 text-center 
                shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur 
                transition duration-300 
                hover:shadow-[0_0_25px_rgba(37,99,235,0.45)] 
                hover:scale-[1.03]
                ${it.pos}
              `}
            >
              <h3 className="mb-3 text-lg font-semibold text-white">
                <span className="block text-xl sm:text-2xl text-blue-500">
                  {it.title}
                </span>
              </h3>

              <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                {it.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


