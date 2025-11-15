import Image from "next/image";
import React from "react";

// Tipos
export type TeamMember = {
  name: string;
  role: string;
  photoUrl?: string;
};

export interface TeamGridProps {
  teamName: string; // ex.: "Nossa Equipe"
  members?: TeamMember[];
  className?: string;
}

// Util: iniciais para fallback do avatar
function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

// Quebra o título na 1ª palavra (preta) e o resto (azul)
function splitTitle(title: string): [string, string] {
  const parts = title.trim().split(/\s+/); // <-- CORRETO: \s (não \\s)
  if (parts.length <= 1) return [title, ""];
  return [parts[0]!, parts.slice(1).join(" ")];
}

// Componente Next/React + Tailwind
export default function TeamGrid({ teamName, members = [], className }: TeamGridProps) {
  const list = Array.isArray(members) ? members.slice(0, 4) : [];
  const [first, rest] = splitTitle(teamName);

  return (
    <section id="equipe" className={`w-full bg-white py-16 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl px-4">
        
        <h2 className="mb-14 text-center text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-slate-900">{first}</span>
          {rest && <span className="text-blue-600"> {rest}</span>}
        </h2>

        
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((m, i) => (
            <div
              key={i}
              className="group bg-gray-100/90 border border-slate-200 rounded-3xl p-10 min-h-[380px] flex flex-col items-center justify-start transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(37,99,235,0.30)] hover:ring-1 hover:ring-blue-600/40"
            >
              
              {m.photoUrl ? (
                <div className="relative h-40 w-40 lg:h-44 lg:w-44 overflow-hidden rounded-full ring-4 ring-blue-600/70 shadow-[0_12px_40px_rgba(37,99,235,0.35)] group-hover:ring-blue-600">
                  <Image
                    src={m.photoUrl}
                    alt={m.name}
                    width={176}
                    height={176}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="relative h-40 w-40 lg:h-44 lg:w-44 rounded-full bg-blue-50 ring-4 ring-blue-600/70 shadow-[0_12px_40px_rgba(37,99,235,0.35)] flex items-center justify-center group-hover:ring-blue-600">
                  <span className="text-3xl font-semibold text-blue-600">
                    {getInitials(m.name)}
                  </span>
                </div>
              )}

              
              <div className="mt-7 text-center">
                <p className="text-xl font-semibold text-blue-600 leading-tight">{m.name}</p>
                <p className="text-base md:text-lg font-extrabold text-slate-900">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        
        {list.length < 4 && (
          <p className="mt-8 text-center text-xs text-slate-400">
            Dica: passe exatamente 4 membros no prop <code>members</code> para preencher todos os cards.
          </p>
        )}
      </div>
    </section>
  );
}
