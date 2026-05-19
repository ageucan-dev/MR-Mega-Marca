"use client";

import Image from "next/image";
import { useEffect } from "react";
import { BannerCarousel } from "@/components/BannerCarousel";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { WhatsappButton } from "@/components/WhatsappButton";

const products = [
  { title: "Brindes Personalizados", desc: "Canetas, chaveiros, squeezes e materiais promocionais para divulgar sua marca.", bullets: ["Alta variedade", "Boa percepção de valor"], id: "btn-whatsapp-brindes", category: "brindes", image: "/images/produtos/materiais-promocionais.jpg" },
  { title: "Kits Corporativos Personalizados", desc: "Combinações para clientes, colaboradores, eventos e ações comerciais.", bullets: ["Curadoria consultiva", "Combinações sob medida"], id: "btn-whatsapp-kits", category: "kits", image: "/images/produtos/kits-corporativos.jpg" },
  { title: "Camisetas e Uniformes Personalizados", desc: "Camisetas promocionais e uniformes para empresas e equipes.", bullets: ["Identidade visual forte", "Conforto e durabilidade"], id: "btn-whatsapp-camisetas", category: "camisetas", image: "/images/produtos/camisetas.jpg" },
  { title: "Sacochilas e Materiais para Eventos", desc: "Soluções para feiras, corridas, escolas e eventos corporativos.", bullets: ["Excelente para ativações", "Praticidade logística"], id: "btn-whatsapp-sacochilas", category: "sacochilas", image: "/images/produtos/sacochilas.jpg" },
  { title: "Squeezes e Garrafas Personalizadas", desc: "Garrafas, squeezes e itens de uso diário para divulgar sua marca com alta visibilidade.", bullets: ["Uso recorrente", "Excelente para kits e eventos"], id: "btn-whatsapp-squeezes-garrafas", category: "squeezes-garrafas", image: "/images/produtos/squeezes-garrafas.jpg" },
  { title: "Canetas Personalizadas", desc: "Item acessível e efetivo para presença diária da sua marca.", bullets: ["Ótimo custo-benefício", "Alto volume"], id: "btn-whatsapp-canetas", category: "canetas", image: "/images/produtos/canetas.jpg" },
  { title: "Chaveiros Personalizados", desc: "Brindes úteis para relacionamento e lembrança constante da marca.", bullets: ["Duráveis", "Aplicação multissetorial"], id: "btn-whatsapp-chaveiros", category: "chaveiros", image: "/images/produtos/chaveiros.jpg" },
];

const stats = [
  { title: "40+ anos de mercado", desc: "Tradição em produtos personalizados." },
  { title: "Empresas e eventos", desc: "Soluções para ações corporativas." },
  { title: "Personalização sob medida", desc: "Orientação conforme objetivo e quantidade." },
  { title: "Todo o Brasil", desc: "Atendimento conforme viabilidade logística." },
];

const audienceItems = [
  { title: "Empresas e comércios", desc: "Brindes e materiais para relacionamento, divulgação local e presença de marca no dia a dia.", examples: ["Lojas", "Supermercados", "Clínicas", "Escritórios"] },
  { title: "Eventos e campanhas promocionais", desc: "Produtos para ações presenciais, ativações, feiras, corridas e campanhas sazonais.", examples: ["Corridas", "Feiras", "Lançamentos", "Datas comemorativas"] },
  { title: "Equipes e colaboradores", desc: "Uniformes, kits internos e itens de reconhecimento para fortalecer identidade e pertencimento.", examples: ["Uniformes", "Onboarding", "Kits internos", "Treinamentos"] },
  { title: "Escolas, clínicas e escritórios", desc: "Materiais personalizados para relacionamento, organização, campanhas internas e fidelização.", examples: ["Escolas", "Consultórios", "Advocacias", "Contabilidades"] },
  { title: "Associações, imobiliárias e seguradoras", desc: "Brindes úteis e duráveis para gerar lembrança de marca e fortalecer o contato com clientes.", examples: ["Imobiliárias", "Seguradoras", "Sindicatos", "Associações"] },
];

