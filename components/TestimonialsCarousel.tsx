"use client";

import { useRef } from "react";
import { WhatsappButton } from "@/components/WhatsappButton";

const testimonials = [
  {
    name: "Mariana Souza",
    role: "Loja de roupas",
    initials: "MS",
    text: "Consegui entender rápido quais brindes faziam sentido para a campanha. O atendimento ajudou na escolha da quantidade e deixou o orçamento mais claro.",
  },
  {
    name: "Rafael Martins",
    role: "Evento corporativo",
    initials: "RM",
    text: "Precisávamos de materiais para um evento e tínhamos pouco tempo. A orientação pelo WhatsApp facilitou o processo e evitou escolhas erradas.",
  },
  {
    name: "Patrícia Almeida",
    role: "Clínica estética",
    initials: "PA",
    text: "Gostei da variedade de opções. A equipe mostrou alternativas com boa percepção de valor para presentear clientes sem fugir do orçamento.",
  },
  {
    name: "Lucas Ferreira",
    role: "Escritório contábil",
    initials: "LF",
    text: "O diferencial foi receber uma indicação mais consultiva, não apenas preço. Ficou mais fácil escolher um item útil para relacionamento com clientes.",
  },
  {
    name: "Camila Rodrigues",
    role: "Escola particular",
    initials: "CR",
    text: "Buscávamos algo para uma ação interna e recebemos boas sugestões. O processo pelo WhatsApp foi direto e prático.",
  },
  {
    name: "Bruno Henrique",
    role: "Equipe comercial",
    initials: "BH",
    text: "Os kits ajudaram a padronizar a entrega para clientes. A ideia de combinar produtos no mesmo pacote trouxe mais profissionalismo para a ação.",
  },
  {
    name: "Fernanda Lima",
    role: "Campanha promocional",
    initials: "FL",
    text: "Tínhamos dúvida entre canetas, chaveiros e squeezes. A orientação ajudou a escolher o produto mais coerente com o público da campanha.",
  },
  {
    name: "Gustavo Pereira",
    role: "Imobiliária",
    initials: "GP",
    text: "Precisávamos de brindes úteis para clientes. As sugestões foram objetivas e pensadas para gerar lembrança da marca no dia a dia.",
  },
  {
    name: "Aline Costa",
    role: "Ação de relacionamento",
    initials: "AC",
    text: "O atendimento foi claro sobre quantidade, personalização e prazos. Isso deu mais segurança antes de fechar o pedido.",
  },
  {
    name: "Thiago Mendes",
    role: "Uniformes para equipe",
    initials: "TM",
    text: "A página deixou fácil entender os produtos e pedir orçamento. O contato pelo WhatsApp já foi com as informações certas.",
  },
  {
    name: "Juliana Ribeiro",
    role: "Feira e exposição",
    initials: "JR",
    text: "Para evento, o que mais importa é praticidade. Gostei de ver opções como sacochilas, canetas e kits para montar uma ação completa.",
  },
  {
    name: "Eduardo Nunes",
    role: "Empresa de serviços",
    initials: "EN",
    text: "A proposta de atendimento consultivo faz diferença. Não ficamos presos só ao menor preço, mas ao que fazia sentido para a marca.",
  },
  {
    name: "Renata Carvalho",
    role: "Marketing local",
    initials: "RC",
    text: "Ajudou muito ter uma empresa com experiência e opções variadas. O orçamento ficou mais organizado depois de informar produto e quantidade.",
  },
  {
    name: "Marcelo Batista",
    role: "Sindicato e associação",
    initials: "MB",
    text: "Os brindes foram pensados para uso contínuo, não apenas para entregar e esquecer. Isso aumenta a chance da marca ser lembrada.",
  },
  {
    name: "Sofia Andrade",
    role: "Campanha sazonal",
    initials: "SA",
    text: "Gostei da comunicação simples. Em poucos minutos já sabia quais informações enviar para receber um orçamento mais preciso.",
  },
];

export function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: "previous" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "next" ? 360 : -360,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20" aria-label="Avaliações de clientes">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50 to-white" aria-hidden="true" />
      <div className="container-section relative">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-green-600">Avaliações</p>
            <h2 className="section-title mt-3">Clientes que buscam brindes com mais segurança</h2>
            <p className="section-subtitle">
              Exemplos de avaliações para validação visual da landing page. Conforme chegarem depoimentos reais, substituímos estes modelos por avaliações verificadas dos consumidores.
            </p>
          </div>
          <div className="hidden gap-3 lg:flex">
            <button
              type="button"
              onClick={() => scrollCards("previous")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-green-500"
              aria-label="Ver avaliações anteriores"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollCards("next")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-green-500"
              aria-label="Ver próximas avaliações"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="mt-9 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.role}`}
              className="relative flex min-h-[310px] min-w-[86%] snap-center flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/8 transition hover:-translate-y-1 hover:shadow-2xl sm:min-w-[46%] lg:min-w-[360px] lg:max-w-[360px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0D1E42] text-sm font-black text-white ring-4 ring-green-50">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-950">{testimonial.name}</h3>
                    <p className="text-xs font-semibold text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-green-700">
                  ✓ Modelo
                </span>
              </div>

              <div className="mt-5 text-lg leading-none text-amber-400" aria-label="5 estrelas">
                ★★★★★
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">“{testimonial.text}”</p>

              <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-500">
                Depoimento modelo para aprovação. Substituir por avaliação real antes da publicação final.
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-green-200 bg-green-50 p-5 text-center shadow-sm sm:p-6">
          <p className="text-sm font-semibold leading-relaxed text-slate-700 sm:text-base">
            Já comprou com a MR & Mega Marca ou quer registrar sua experiência?{" "}
            <WhatsappButton
              id="btn-whatsapp-enviar-avaliacao"
              category="avaliacao"
              label="Publique sua avaliação pelo WhatsApp"
              product="Quero publicar uma avaliação sobre a MR & Mega Marca"
              className="font-extrabold text-green-700 underline underline-offset-4 transition hover:text-green-800"
              eventName="click_whatsapp"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
