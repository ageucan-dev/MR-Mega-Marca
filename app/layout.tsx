import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

const siteUrl = "https://www.mrmegamarca.com.br";
const siteName = "MR & Mega Marca";
const siteDescription =
  "Solicite orçamento de brindes personalizados, camisetas, uniformes, kits corporativos, canetas, chaveiros, sacochilas, squeezes e materiais promocionais. Mais de 40 anos de tradição e atendimento para todo o Brasil conforme viabilidade.";

const googleTagManagerId = "GTM-5LD5XRJ8";
const googleAnalyticsId = "G-M5RPH0J2VK";
const googleAdsId = "AW-605650165";

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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`}
        </Script>
        <Script
          id="google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-and-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');
gtag('config', '${googleAdsId}');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
