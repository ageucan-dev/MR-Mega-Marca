import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

const siteUrl = "https://www.mrmegamarca.com.br";
const siteName = "MR & Mega Marca";
const siteDescription =
  "Solicite orçamento de brindes personalizados, camisetas, uniformes, kits corporativos, canetas, chaveiros, sacochilas, squeezes e materiais promocionais. Mais de 40 anos de tradição e atendimento para todo o Brasil conforme viabilidade.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D1E42",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Brindes Personalizados para Empresas | MR & Mega Marca",
    template: "%s | MR & Mega Marca",
  },
  description: siteDescription,
  keywords: [
    "brindes personalizados",
    "brindes para empresas",
    "brindes corporativos",
    "brindes promocionais",
    "brindes personalizados para eventos",
    "camisetas personalizadas",
    "uniformes personalizados",
    "kits corporativos personalizados",
    "canetas personalizadas",
    "chaveiros personalizados",
    "sacochilas personalizadas",
    "squeezes personalizados",
    "garrafas personalizadas",
    "calendários personalizados",
    "silk screen",
    "impressão digital",
    "Mega Marca",
    "MR Silk-Screen",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Brindes personalizados e materiais promocionais",
  alternates: {
    canonical: siteUrl,
    languages: {
      "pt-BR": siteUrl,
    },
  },
  openGraph: {
    title: "Brindes Personalizados para Empresas | MR & Mega Marca",
    description:
      "Fornecedor de brindes personalizados, camisetas, uniformes, kits corporativos e materiais promocionais para empresas, eventos e ações comerciais.",
    url: siteUrl,
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo-mr-mega-marca.png",
        width: 1200,
        height: 630,
        alt: "MR & Mega Marca - Brindes personalizados para empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brindes Personalizados para Empresas | MR & Mega Marca",
    description:
      "Brindes, camisetas, kits corporativos, canetas, chaveiros, sacochilas e materiais promocionais com orçamento pelo WhatsApp.",
    images: ["/images/logo-mr-mega-marca.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BR-MG",
    "geo.placename": "Poços de Caldas, Minas Gerais",
    "geo.position": "-21.7041768;-46.2528365",
    ICBM: "-21.7041768, -46.2528365",
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
