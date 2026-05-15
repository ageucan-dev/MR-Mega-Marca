import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mrmegamarca.com.br"),
  title: "Brindes Personalizados para Empresas | MR & Mega Marca",
  description:
    "Solicite orçamento de brindes personalizados, camisetas, uniformes, kits corporativos, canetas, chaveiros e materiais promocionais. Mais de 40 anos de tradição e atendimento para todo o Brasil conforme viabilidade.",
  keywords: [
    "brindes personalizados",
    "brindes para empresas",
    "brindes corporativos",
    "camisetas personalizadas",
    "uniformes personalizados",
    "kits corporativos",
    "canetas personalizadas",
    "chaveiros personalizados",
    "sacochilas personalizadas",
    "brindes para eventos",
  ],
  openGraph: {
    title: "Brindes Personalizados para Empresas | MR & Mega Marca",
    description:
      "Fornecedor de brindes e produtos personalizados para empresas, eventos e ações promocionais.",
    url: "https://www.mrmegamarca.com.br",
    siteName: "MR & Mega Marca",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.mrmegamarca.com.br" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
