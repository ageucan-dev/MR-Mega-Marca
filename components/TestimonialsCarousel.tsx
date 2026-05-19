"use client";

import { useRef } from "react";
import { WhatsappButton } from "@/components/WhatsappButton";

const testimonials = [
  {
    name: "Marina Resende",
    meta: "Local Guide · 14 avaliações · 3 fotos",
    initials: "MR",
    rating: 5,
    time: "8 anos atrás",
    text: "Ótimo atendimento, os brindes chegaram até antes do prazo, excelente!",
  },
  {
    name: "Marcelo Muniz",
    meta: "2 avaliações",
    initials: "MM",
    rating: 5,
    time: "um ano atrás",
    text: "Excelentes produtos e preço acessível",
  },
  {
    name: "Julio Cesar Simon",
    meta: "Local Guide · 1.672 avaliações · 10.028 fotos",
    initials: "JS",
    rating: 4,
    time: "8 anos atrás",
    text: "Ótimo atendimento",
  },
  {
    name: "Fernando Martins",
    meta: "4 avaliações",
    initials: "FM",
    rating: 5,
    time: "2 anos atrás",
    text: "Principal",
  },
  {
    name: "Roni do carmo silva",
    meta: "1 foto",
    initials: "RS",
    rating: 5,
    time: "10 meses atrás",
    text: "Avaliação positiva publicada no Google.",
  },
  {
    name: "Marcos Silva",
    meta: "Local Guide · 7 avaliações · 6 fotos",
    initials: "MS",
    rating: 4,
    time: "4 anos atrás",
    text: "Avaliação positiva publicada no Google.",
  },
  {
    name: "Dircelia Garcia",
    meta: "3 avaliações",
    initials: "DG",
    rating: 5,
    time: "6 anos atrás",
    text: "Avaliação positiva publicada no Google.",
  },
  {
    name: "Ana Paula Sateler",
    meta: "3 avaliações · 1 foto",
    initials: "AS",
    rating: 5,
    time: "7 anos atrás",
    text: "Avaliação positiva publicada no Google.",
  },
  {
    name: "SKULL",
    meta: "2 avaliações",
    initials: "SK",
    rating: 5,
    time: "8 anos atrás",
    text: "Avaliação positiva publicada no Google.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mt-5 flex items-center gap-1 text-lg leading-none" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < rating ? "text-amber-400" : "text-slate-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

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
    <section className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-10 sm:pb-16" aria-label="Avaliações de clientes no Google">
      <div className="container-section relative">
        <div className="flex items-center justify-between gap-5">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-green-600">Avaliações no Google</p>
          <div className="hidden gap-3 lg:flex">
            <button
              type="button"
              onClick={() => scrollCards("previous")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-2xl font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-green-500"
              aria-label="Ver avaliações anteriores"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollCards("next")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-2xl font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-green-500"
              aria-label="Ver próximas avaliações"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="mt-5 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.time}`}
              className="relative flex min-h-[300px] min-w-[86%] snap-center flex-col rounded-[1.75rem] border border-blue-100 bg-blue-50/70 p-6 shadow-xl shadow-blue-950/8 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-2xl sm:min-w-[46%] lg:min-w-[360px] lg:max-w-[360px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0D1E42] text-sm font-black text-white ring-4 ring-white" aria-hidden="true">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-950">{testimonial.name}</h3>
                    <p className="text-xs font-semibold text-slate-500">{testimonial.meta}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wide text-green-700 shadow-sm">
                  ✓ Google
                </span>
              </div>

              <Stars rating={testimonial.rating} />
              <p className="mt-2 text-xs font-semibold text-slate-400">{testimonial.time}</p>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">“{testimonial.text}”</p>

              <div className="mt-5 rounded-2xl bg-white/80 px-4 py-3 text-xs font-semibold text-slate-500 shadow-sm">
                Avaliação real publicada no Google.
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
