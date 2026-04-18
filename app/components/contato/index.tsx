import React from "react";

export default function Contato() {
  const endereco = "R. Cel. Leite Pinto, 88 - Sala 05 - Centro, Valença - RJ, 27600-126";
  const mapsShareUrl = "https://maps.app.goo.gl/fFQ14rFpLoLG7KjP9";
  const mapsEmbedSrc =
    "https://www.google.com/maps?&q=" + encodeURIComponent(endereco) + "&output=embed";

  const phoneDisplay = "(24) 98132-6908";
  const phoneTel = "tel:+5524981326908";
  const waUrl =
    "https://wa.me/5524981326908?text=Olá%20Contabilidade%20São%20José,%20vim%20pelo%20site.";

  return (
    <section id="contato" className="section-shell mb-0 bg-[var(--background)] pt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--accent)]">Contato</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Vamos conversar sobre a rotina contábil da sua empresa.
          </h2>
        </div>
      </div>

      <div className="relative h-[320px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          title="Localização no Google Maps"
          src={mapsEmbedSrc}
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="px-6 md:px-12">
        <div className="mx-auto -mt-[110px] max-w-5xl rounded-[2rem] border border-[var(--line)] bg-[rgba(255,255,255,0.86)] shadow-[0_35px_120px_rgba(15,23,42,0.18)] backdrop-blur-[30px]">
          <div className="p-6 md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">Fale com a equipe</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[var(--muted-strong)]">
                  Estamos prontos para entender sua necessidade, orientar a melhor solução e organizar a
                  rotina da sua empresa com mais clareza.
                </p>
              </div>

              <div className="grid gap-6">
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Endereço</p>
                  <p className="mt-2 text-[var(--muted-strong)]">{endereco}</p>
                </div>

                <div>
                  <p className="font-semibold text-[var(--foreground)]">Telefone / WhatsApp</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <a href={phoneTel} className="text-[var(--accent-deep)] hover:underline">
                      {phoneDisplay}
                    </a>
                    <span className="text-neutral-400">•</span>
                    <a href={waUrl} target="_blank" rel="noreferrer" className="text-[var(--accent-deep)] hover:underline">
                      Abrir conversa no WhatsApp
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-[var(--foreground)]">Horário de funcionamento</p>
                  <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 text-[var(--muted-strong)]">
                    <span>segunda-feira</span><span>08:00–17:00</span>
                    <span>terça-feira</span><span>08:00–17:00</span>
                    <span>quarta-feira</span><span>08:00–17:00</span>
                    <span>quinta-feira</span><span>08:00–17:00</span>
                    <span>sexta-feira</span><span>08:00–17:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={mapsShareUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-slate-950 transition hover:brightness-110"
              >
                Abrir no Google Maps
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5H21m0 0v7.5M21 4.5l-9 9M15 9H6.75A2.25 2.25 0 004.5 11.25v6A2.25 2.25 0 006.75 19.5h6A2.25 2.25 0 0015 17.25V9z" />
                </svg>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-deep)] px-6 py-3 font-medium text-white transition hover:brightness-110"
              >
                Falar no WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l1.5-3A8 8 0 1112 20a8.4 8.4 0 01-4-1l-1 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