const steps = [
  "Escolha o produto que deseja personalizar",
  "Informe quantidade, prazo e cidade/estado",
  "Envie sua logo, arte ou referência",
  "Receba orientação e orçamento pelo WhatsApp",
];

const faqItems = [
  ["O orçamento é gratuito?", "Sim. O orçamento é gratuito e feito pelo WhatsApp."],
  ["Existe pedido mínimo?", "Sim. Varia conforme o produto e o tipo de personalização."],
  ["Preciso ter a arte pronta?", "Não. Se não tiver arte, orientamos a melhor forma de personalização."],
  ["Vocês atendem quais regiões?", "Atendemos todo o Brasil, conforme viabilidade do pedido."],
  ["Quais produtos posso personalizar?", "Brindes, kits, camisetas, uniformes, canetas, chaveiros, squeezes, garrafas e outros materiais promocionais."],
  ["Em quanto tempo recebo retorno?", "Com informações completas, o retorno costuma ser mais rápido."],
  ["Como recebo um orçamento mais preciso?", "Informe produto, quantidade, prazo, cidade/estado e se possui logo/arte."],
] as const;

const offerBenefits = [
  { title: "Orçamento gratuito", desc: "Envie produto, quantidade e prazo para receber uma orientação inicial pelo WhatsApp." },
  { title: "Condição para primeira compra", desc: "A equipe avalia a melhor condição conforme produto, quantidade e viabilidade do pedido." },
  { title: "Atendimento consultivo", desc: "Receba ajuda para escolher o item, tipo de personalização e melhor aplicação para sua ação." },
  { title: "Prazo promocional de 90 dias", desc: "Condição especial disponível por tempo limitado para novos orçamentos qualificados." },
];

