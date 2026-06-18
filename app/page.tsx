"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AudienceSection } from "@/components/AudienceSection";
import { BannerCarousel } from "@/components/BannerCarousel";
import { QualificationModal } from "@/components/QualificationModal";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { WhatsappButton } from "@/components/WhatsappButton";
import { pushDataLayer } from "@/lib/qualification";
import type { QualificationSource } from "@/lib/qualification";

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

const stats = [
  { title: "40+ anos de mercado", desc: "Tradição em produtos personalizados." },
  { title: "Empresas e eventos", desc: "Soluções para ações corporativas." },
  { title: "Personalização sob medida", desc: "Orientação conforme objetivo e quantidade." },
  { title: "Pedido acima de 100 unidades", desc: "Atendimento focado em demandas corporativas." },
];

const steps = [
  { title: "Escolha o produto", desc: "Selecione o tipo de brinde, camiseta, kit ou material personalizado." },
  { title: "Informe a quantidade", desc: "Trabalhamos principalmente com pedidos corporativos acima de 100 unidades." },
  { title: "Preencha os detalhes", desc: "Informe cidade, prazo, finalidade e se já possui logo ou arte." },
  { title: "Siga para o WhatsApp", desc: "Após a qualificação, a mensagem é montada automaticamente para agilizar o atendimento." },
];

const faqItems = [
  ["O orçamento é gratuito?", "Sim. Você pode solicitar seu orçamento gratuitamente pelo WhatsApp, informando o produto desejado, quantidade aproximada, cidade, prazo e detalhes da personalização."],
  ["Existe pedido mínimo?", "Sim. O atendimento é voltado para pedidos corporativos e quantidades maiores. O pedido mínimo pode variar conforme o produto, mas geralmente trabalhamos com pedidos acima de 100 unidades."],
  ["Vocês fazem apenas 1 unidade?", "Não trabalhamos com pedidos unitários. A MR Mega Marca atende empresas, eventos e ações promocionais com produção em maior quantidade."],
  ["Atendem pessoa física?", "O foco do atendimento é para empresas, equipes, eventos e campanhas promocionais. Casos específicos podem ser avaliados conforme produto, quantidade e viabilidade."],
  ["Preciso ter a arte pronta?", "Não necessariamente. Se você já tiver logo, arte ou referência, poderá informar isso no orçamento. Caso ainda não tenha, nossa equipe pode orientar sobre a melhor forma de personalização."],
  ["Quais produtos posso personalizar?", "Você pode solicitar orçamento para chaveiros, canetas, camisetas, uniformes, sacochilas, kits corporativos, brindes promocionais e outros materiais personalizados."],
] as const;

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
            {[["Produtos", "produtos"], ["Como funciona", "como-funciona"], ["FAQ", "faq"], ["Contato", "contato"]].map(([name, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-700 hover:text-brandBlue">{name}</a>
            ))}
          </nav>
          <WhatsappButton id="btn-whatsapp-header" category="geral" buttonLocation="header" label="Solicitar orçamento" className="btn-primary shrink-0 px-4 py-3 text-xs sm:px-6 sm:text-sm" onOpenQualification={openQualification} />
        </div>
      </header>

      <div className="pt-20 sm:pt-24">
        <BannerCarousel />
      </div>

      <section id="top" className="bg-[#0D1E42] text-white">
        <div className="container-section py-14 lg:py-20">
          <div className="max-w-5xl">
            <p className="mb-4 inline-flex rounded-full bg-brandRed px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">Brindes personalizados para empresas</p>
            <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Brindes personalizados para empresas, eventos e ações promocionais
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
              Canetas, chaveiros, camisetas, sacochilas, kits corporativos e materiais promocionais com a sua marca. Atendimento voltado para pedidos corporativos acima de 100 unidades.
            </p>
            <p className="mt-4 max-w-3xl rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white">
              {minimumOrderText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton id="btn-whatsapp-hero" category="geral" buttonLocation="hero" label="Solicitar orçamento" className="btn-primary" onOpenQualification={openQualification} />
              <a href="#produtos" className="btn-secondary">Ver produtos mais procurados</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-8" aria-label="Diferenciais da MR & Mega Marca">
        <div className="container-section">
          <div className="mb-3 flex items-center justify-between lg:hidden">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Arraste para o lado</p>
            <span className="text-xl text-green-600" aria-hidden="true">→</span>
          </div>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {stats.map((stat, index) => (
              <article key={stat.title} className="card flex min-h-[132px] min-w-[78%] snap-center flex-col justify-center px-5 py-6 text-left sm:min-w-[46%] lg:min-w-0 lg:text-center">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-black text-white lg:mx-auto">{index + 1}</span>
                <h2 className="text-lg font-black leading-tight text-slate-950" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{stat.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{stat.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="produtos" className="container-section py-16 sm:py-20">
        <div className="max-w-4xl">
          <h2 className="section-title">Produtos mais procurados para personalizar sua marca</h2>
          <p className="section-subtitle">Escolha uma das opções abaixo e solicite um orçamento qualificado.</p>
          <p className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-800">{minimumOrderText}</p>
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
                  <WhatsappButton id={product.id} category={product.category} product={product.product} buttonLocation="produtos" label={product.buttonLabel} className="btn-primary w-full" onOpenQualification={openQualification} />
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
            <p className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800">Antes do WhatsApp: {minimumOrderText}</p>
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

      <AudienceSection />
      <TestimonialsCarousel />

      <section id="faq" className="container-section py-16 sm:py-20">
        <h2 className="section-title">Perguntas frequentes</h2>
        <p className="section-subtitle">{minimumOrderText}</p>
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

      <SiteFooter />

      <div className="fixed bottom-5 right-5 z-50">
        <WhatsappButton id="btn-whatsapp-flutuante" category="geral" buttonLocation="flutuante" label="Orçamento pelo WhatsApp" onOpenQualification={openQualification} />
      </div>

      <QualificationModal isOpen={qualificationOpen} source={qualificationSource} onClose={() => setQualificationOpen(false)} />
    </main>
  );
}
