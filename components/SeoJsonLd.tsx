export function SeoJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mrmegamarca.com.br/#business",
    name: "MR & Mega Marca",
    alternateName: ["MR Silk-Screen", "Mega Marca"],
    url: "https://www.mrmegamarca.com.br",
    logo: "https://www.mrmegamarca.com.br/images/logo-mr-mega-marca.png",
    image: "https://www.mrmegamarca.com.br/images/logo-mr-mega-marca.png",
    description:
      "Fornecedor de brindes personalizados, camisetas, uniformes, kits corporativos, canetas, chaveiros, sacochilas, squeezes e materiais promocionais para empresas, eventos e ações comerciais.",
    telephone: "+55 35 98864-0064",
    taxID: "09.633.083/0001-20",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Poços de Caldas",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -21.7041768,
      longitude: -46.2528365,
    },
    sameAs: ["https://maps.app.goo.gl/WfBRajnkMXNdayLn8"],
    makesOffer: [
      "Brindes personalizados",
      "Camisetas personalizadas",
      "Uniformes personalizados",
      "Kits corporativos personalizados",
      "Canetas personalizadas",
      "Chaveiros personalizados",
      "Sacochilas personalizadas",
      "Squeezes e garrafas personalizadas",
      "Materiais promocionais",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.mrmegamarca.com.br/#website",
    url: "https://www.mrmegamarca.com.br",
    name: "MR & Mega Marca",
    inLanguage: "pt-BR",
    publisher: {
      "@id": "https://www.mrmegamarca.com.br/#business",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O orçamento é gratuito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O orçamento é gratuito e feito pelo WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Existe pedido mínimo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Varia conforme o produto e o tipo de personalização.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês atendem quais regiões?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atendemos todo o Brasil, conforme viabilidade do pedido.",
        },
      },
      {
        "@type": "Question",
        name: "Quais produtos posso personalizar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brindes, kits, camisetas, uniformes, canetas, chaveiros, squeezes, garrafas e outros materiais promocionais.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://www.mrmegamarca.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Produtos personalizados",
        item: "https://www.mrmegamarca.com.br/#produtos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Orçamento",
        item: "https://www.mrmegamarca.com.br/#contato",
      },
    ],
  };

  return (
    <>
      {[organizationSchema, websiteSchema, faqSchema, breadcrumbSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