const businessAddress = "Tv. Zenun, 102 - Centro, Campestre - MG, 37730-000, Brazil";
const businessMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(businessAddress)}&output=embed`;
const businessMapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;

export default function Home() {
  useEffect(() => {
    const w = window as Window & { dataLayer?: Array<Record<string, string>> };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "view_product_section", section: "produtos" });
  }, []);

  return (
    <main className="overflow-hidden">
      <SeoJsonLd />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="container-section flex h-20 items-center justify-between gap-3 sm:h-24">
          <a href="#top" className="min-w-0 flex-1 sm:flex-none">
            <Image src="/images/logo-mr-mega-marca.png" alt="MR & Mega Marca - brindes personalizados e impressão digital" width={300} height={92} className="h-auto w-[180px] max-w-full sm:w-[260px]" priority />
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Menu principal">
            {[["Produtos", "produtos"], ["Como Funciona", "como-funciona"], ["FAQ", "faq"]].map(([n, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-700 hover:text-brandBlue">{n}</a>
            ))}
          </nav>
          <WhatsappButton id="btn-whatsapp-header" category="geral" label="Solicitar Orçamento" className="btn-primary shrink-0 px-4 py-3 text-xs sm:px-6 sm:text-sm" />
        </div>
      </header>

      <div className="pt-20 sm:pt-24">
        <BannerCarousel />
      </div>

      <section id="top" className="bg-[#0D1E42] text-white">
        <div className="container-section py-14 lg:py-20">
          <div className="max-w-5xl">
            <p className="mb-4 inline-flex rounded-full bg-brandRed px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">Primeira compra com condição especial</p>
            <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Brindes personalizados para empresas, eventos e ações promocionais</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">Canetas, chaveiros, camisetas, kits, sacochilas e materiais personalizados com atendimento consultivo, orçamento gratuito e a tradição de quem atua há mais de 40 anos no mercado.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton id="btn-whatsapp-hero" category="geral" label="Solicitar orçamento no WhatsApp" className="btn-primary" />
              <a href="#produtos" className="btn-secondary">Ver produtos em destaque</a>
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
            {stats.map((s, index) => (
              <article key={s.title} className="card flex min-h-[132px] min-w-[78%] snap-center flex-col justify-center px-5 py-6 text-left sm:min-w-[46%] lg:min-w-0 lg:text-center">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-black text-white lg:mx-auto">{index + 1}</span>
                <h2 className="text-lg font-black leading-tight text-slate-950" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-1 flex justify-center gap-2 lg:hidden" aria-hidden="true">
            {stats.map((s) => <span key={`dot-${s.title}`} className="h-1.5 w-6 rounded-full bg-slate-300" />)}
          </div>
        </div>
      </section>

      <section id="produtos" className="container-section py-16 sm:py-20">
        <h2 className="section-title">Escolha o produto ideal para personalizar sua marca</h2>
        <p className="section-subtitle">Categorias pensadas para empresas, equipes, eventos e ações promocionais.</p>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="card card-hover flex h-full flex-col overflow-hidden">
              <div className="flex h-64 items-center justify-center bg-slate-50 p-3">
                <Image src={p.image} alt={`${p.title} - produto personalizado para empresas e eventos`} width={1200} height={900} className="max-h-full w-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-extrabold text-slate-950" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{p.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{p.desc}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <div className="mt-auto pt-6"><WhatsappButton id={p.id} category={p.category} label="Fazer orçamento agora" product={p.title} className="btn-primary w-full" eventName="click_product_card" /></div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 px-5 py-5 text-center shadow-sm">
          <p className="text-sm font-semibold text-slate-700 sm:text-base">
            Quer ver todas as opções?{" "}
            <WhatsappButton
              id="btn-whatsapp-catalogo-completo"
              category="catalogo-completo"
              label="Solicite o catálogo completo pelo WhatsApp"
              product="Catálogo completo de produtos personalizados"
              className="font-extrabold text-green-700 underline underline-offset-4 transition hover:text-green-800"
              eventName="click_whatsapp"
            />
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#7F111B] py-10 text-white sm:py-14" aria-label="Condição especial de orçamento">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_34%),linear-gradient(135deg,rgba(13,30,66,0.38),transparent_55%)]" />
        <div className="container-section relative">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white ring-1 ring-white/20">Condição especial</p>
              <h2 className="max-w-2xl text-2xl font-black leading-tight sm:text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Faça seu orçamento sem compromisso</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-red-50 sm:text-base">Toque nos cards para entender os benefícios e peça uma orientação rápida pelo WhatsApp conforme produto, quantidade e prazo.</p>
              <div className="mt-6 hidden lg:block"><WhatsappButton id="btn-whatsapp-oferta" category="oferta" label="Quero minha condição especial" className="btn-primary" /></div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {offerBenefits.map((item, index) => (
                <details key={item.title} className="group rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white/15 open:bg-white/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-extrabold text-white [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-3"><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-black">{index + 1}</span>{item.title}</span>
                    <span className="text-lg leading-none transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-red-50">{item.desc}</p>
                </details>
              ))}
            </div>

            <div className="lg:hidden"><WhatsappButton id="btn-whatsapp-oferta" category="oferta" label="Quero minha condição especial" className="btn-primary w-full" /></div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-slate-50 pt-12 pb-8 sm:pt-16 sm:pb-10">
        <div className="container-section grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="section-title">Como solicitar seu orçamento</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{steps.map((s, i) => <div key={s} className="card p-5"><p className="text-sm font-bold text-brandRed">Passo {i + 1}</p><p className="mt-2 font-bold leading-relaxed text-slate-900">{s}</p></div>)}</div>
            <div className="mt-8"><WhatsappButton id="btn-whatsapp-como-funciona" category="geral" label="Começar orçamento agora" className="btn-primary" /></div>
          </div>
          <aside className="rounded-3xl bg-[#0D1E42] p-6 text-white shadow-xl">
            <h2 className="text-2xl font-black" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Para agilizar seu atendimento</h2>
            <p className="mt-4 leading-relaxed text-slate-200">Envie pelo WhatsApp: produto desejado, quantidade, prazo, cidade/estado e se já possui logo ou arte.</p>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 pt-8 pb-16 sm:pt-10 sm:pb-20" aria-label="Segmentos atendidos">
        <div className="absolute left-1/2 top-6 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/10 blur-3xl" />
        <div className="container-section relative">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-green-600">Segmentos atendidos</p>
            <h2 className="section-title mt-3">Soluções para diferentes tipos de clientes</h2>
            <p className="section-subtitle">Veja exemplos de negócios e situações em que os brindes personalizados ajudam a fortalecer relacionamento, presença de marca e ações promocionais.</p>
          </div>

          <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:items-stretch lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {audienceItems.map((item, index) => (
              <article key={item.title} className="group relative flex h-full min-w-[86%] snap-center flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/8 transition duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-900/15 sm:min-w-[58%] lg:min-w-0">
                <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-green-500/10 transition group-hover:scale-125" />
                <div className="relative flex h-full flex-col">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0D1E42] text-sm font-black text-white shadow-lg shadow-slate-900/20">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-black leading-tight text-slate-950" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {item.examples.map((example) => <span key={example} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 transition group-hover:bg-green-50 group-hover:text-green-700">{example}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-2 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400 lg:hidden">Arraste para ver mais segmentos</p>
        </div>
      </section>

      <section id="faq" className="container-section py-16 sm:py-20">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <div className="mt-8 space-y-3">{faqItems.map(([q, a]) => <details key={q} className="card p-5"><summary className="cursor-pointer text-base font-bold text-slate-950">{q}</summary><p className="mt-3 leading-relaxed text-slate-600">{a}</p></details>)}</div>
      </section>

      <section id="contato" className="bg-[#0D1E42] py-16 text-white sm:py-20">
        <div className="container-section text-center"><h2 className="section-title-light">Pronto para personalizar produtos para sua empresa?</h2><p className="mx-auto mt-4 max-w-2xl text-slate-200">Fale com a MR & Mega Marca pelo WhatsApp e receba uma orientação rápida para o seu orçamento.</p><div className="mt-8"><WhatsappButton id="btn-whatsapp-final" category="geral" label="Solicitar orçamento no WhatsApp" className="btn-primary" eventName="click_final_cta" /></div></div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-12 text-slate-950">
        <div className="container-section grid gap-8 md:grid-cols-2">
          <div>
            <Image src="/images/logo-mr-mega-marca.png" alt="MR & Mega Marca - fornecedor de brindes personalizados" width={260} height={80} className="h-auto w-[220px]" />
            <p className="mt-4 max-w-lg text-slate-700">Fornecedor de brindes e produtos personalizados para empresas, eventos e ações promocionais.</p>
            <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">Endereço</p>
              <address className="mt-2 text-sm not-italic leading-relaxed text-slate-700">{businessAddress}</address>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(businessAddress)}
                className="mt-3 inline-flex rounded-full bg-green-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-green-700"
              >
                Copiar endereço
              </button>
            </div>
            <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <iframe
                title="Localização da MR & Mega Marca no Google Maps"
                src={businessMapEmbedUrl}
                className="h-56 w-full border-0 sm:h-64"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={businessMapSearchUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700">
              Abrir localização no Google Maps
            </a>
          </div>
          <div className="text-sm text-slate-800">
            <p><strong>Endereço:</strong> Tv. Zenun, 102 - Centro, Campestre - MG</p>
            <p><strong>WhatsApp:</strong> 35 3743 1554</p>
            <p><strong>Domínio:</strong> www.mrmegamarca.com.br</p>
            <p><strong>CNPJ:</strong> 09.633.083/0001-20</p>
            <div className="mt-4 flex flex-wrap gap-4 font-semibold text-slate-900">
              {[["Produtos", "produtos"], ["Como Funciona", "como-funciona"], ["FAQ", "faq"], ["Contato", "contato"]].map(([n, id]) => (
                <a key={id} href={`#${id}`} className="hover:text-green-700">{n}</a>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} MR & Mega Marca. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50"><WhatsappButton id="btn-whatsapp-flutuante" category="geral" label="WhatsApp" /></div>
    </main>
  );
}
