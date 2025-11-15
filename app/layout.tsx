import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import HeroAnimated from "./components/hero"; 
import QuemSomos from "./components/quem-somos";
import ServicesSection from "./components/servicos";
import Contato from "./components/contato";
import Footer from "./components/footer";


import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contabilidade São José",
  description: "Contabilidade São José - Serviços contábeis de qualidade",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <HeroAnimated />
        <QuemSomos />
        <ServicesSection />
        {children}
        <Contato />
        <Footer />
      </body>
    </html>
  );
}
