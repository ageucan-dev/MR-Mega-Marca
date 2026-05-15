import Image from "next/image";
import { WhatsappButton } from "@/components/WhatsappButton";

const navItems = [
  ["Produtos", "produtos"],
  ["Como Funciona", "como-funciona"],
  ["Tradição", "tradicao"],
  ["FAQ", "faq"],
  ["Contato", "contato"],
] as const;

const products = [
  ["Brindes Personalizados", "Canetas, chaveiros, squeezes, calendários e itens promocionais para divulgar sua marca com qualidade.", "btn-whatsapp-brindes", "brindes", "/images/produtos/materiais-promocionais.jpg"],
  ["Camisetas E Uniformes Personalizados", "Camisetas promocionais, uniformes para empresas, eventos, equipes e campanhas especiais.", "btn-whatsapp-camisetas", "camisetas", "/images/produtos/camisetas.jpg"],
  ["Kits Corporativos Personalizados", "Combinações de brindes para clientes, colaboradores, eventos, ações comerciais e campanhas internas.", "btn-whatsapp-kits", "kits", "/images/produtos/kits-corporativos.jpg"],
  ["Sacochilas E Materiais Para Eventos", "Produtos personalizados para corridas, feiras, escolas, empresas e eventos corporativos.", "btn-whatsapp-sacochilas", "sacochilas", "/images/produtos/sacochilas.jpg"],
  ["Canetas Personalizadas", "Opções práticas e acessíveis para divulgar sua empresa no dia a dia dos seus clientes.", "btn-whatsapp-canetas", "canetas", "/images/produtos/canetas.jpg"],
  ["Chaveiros Personalizados", "Brindes úteis, duráveis e ideais para empresas, imobiliárias, concessionárias, eventos e campanhas.", "btn-whatsapp-chaveiros", "chaveiros", "/images/produtos/chaveiros.jpg"],
] as const;

const steps = [
  ["Escolha O Produto Ideal", "Selecione o item, segmento e objetivo da ação para receber uma sugestão consultiva de linha e acabamento."],
  ["Informe Quantidade E Prazo", "Com volume e prazo, nossa equipe estima opções de personalização com melhor custo-benefício para sua campanha."],
  ["Envie Logo, Arte Ou Referência", "Caso já tenha arquivo, enviamos retorno mais rápido. Se não tiver, orientamos formato, tamanho e aplicação."],
  ["Receba Curadoria Personalizada", "Você recebe orientação com opções viáveis conforme produto, quantidade, logística e região de entrega."],
] as const;

export default function Home() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="container-section flex h-24 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/images/logo-mr-mega-marca.png" alt="MR E Mega Marca" width={260} height={80} className="h-16 w-auto" priority />
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={`#${href}`} className="text-sm font-semibold text-slate-700 hover:text-brandBlue">
                {label}
              </a>
            ))}
          </nav>
          <WhatsappButton id="btn-whatsapp-header" category="geral" label="Solicitar Orçamento" />
        </div>
      </header>

      <section id="top" className="bg-gradient-to-br from-brandBlue via-slate-950 to-brandRed pt-36 text-white">
        <div className="container-section py-4">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">Banner Principal</p>
            <p className="mt-1 text-lg font-bold">Oferta Especial Para Campanhas Corporativas Da Temporada</p>
            <p className="mt-1 text-sm text-slate-200">Substitua esta área por imagem oficial da oferta quando disponível.</p>
          </div>
        </div>
        <div className="container-section grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Brindes Personalizados Para Empresas, Eventos E Ações Promocionais
            </h1>
            <p className="mt-5 text-lg text-slate-200">Canetas, chaveiros, squeezes, sacochilas, camisetas, kits corporativos e muito mais, com atendimento rápido pelo WhatsApp e a tradição de quem atua há mais de 40 anos no mercado.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["40+ Anos De Tradição", "Orçamento Gratuito", "Atendimento Rápido", "Todo O Brasil, Conforme Viabilidade"].map((s) => (
                <span key={s} className="rounded-full bg-white/15 px-4 py-2 text-sm">{s}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsappButton id="btn-whatsapp-hero" category="geral" label="Solicitar Orçamento No WhatsApp" />
              <a href="#produtos" className="inline-flex rounded-xl border border-white/50 px-6 py-3 font-semibold">Ver Produtos Em Destaque</a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <Image src="/images/produtos/kits-corporativos.jpg" alt="Produtos Personalizados" width={1200} height={900} className="rounded-xl" />
          </div>
        </div>
      </section>

      <section id="produtos" className="container-section py-20">
        <h2 className="section-title">Escolha O Produto Ideal Para Personalizar Sua Marca</h2>
        <p className="section-subtitle">Soluções personalizadas para empresas, eventos, equipes, campanhas promocionais e ações corporativas.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map(([title, desc, id, cat, img]) => (
            <article key={id} className="card-hover rounded-2xl border p-4 shadow-soft">
              <Image src={img} alt={title} width={1200} height={900} className="rounded-lg" />
              <h3 className="mt-4 text-xl font-bold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
              <div className="mt-5"><WhatsappButton id={id} category={cat} label={`Orçar ${title}`} product={title} /></div>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="bg-slate-100 py-20">
        <div className="container-section">
          <h2 className="section-title">Como Solicitar Seu Orçamento</h2>
          <p className="section-subtitle">Experiência guiada para acelerar seu atendimento: você sabe exatamente o que enviar e nossa equipe responde com mais precisão.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {steps.map(([title, desc], i) => (
              <div key={title} className="card-hover rounded-xl bg-white p-6">
                <p className="text-sm font-bold text-brandRed">Etapa {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{title}</h3>
                <p className="mt-2 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-brandBlue/20 bg-white p-6">
            <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Dica Para Retorno Mais Rápido</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Produto desejado e variações.</li>
              <li>Quantidade aproximada.</li>
              <li>Prazo e cidade/estado para logística.</li>
              <li>Logo, arte pronta ou referência visual.</li>
            </ul>
          </div>
          <div className="mt-8"><WhatsappButton id="btn-whatsapp-como-funciona" category="geral" label="Começar Orçamento Agora" /></div>
        </div>
      </section>
    </main>
  );
}
