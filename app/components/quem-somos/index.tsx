"use client";

export default function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="relative isolate bg-white py-16 sm:py-20"
      aria-labelledby="quem-somos-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <h2
          id="quem-somos-title"
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900"
        >
          Quem{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            somos
          </span>
        </h2>

        {/* Texto */}
        <div className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-2xl border border-black/[0.06] bg-white/80 p-6 sm:p-8 shadow-[0_10px_35px_-15px_rgba(15,23,42,0.15)]">

            <p className="text-lg leading-relaxed text-neutral-700">
              <strong className="font-semibold text-neutral-900">
                A <span className="text-blue-700">Contabilidade São José</span>
              </strong>{" "}
              oferece soluções contábeis completas e de qualidade para empresas
              de pequeno e médio porte em Valença - RJ e região. Fundada por{" "}
              <span className="font-medium text-neutral-900">
                Luís Clóvis do Nascimento
              </span>
              , que uniu 4 anos de experiência acadêmica como Professor
              Universitário e Pós-graduação em Finanças a{" "}
              <strong className="text-blue-700">15 anos de experiência</strong>{" "}
              no mercado.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              Nosso diferencial é o{" "}
              <strong className="text-blue-700">
                atendimento personalizado e especializado
              </strong>
              , pautado pela honestidade e pontualidade. Estamos comprometidos
              em agregar conhecimento e agilidade aos processos de gestão
              financeira do seu negócio.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              Busca uma contabilidade de confiança e experiente em Valença - RJ?
            </p>

            <p className="mt-2 text-lg leading-relaxed text-neutral-700">
              <span className="font-semibold text-neutral-900">
                Fale conosco
              </span>{" "}
              e garanta a{" "}
              <span className="font-semibold text-blue-700">
                melhor gestão para sua empresa!
              </span>
            </p>

            {/* Linha decorativa */}
            <div className="mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
