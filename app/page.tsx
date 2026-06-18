"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { QualificationModal } from "@/components/QualificationModal";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsappButton } from "@/components/WhatsappButton";
import { QualificationSource, pushDataLayer } from "@/lib/qualification";

const minimumOrderText = "Atendimento voltado para empresas, eventos e pedidos corporativos acima de 100 unidades.";

const products = [
  {
    title: "Chaveiros personalizados",
    product: "Chaveiros personalizados",
    desc: "Brindes úteis e duráveis para empresas, imobiliárias, concessionárias, eventos e campanhas promocionais.",
    id: "btn-whatsapp-chaveiros",
    category: "chaveiros",
    image: "/images/produtos/chaveiros.jpg",
    buttonLabel: "Orçar chaveiros personalizados",
    featured: true,
  },
  {
    title: "Canetas personalizadas",
    product: "Canetas personalizadas",
    desc: "Uma opção prática, acessível e de alta circulação para divulgar sua marca no dia a dia dos clientes.",
    id: "btn-whatsapp-canetas",
    category: "canetas",
    image: "/images/produtos/canetas.jpg",
    buttonLabel: "Orçar canetas personalizadas",
    featured: true,
  },
  {
    title: "Brindes personalizados para empresas",
    product: "Brindes personalizados",
    desc: "Produtos promocionais para ações comerciais, relacionamento com clientes, equipes e eventos corporativos.",
    id: "btn-whatsapp-brindes",
    category: "brindes",
    image: "/images/produtos/materiais-promocionais.jpg",
    buttonLabel: "Orçar brindes personalizados",
    featured: false,
  },
  {
    title: "Camisetas e uniformes personalizados",
    product: "Camisetas ou uniformes",
    desc: "Camisetas promocionais e uniformes para empresas, equipes, campanhas e eventos.",
    id: "btn-whatsapp-camisetas",
    category: "camisetas",
    image: "/images/produtos/camisetas.jpg",
    buttonLabel: "Orçar camisetas e uniformes",
    featured: false,
  },
  {
    title: "Sacochilas e materiais para eventos",
    product: "Sacochilas",
    desc: "Produtos personalizados para corridas, feiras, escolas, empresas e eventos corporativos.",
    id: "btn-whatsapp-sacochilas",
    category: "sacochilas",
    image: "/images/produtos/sacochilas.jpg",
    buttonLabel: "Orçar sacochilas personalizadas",
    featured: false,
  },
  {
    title: "Kits corporativos personalizados",
    product: "Kits corporativos",
    desc: "Combinações de brindes para clientes, colaboradores, eventos, ações comerciais e campanhas internas.",
    id: "btn-whatsapp-kits",
    category: "kits",
    image: "/images/produtos/kits-corporativos.jpg",
    buttonLabel: "Orçar kits corporativos",
    featured: false,
  },
];

const trustStats = [
  { title: "Mais de 40 anos", desc: "Tradição em produtos personalizados." },
  { title: "Atendimento B2B", desc: "Foco em empresas, eventos e ações promocionais." },
  { title: "Pedido acima de 100 unidades", desc: "Fluxo pensado para orçamento corporativo." },
  { title: "Orçamento pelo WhatsApp", desc: "Contato liberado após qualificação rápida." },
];

const steps = [
  { title: "Escolha o produto", desc: "Selecione o tipo de brinde, camiseta, kit ou material personalizado." },
  { title: "Informe a quantidade", desc: "Trabalhamos principalmente com pedidos corporativos acima de 100 unidades." },
  { title: "Preencha os detalhes", desc: "Informe cidade, prazo, finalidade e se já possui logo ou arte." },
  { title: "Siga para o WhatsApp", desc: "Após a qualificação, a mensagem é montada automaticamente para agilizar o atendimento." },
];

const otherProducts = [
  "Squeezes e garrafas personalizadas",
  "Calendários personalizados",
  "Materiais promocionais",
  "Uniformes corporativos",
  "Produtos para feiras e eventos",
  "Brindes para relacionamento com clientes",
];

const faqItems = [
  [
    "O orçamento é gratuito?",
    "Sim. Você pode solicitar seu orçamento gratuitamente pelo WhatsApp, informando o produto desejado, quantidade aproximada, cidade, prazo e detalhes da personalização.",
  ],
  [
    "Existe pedido mínimo?",
    "Sim. O atendimento é voltado para pedidos corporativos e quantidades maiores. O pedido mínimo pode variar conforme o produto, mas geralmente trabalhamos com pedidos acima de 100 unidades.",
  ],
  [
    "Vocês fazem apenas 1 unidade?",
    "Não trabalhamos com pedidos unitários. A MR Mega Marca atende empresas, eventos e ações promocionais com produção em maior quantidade.",
  ],
  [
    "Atendem pessoa física?",
    "O foco do atendimento é para empresas, equipes, eventos e campanhas promocionais. Casos específicos podem ser avaliados conforme produto, quantidade e viabilidade.",
  ],
  [
    "Preciso ter a arte pronta?",
    "Não necessariamente. Se você já tiver logo, arte ou referência, poderá informar isso no orçamento. Caso ainda não tenha, nossa equipe pode orientar sobre a melhor forma de personalização.",
  ],
  [
    "Quais produtos posso personalizar?",
    "Você pode solicitar orçamento para chaveiros, canetas, camisetas, uniformes, sacochilas, kits corporativos, brindes promocionais e outros materiais personalizados.",
  ],
] as const;

