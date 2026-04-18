import Image from "next/image";
import React from "react";

export type TeamMember = {
  name: string;
  role: string;
  photoUrl?: string;
};

export interface TeamGridProps {
  teamName: string;
  members?: TeamMember[];
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

function splitTitle(title: string): [string, string] {
  const parts = title.trim().split(/\s+/);
  if (parts.length <= 1) return [title, ""];
  return [parts[0]!, parts.slice(1).join(" ")];
}

export default function TeamGrid({ teamName, members = [], className }: TeamGridProps) {
  const list = Array.isArray(members) ? members.slice(0, 4) : [];
  const [first, rest] = splitTitle(teamName);

  return (
    <section id="equipe" className={`section-shell w-full bg-[var(--background)] ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--accent)]">Equipe</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <span className="text-[var(--foreground)]">{first}</span>
            {rest && <span className="text-[var(--accent)]"> {rest}</span>}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((m, i) => (
            <div
              key={i}
              className="group flex min-h-[380px] flex-col items-center justify-start rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(15,23,42,0.12)] hover:ring-1 hover:ring-[var(--accent)]/20"
            >
              {m.photoUrl ? (
                <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-[var(--accent)]/55 shadow-[0_18px_45px_rgba(15,23,42,0.15)] group-hover:ring-[var(--accent)] lg:h-44 lg:w-44">
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
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[var(--accent)]/10 ring-4 ring-[var(--accent)]/55 shadow-[0_18px_45px_rgba(15,23,42,0.15)] group-hover:ring-[var(--accent)] lg:h-44 lg:w-44">
                  <span className="text-3xl font-semibold text-[var(--accent)]">{getInitials(m.name)}</span>
                </div>
              )}

              <div className="mt-7 text-center">
                <p className="text-xl font-semibold leading-tight text-[var(--foreground)]">{m.name}</p>
                <p className="mt-2 text-base font-medium text-[var(--accent)] md:text-lg">{m.role}</p>
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
