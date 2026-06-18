const audienceItems = [
  { title: "Empresas e comércios", desc: "Brindes e materiais para relacionamento, divulgação local e presença de marca no dia a dia.", examples: ["Lojas", "Supermercados", "Clínicas", "Escritórios"] },
  { title: "Eventos e campanhas promocionais", desc: "Produtos para ações presenciais, ativações, feiras, corridas e campanhas sazonais.", examples: ["Corridas", "Feiras", "Lançamentos", "Datas comemorativas"] },
  { title: "Equipes e colaboradores", desc: "Uniformes, kits internos e itens de reconhecimento para fortalecer identidade e pertencimento.", examples: ["Uniformes", "Onboarding", "Kits internos", "Treinamentos"] },
  { title: "Escolas, clínicas e escritórios", desc: "Materiais personalizados para relacionamento, organização, campanhas internas e fidelização.", examples: ["Escolas", "Consultórios", "Advocacias", "Contabilidades"] },
  { title: "Associações, imobiliárias e seguradoras", desc: "Brindes úteis e duráveis para gerar lembrança de marca e fortalecer o contato com clientes.", examples: ["Imobiliárias", "Seguradoras", "Sindicatos", "Associações"] },
];

export function AudienceSection() {
  return (
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
  );
}