const businessAddress = "Tv. Zenun, 102 - Centro, Campestre - MG, 37730-000, Brazil";
const businessMapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;

export default function Home() {
  const [qualificationOpen, setQualificationOpen] = useState(false);
  const [qualificationSource, setQualificationSource] = useState<QualificationSource | null>(null);

  useEffect(() => {
    pushDataLayer({ event: "view_product_section", section: "produtos" });
  }, []);

  const openQualification = (source: QualificationSource) => {
    setQualificationSource(source);
    setQualificationOpen(true);
  };

  return (
    <main className="overflow-hidden">
      <SeoJsonLd />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="container-section flex h-20 items-center justify-between gap-3 sm:h-24">
          <a href="#top" className="min-w-0 flex-1 sm:flex-none" aria-label="Voltar ao início">
            <Image src="/images/logo-mr-mega-marca.png" alt="MR & Mega Marca - brindes personalizados" width={300} height={92} className="h-auto w-[180px] max-w-full sm:w-[260px]" priority />
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu principal">
            {[["Produtos", "produtos"], ["Como funciona", "como-funciona"], ["Tradição", "tradicao"], ["FAQ", "faq"]].map(([name, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-700 hover:text-brandBlue">{name}</a>
            ))}
          </nav>
          <WhatsappButton id="btn-whatsapp-header" category="geral" buttonLocation="header" label="Solicitar orçamento" className="btn-primary shrink-0 px-4 py-3 text-xs sm:px-6 sm:text-sm" onOpenQualification={openQualification} />
        </div>
      </header>

      <section id="top" className="bg-[#0D1E42] pt-28 text-white sm:pt-32">
        <div className="container-section grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-brandRed px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">Brindes personalizados para empresas</p>
            <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Brindes personalizados para empresas, eventos e ações promocionais
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
              Canetas, chaveiros, camisetas, sacochilas, kits corporativos e materiais promocionais com a sua marca. Atendimento voltado para pedidos corporativos acima de 100 unidades.
            </p>
            <p className="mt-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white">
              {minimumOrderText}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Mais de 40 anos de tradição", "Atendimento B2B", "Pedido acima de 100 unidades", "Orçamento pelo WhatsApp"].map((badge) => (
                <span key={badge} className="badge">{badge}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton id="btn-whatsapp-hero" category="geral" buttonLocation="hero" label="Solicitar orçamento" className="btn-primary" onOpenQualification={openQualification} />
              <a href="#produtos" className="btn-secondary">Ver produtos mais procurados</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-2">
              {products.slice(0, 4).map((product) => (
                <div key={`hero-${product.title}`} className="rounded-3xl bg-white p-3 text-slate-950 shadow-lg">
                  <Image src={product.image} alt={product.title} width={600} height={450} className="h-36 w-full rounded-2xl bg-slate-50 object-contain p-2" />
                  <p className="mt-3 text-sm font-black">{product.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="container-section py-16 sm:py-20">
        <div className="max-w-4xl">
          <h2 className="section-title">Produtos mais procurados para personalizar sua marca</h2>
          <p className="section-subtitle">Escolha uma das opções abaixo e solicite um orçamento qualificado.</p>
          <p className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-800">
            {minimumOrderText}
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className={`card card-hover flex h-full flex-col overflow-hidden ${product.featured ? "border-green-400 ring-2 ring-green-100" : ""}`}>
              <div className="relative flex h-64 items-center justify-center bg-slate-50 p-3">
                {product.featured ? <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">Mais procurado</span> : null}
                <Image src={product.image} alt={`${product.title} - produto personalizado para empresas e eventos`} width={1200} height={900} className="max-h-full w-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-extrabold text-slate-950" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{product.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{product.desc}</p>
                <div className="mt-auto pt-6">
                  <WhatsappButton
                    id={product.id}
                    category={product.category}
                    product={product.product}
                    buttonLocation="produtos"
                    label={product.buttonLabel}
                    className="btn-primary w-full"
                    onOpenQualification={openQualification}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="bg-slate-50 py-16 sm:py-20">
        <div className="container-section">
          <div className="max-w-4xl">
            <h2 className="section-title">Como funciona o orçamento</h2>
            <p className="section-subtitle">Um fluxo simples para evitar retrabalho e acelerar a resposta da equipe.</p>
            <p className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800">
              Antes do WhatsApp: {minimumOrderText}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="card p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brandRed text-sm font-black text-white">{index + 1}</span>
                <h3 className="mt-4 text-lg font-black text-slate-950" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <WhatsappButton id="btn-whatsapp-cta-intermediario" category="geral" buttonLocation="como-funciona" label="Solicitar orçamento" className="btn-primary" onOpenQualification={openQualification} />
          </div>
        </div>
      </section>

      <section id="tradicao" className="container-section py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-green-700">Tradição e confiança</p>
            <h2 className="section-title mt-3">Mais de 40 anos ajudando empresas a divulgarem suas marcas</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              A MR & Mega Marca atende empresas, eventos, equipes e ações promocionais com produtos personalizados, orientação comercial e foco em pedidos corporativos.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustStats.map((stat) => (
              <article key={stat.title} className="card p-5">
                <h3 className="text-lg font-black text-slate-950" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{stat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{stat.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7F111B] py-14 text-white sm:py-16" aria-label="Outros produtos disponíveis">
        <div className="container-section">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Outros produtos disponíveis</h2>
            <p className="mt-4 text-red-50">Além dos itens mais procurados, você pode solicitar orçamento para outras opções personalizadas conforme produto, quantidade e viabilidade.</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {otherProducts.map((item) => (
              <span key={item} className="rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/20">{item}</span>
            ))}
          </div>
          <div className="mt-8">
            <WhatsappButton id="btn-whatsapp-outros-produtos" category="outro-produto" product="Outro produto" buttonLocation="outros-produtos" label="Solicitar orçamento" className="btn-primary" onOpenQualification={openQualification} />
          </div>
        </div>
      </section>

      <section id="faq" className="container-section py-16 sm:py-20">
        <div className="max-w-4xl">
          <h2 className="section-title">Perguntas frequentes</h2>
          <p className="section-subtitle">Respostas rápidas para alinhar expectativa antes do orçamento.</p>
        </div>
        <div className="mt-8 space-y-3">
          {faqItems.map(([question, answer]) => (
            <details key={question} className="card p-5">
              <summary className="cursor-pointer text-base font-bold text-slate-950">{question}</summary>
              <p className="mt-3 leading-relaxed text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-[#0D1E42] py-16 text-white sm:py-20">
        <div className="container-section text-center">
          <h2 className="section-title-light">Solicite um orçamento qualificado para sua empresa ou evento</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">Preencha o questionário rápido e siga para o WhatsApp com as informações que a equipe precisa para atender melhor.</p>
          <p className="mx-auto mt-4 max-w-2xl rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white">{minimumOrderText}</p>
          <div className="mt-8">
            <WhatsappButton id="btn-whatsapp-final" category="geral" buttonLocation="cta-final" label="Solicitar orçamento agora" className="btn-primary" onOpenQualification={openQualification} />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-12 text-slate-950">
        <div className="container-section grid gap-8 md:grid-cols-2">
          <div>
            <Image src="/images/logo-mr-mega-marca.png" alt="MR & Mega Marca - fornecedor de brindes personalizados" width={260} height={80} className="h-auto w-[220px]" />
            <p className="mt-4 max-w-lg text-slate-700">Brindes, camisetas, uniformes e materiais personalizados para empresas, eventos e ações promocionais.</p>
            <a href={businessMapSearchUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700">Abrir localização no Google Maps</a>
          </div>
          <div className="text-sm text-slate-800">
            <p><strong>Endereço:</strong> Tv. Zenun, 102 - Centro, Campestre - MG</p>
            <p><strong>WhatsApp:</strong> 35 3743 1554</p>
            <p><strong>Domínio:</strong> www.mrmegamarca.com.br</p>
            <p><strong>CNPJ:</strong> 09.633.083/0001-20</p>
            <div className="mt-4 flex flex-wrap gap-4 font-semibold text-slate-900">
              {[["Produtos", "produtos"], ["Como funciona", "como-funciona"], ["FAQ", "faq"], ["Contato", "contato"]].map(([name, id]) => (
                <a key={id} href={`#${id}`} className="hover:text-green-700">{name}</a>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} MR & Mega Marca. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50">
        <WhatsappButton id="btn-whatsapp-flutuante" category="geral" buttonLocation="flutuante" label="Orçamento pelo WhatsApp" onOpenQualification={openQualification} />
      </div>

      <QualificationModal isOpen={qualificationOpen} source={qualificationSource} onClose={() => setQualificationOpen(false)} />
    </main>
  );
}
