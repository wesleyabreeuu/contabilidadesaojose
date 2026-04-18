import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--surface)] py-8 text-white">
      <div className="container mx-auto text-center leading-relaxed">
        <p className="text-sm">© 2025 Contabilidade São José. Todos os direitos reservados.</p>
        <p className="mt-1 text-sm opacity-80">
          Produzido por <span className="font-semibold">Wesley Abreu Soluções Digitais</span>
        </p>
      </div>
    </footer>
  );
}
