// app/page.tsx (ou onde você preferir renderizar a seção)
import TeamGrid, { TeamMember } from "./components/equipe";
import Experiencia from "./components/card-exp"; // ou "./components/experiencia"


const equipe: TeamMember[] = [
  { name: "Clovis",   role: "CEO e Contador • CRC RJ",        photoUrl: "/img/team/clovis.jpeg" },
  { name: "Tamyres",  role: "Departamento Pessoal",      photoUrl: "/img/team/tamyres.jpeg" },
  { name: "Guilherme", role: "Contábil e Fiscal",           photoUrl: "/img/team/guilherme.jpeg" },
  { name: "Barbara", role: "Estagiária",                photoUrl: "/img/team/barbara.jpeg" },
];

export default function Page() {
  return (
    <>
      {/* ...suas outras seções */}
      <TeamGrid teamName="Nossa Equipe" members={equipe} />
      <Experiencia />
    </>
  );
}




