import React from "react";

export default function Experiencia() {
  const endereco =
    "R. Cel. Leite Pinto, 88 - Sala 05 - Centro, Valença - RJ, 27600-126";
  const mapsShareUrl = "https://maps.app.goo.gl/fFQ14rFpLoLG7KjP9";
  const mapsEmbedSrc =
    "https://www.google.com/maps?&q=" + encodeURIComponent(endereco) + "&output=embed";

  // telefone/whatsapp da contabilidade
  const phoneDisplay = "(24) 98132-6908";
  const phoneTel = "tel:+5524981326908";
  const waUrl =
    "https://wa.me/5524981326908?text=Ol%C3%A1%20Contabilidade%20S%C3%A3o%20Jos%C3%A9,%20vim%20pelo%20site.";

  return (
    <section id="contato" className="mb-32">
      {/* MAPA */}
      <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
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

      {/* CARD CENTRALIZADO */}
      <div className="px-6 md:px-12">
        <div className="mx-auto -mt-[100px] max-w-4xl rounded-xl border border-gray-300 bg-[hsla(0,0%,100%,0.85)] backdrop-blur-[30px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="p-6 md:p-12">

            {/* TÍTULO DO QUADRO */}
            <h2 className="text-2xl font-bold text-center mb-8 text-neutral-800">
              Contato
            </h2>

            {/* ENDEREÇO */}
            <div className="mb-6">
              <p className="font-semibold">Endereço:</p>
              <p className="text-neutral-700">{endereco}</p>
            </div>

            {/* TELEFONE / WHATSAPP */}
            <div className="mb-6">
              <p className="font-semibold">Telefone / WhatsApp:</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href={phoneTel} className="text-sky-600 hover:underline">
                  {phoneDisplay}
                </a>
                <span className="text-neutral-400">•</span>
                <a href={waUrl} target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">
                  Abrir conversa no WhatsApp
                </a>
              </div>
            </div>

            {/* HORÁRIOS */}
            <div className="mb-8">
              <p className="font-semibold mb-2">Horário de funcionamento:</p>
              <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 text-neutral-700">
                <span>segunda-feira</span><span>08:00–17:00</span>
                <span>terça-feira</span><span>08:00–17:00</span>
                <span>quarta-feira</span><span>08:00–17:00</span>
                <span>quinta-feira</span><span>08:00–17:00</span>
                <span>sexta-feira</span><span>08:00–17:00</span>
              </div>
            </div>

            {/* BOTÕES CENTRALIZADOS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={mapsShareUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-white font-medium hover:brightness-110 transition"
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
                className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-white font-medium hover:brightness-110 transition"
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
