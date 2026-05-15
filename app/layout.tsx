import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brindes Personalizados e Camisetas para Empresas | MR & Mega Marca",
  description:
    "Solicite orçamento de brindes personalizados, camisetas, kits corporativos, sacochilas, canetas e chaveiros. Mais de 40 anos de tradição e atendimento para todo o Brasil conforme viabilidade.",
  keywords: [
    "brindes personalizados",
    "brindes para empresas",
    "brindes corporativos",
    "camisetas personalizadas",
    "uniformes personalizados",
    "canetas personalizadas",
    "chaveiros personalizados",
    "sacochilas personalizadas",
    "kits corporativos personalizados",
    "brindes para eventos",
    "produtos personalizados para empresas",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
