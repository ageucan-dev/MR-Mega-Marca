"use client";

import Image from "next/image";
import { useEffect } from "react";
import { WhatsappButton } from "@/components/WhatsappButton";

const products = [
  { title: "Brindes Personalizados", desc: "Canetas, chaveiros, squeezes e materiais promocionais para divulgar sua marca.", bullets: ["Alta variedade", "Boa percepção de valor"], id: "btn-whatsapp-brindes", category: "brindes", image: "/images/produtos/materiais-promocionais.jpg" },
  { title: "Kits Corporativos Personalizados", desc: "Combinações para clientes, colaboradores, eventos e ações comerciais.", bullets: ["Curadoria consultiva", "Combinações sob medida"], id: "btn-whatsapp-kits", category: "kits", image: "/images/produtos/kits-corporativos.jpg" },
  { title: "Camisetas e Uniformes Personalizados", desc: "Camisetas promocionais e uniformes para empresas e equipes.", bullets: ["Identidade visual forte", "Conforto e durabilidade"], id: "btn-whatsapp-camisetas", category: "camisetas", image: "/images/produtos/camisetas.jpg" },
  { title: "Sacochilas e Materiais para Eventos", desc: "Soluções para feiras, corridas, escolas e eventos corporativos.", bullets: ["Excelente para ativações", "Praticidade logística"], id: "btn-whatsapp-sacochilas", category: "sacochilas", image: "/images/produtos/sacochilas.jpg" },
  { title: "Canetas Personalizadas", desc: "Item acessível e efetivo para presença diária da sua marca.", bullets: ["Ótimo custo-benefício", "Alto volume"], id: "btn-whatsapp-canetas", category: "canetas", image: "/images/produtos/canetas.jpg" },
  { title: "Chaveiros Personalizados", desc: "Brindes úteis para relacionamento e lembrança constante da marca.", bullets: ["Duráveis", "Aplicação multissetorial"], id: "btn-whatsapp-chaveiros", category: "chaveiros", image: "/images/produtos/chaveiros.jpg" },
];

const benefits = ["Mais de 40 anos de tradição", "Qualidade dos materiais", "Atendimento consultivo", "Variedade de produtos", "Personalização sob medida", "Experiência com empresas e eventos", "Agilidade no atendimento", "Produção e curadoria conforme viabilidade"];
const stats = ["40+ Anos de Mercado", "Atendimento para Empresas e Eventos", "Personalização sob Medida", "Envio para Todo o Brasil Conforme Viabilidade"];
const audienceItems = ["Empresas e comércios", "Eventos e campanhas promocionais", "Equipes e colaboradores", "Escolas, clínicas e escritórios", "Associações, imobiliárias e seguradoras"];
const steps = ["Escolha o produto que deseja personalizar", "Informe quantidade, prazo e cidade/estado", "Envie sua logo, arte ou referência", "Receba orientação e orçamento pelo WhatsApp"];
const faqItems = [
  ["O orçamento é gratuito?", "Sim. O orçamento é gratuito e feito pelo WhatsApp."],
  ["Existe pedido mínimo?", "Sim. Varia conforme o produto e o tipo de personalização."],
  ["Preciso ter a arte pronta?", "Não. Se não tiver arte, orientamos a melhor forma de personalização."],
  ["Vocês atendem quais regiões?", "Atendemos todo o Brasil, conforme viabilidade do pedido."],
  ["Quais produtos posso personalizar?", "Brindes, kits, camisetas, uniformes, canetas, chaveiros e outros materiais promocionais."],
  ["Em quanto tempo recebo retorno?", "Com informações completas, o retorno costuma ser mais rápido."],
  ["Como recebo um orçamento mais preciso?", "Informe produto, quantidade, prazo, cidade/estado e se possui logo/arte."],
] as const;

