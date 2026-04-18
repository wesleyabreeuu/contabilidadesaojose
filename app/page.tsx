import HeroAnimated from "./components/hero";
import MeiCarousel from "./components/mei-carousel";
import QuemSomos from "./components/quem-somos";
import ServicesSection from "./components/servicos";
import TeamGrid, { TeamMember } from "./components/equipe";
import Experiencia from "./components/card-exp";
import Contato from "./components/contato";

const equipe: TeamMember[] = [
  { name: "Clovis", role: "CEO e Contador • CRC RJ", photoUrl: "/img/team/clovis.jpeg" },
  { name: "Tamyres", role: "Departamento Pessoal", photoUrl: "/img/team/tamyres.jpeg" },
  { name: "Guilherme", role: "Contábil e Fiscal", photoUrl: "/img/team/guilherme.jpeg" },
  { name: "Barbara", role: "Estagiária", photoUrl: "/img/team/barbara.jpeg" },
];

const pillars = [
  {
    eyebrow: "Abertura e regularização",
    title: "Cuidamos da burocracia para você focar no negócio.",
    text: "Abrimos, enquadramos e organizamos sua empresa com clareza em cada etapa, reduzindo erros e acelerando o início da operação.",
  },
  {
    eyebrow: "Fiscal e contábil",
    title: "Rotina contábil com acompanhamento próximo, não só entrega de guia.",
    text: "Você recebe suporte contínuo para obrigações, conformidade e leitura dos números da empresa com linguagem acessível.",
  },
  {
    eyebrow: "Departamento pessoal",
    title: "Processos trabalhistas bem executados para dar segurança ao dia a dia.",
    text: "Folha, admissões, rescisões e orientações trabalhistas conduzidas com agilidade e responsabilidade.",
  },
];

const faqs = [
  {
    question: "Vocês atendem apenas empresas de Valença?",
    answer:
      "Não. A Contabilidade São José mantém presença local forte em Valença, mas pode atender empresas da região e em diferentes formatos de operação.",
  },
  {
    question: "Posso abrir empresa com apoio de vocês?",
    answer:
      "Sim. A equipe cuida do processo de abertura, enquadramento e orientações iniciais para que sua empresa comece regularizada.",
  },
  {
    question: "Vocês também fazem departamento pessoal?",
    answer:
      "Sim. A estrutura inclui rotinas de folha, admissões, rescisões e acompanhamento trabalhista para dar mais segurança à operação.",
  },
];

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <HeroAnimated />
      <MeiCarousel />
      <QuemSomos />

      <section className="section-shell bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--surface-strong)] p-8 shadow-[0_30px_120px_rgba(2,8,23,0.38)] sm:p-10">
            <span className="section-kicker">Por que escolher a São José</span>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Uma contabilidade que combina proximidade, experiência e execução cuidadosa.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              A proposta aqui não é só manter sua empresa em dia. É construir uma operação mais organizada,
              previsível e segura, com atendimento humano e resposta rápida quando você precisa.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-7 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
                Atendimento próximo
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                Você fala com quem entende o seu momento e responde com clareza.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-7 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
                Estrutura completa
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                Contábil, fiscal e departamento pessoal trabalhando de forma integrada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="section-shell bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="section-kicker text-[var(--accent)]">Como ajudamos</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Uma estrutura pensada para simplificar decisões e proteger o crescimento da sua empresa.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)]"
              >
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted-strong)]">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Experiencia />
      <TeamGrid teamName="Nossa Equipe" members={equipe} />

      <section className="section-shell bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--surface-strong)] p-8 shadow-[0_30px_120px_rgba(2,8,23,0.38)] sm:p-10">
            <span className="section-kicker">Dúvidas frequentes</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Transparência para deixar a contratação mais simples.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              Reunimos respostas objetivas sobre atendimento, abertura de empresa e rotinas fiscais para
              facilitar sua decisão.
            </p>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contato />
    </main>
  );
}