export default function Home() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "view_product_section", section: "produtos" });
  }, []);

  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="container-section flex h-24 items-center justify-between">
          <a href="#top"><Image src="/images/logo-mr-mega-marca.png" alt="Logo MR & Mega Marca" width={250} height={76} className="h-14 w-auto sm:h-16" /></a>
          <nav className="hidden items-center gap-6 md:flex">{[["Produtos","produtos"],["Como Funciona","como-funciona"],["Diferenciais","diferenciais"],["Tradição","tradicao"],["FAQ","faq"]].map(([n,id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-700 hover:text-brandBlue">{n}</a>)}</nav>
          <WhatsappButton id="btn-whatsapp-header" category="geral" label="Solicitar Orçamento" className="btn-primary" />
        </div>
      </header>

      <section id="top" className="bg-[#0D1E42] pt-36 text-white">
        <div className="container-section grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full bg-brandRed px-4 py-1 text-xs font-bold uppercase">Condição Especial para Primeira Compra por Tempo Limitado</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Brindes personalizados para empresas, eventos e ações promocionais</h1>
            <p className="mt-5 text-lg text-slate-200">Canetas, chaveiros, camisetas, kits, sacochilas e materiais personalizados com atendimento consultivo, orçamento gratuito e a tradição de quem atua há mais de 40 anos no mercado.</p>
            <div className="mt-6 flex flex-wrap gap-2">{["40+ anos de tradição","Orçamento gratuito","Atendimento pelo WhatsApp","Todo o Brasil, conforme viabilidade"].map((b) => <span key={b} className="badge">{b}</span>)}</div>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsappButton id="btn-whatsapp-hero" category="geral" label="Solicitar orçamento no WhatsApp" className="btn-primary" />
              <a href="#produtos" className="btn-secondary">Ver produtos em destaque</a>
            </div>
          </div>
          <div className="relative card overflow-hidden border-slate-700 bg-slate-900 p-3">
            <Image src="/images/produtos/kits-corporativos.jpg" alt="Kits corporativos personalizados em destaque" width={1200} height={900} className="h-[380px] w-full rounded-xl object-cover" />
            <span className="absolute left-6 top-6 rounded-full bg-brandRed px-3 py-1 text-xs font-bold">40+ Anos</span>
            <div className="absolute bottom-6 right-6 rounded-xl bg-white p-3 text-slate-900 shadow-lg"><p className="text-xs font-semibold">Orçamento rápido pelo WhatsApp</p></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-6"><div className="container-section grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{stats.map((s) => <div key={s} className="card px-4 py-4 text-center text-sm font-semibold">{s}</div>)}</div></section>

      <section id="produtos" className="container-section py-20">
        <h2 className="section-title">Escolha o produto ideal para personalizar sua marca</h2>
        <p className="section-subtitle">Categorias pensadas para empresas, equipes, eventos e ações promocionais.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="card card-hover overflow-hidden">
              <Image src={p.image} alt={p.title} width={1200} height={900} className="h-52 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.desc}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <div className="mt-5"><WhatsappButton id={p.id} category={p.category} label="Orçar agora" product={p.title} className="btn-primary w-full" eventName="click_product_card" /></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brandRed py-16 text-white"><div className="container-section"><h2 className="section-title text-white">Faça seu orçamento e ganhe condição especial na primeira compra</h2><p className="mt-3 max-w-3xl text-red-50">Solicite seu orçamento gratuito pelo WhatsApp e receba orientação para escolher o melhor produto, quantidade e personalização para sua empresa ou evento.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{["Orçamento gratuito","Desconto para primeira compra","Condição especial para empresas","Atendimento consultivo","Prazo promocional de 90 dias"].map((i)=><span key={i} className="rounded-lg bg-white/15 px-3 py-2 text-sm font-semibold">{i}</span>)}</div><div className="mt-8"><WhatsappButton id="btn-whatsapp-oferta" category="oferta" label="Quero minha condição especial" className="btn-secondary" /></div></div></section>

      <section id="como-funciona" className="bg-slate-50 py-20"><div className="container-section grid gap-8 lg:grid-cols-3"><div className="lg:col-span-2"><h2 className="section-title">Como solicitar seu orçamento</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{steps.map((s,i)=><div key={s} className="card p-5"><p className="text-sm font-bold text-brandRed">Passo {i+1}</p><p className="mt-1 font-semibold">{s}</p></div>)}</div><div className="mt-8"><WhatsappButton id="btn-whatsapp-como-funciona" category="geral" label="Começar orçamento agora" className="btn-primary" /></div></div><aside className="card bg-slate-900 p-6 text-white"><h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Para agilizar seu atendimento</h3><p className="mt-3 text-slate-200">Envie pelo WhatsApp: produto desejado, quantidade, prazo, cidade/estado e se já possui logo ou arte.</p></aside></div></section>

      <section id="diferenciais" className="container-section py-20"><h2 className="section-title">Por que empresas escolhem a MR & Mega Marca?</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((b)=><div key={b} className="card p-4 text-sm font-semibold">{b}</div>)}</div></section>

      <section id="tradicao" className="bg-slate-900 py-20 text-white"><div className="container-section grid gap-8 lg:grid-cols-2 lg:items-center"><div><h2 className="section-title text-white">Mais de 40 anos ajudando marcas a serem lembradas</h2><p className="mt-4 text-slate-300">A MR & Mega Marca carrega uma trajetória sólida no mercado de produtos personalizados, atendendo empresas, eventos e campanhas promocionais com foco em qualidade, confiança e personalização.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["40+ anos de mercado","Atendimento consultivo","Produtos para empresas, eventos e campanhas","Soluções personalizadas conforme necessidade"].map((n)=><div key={n} className="rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold">{n}</div>)}</div></div><Image src="/images/produtos/materiais-promocionais.jpg" alt="Materiais promocionais personalizados" width={1200} height={900} className="h-80 w-full rounded-2xl object-cover" /></div></section>

      <section className="container-section py-20"><h2 className="section-title">Produtos personalizados que valorizam sua marca</h2><p className="section-subtitle">Veja algumas possibilidades para empresas, eventos, equipes e ações promocionais.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{products.map((p)=><Image key={`gal-${p.id}`} src={p.image} alt={`Galeria: ${p.title}`} width={1200} height={900} className="h-56 w-full rounded-2xl object-cover" />)}</div></section>

      <section className="bg-slate-100 py-20"><div className="container-section"><h2 className="section-title">Soluções para diferentes tipos de clientes</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{audienceItems.map((a)=><div key={a} className="card p-5 font-semibold">{a}</div>)}</div></div></section>

      <section id="faq" className="container-section py-20"><h2 className="section-title">Perguntas Frequentes</h2><div className="mt-8 space-y-3">{faqItems.map(([q,a])=><details key={q} className="card p-5"><summary className="cursor-pointer text-base font-semibold">{q}</summary><p className="mt-2 text-slate-600">{a}</p></details>)}</div></section>

      <section id="contato" className="bg-brandBlue py-16 text-white"><div className="container-section text-center"><h2 className="section-title text-white">Pronto para personalizar produtos para sua empresa?</h2><p className="mx-auto mt-4 max-w-2xl text-slate-200">Fale com a MR & Mega Marca pelo WhatsApp e receba uma orientação rápida para o seu orçamento.</p><div className="mt-8"><WhatsappButton id="btn-whatsapp-final" category="geral" label="Solicitar orçamento no WhatsApp" className="btn-primary" eventName="click_final_cta" /></div></div></section>

      <footer className="bg-slate-950 py-12 text-slate-300"><div className="container-section grid gap-8 md:grid-cols-2"><div><Image src="/images/logo-mr-mega-marca.png" alt="Logo MR & Mega Marca" width={240} height={74} className="h-14 w-auto" /><p className="mt-4 max-w-lg">Fornecedor de brindes e produtos personalizados para empresas, eventos e ações promocionais.</p></div><div className="text-sm"><p>WhatsApp: 35 3743 1554</p><p>Domínio: www.mrmegamarca.com.br</p><div className="mt-4 flex flex-wrap gap-4">{[["Produtos","produtos"],["Como Funciona","como-funciona"],["Diferenciais","diferenciais"],["FAQ","faq"],["Contato","contato"]].map(([n,id]) => <a key={id} href={`#${id}`} className="hover:text-white">{n}</a>)}</div><p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} MR & Mega Marca. Todos os direitos reservados.</p></div></div></footer>

      <div className="fixed bottom-5 right-5 z-50"><WhatsappButton id="btn-whatsapp-flutuante" category="geral" label="WhatsApp" className="btn-primary rounded-full px-5 py-3 shadow-2xl" /></div>
    </main>
  );
}
