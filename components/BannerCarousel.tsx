"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Banner = {
  title: string;
  product: string;
  category: string;
  ctaId: string;
  desktop: string;
  mobile: string;
};

const banners: Banner[] = [
  {
    title: "Mochila Saco Personalizada",
    product: "Mochila Saco Poliéster Personalizada",
    category: "mochila-saco",
    ctaId: "btn-whatsapp-banner-mochila-saco",
    desktop: "/images/banners/banner-mochila-saco-desktop.png",
    mobile: "/images/banners/banner-mochila-saco-mobile.png?v=2",
  },
  {
    title: "Calendário de Mesa Personalizado",
    product: "Calendário de Mesa em PVC Grande com Refil",
    category: "calendario-mesa",
    ctaId: "btn-whatsapp-banner-calendario-mesa",
    desktop: "/images/banners/banner-calendario-mesa-desktop.png",
    mobile: "/images/banners/banner-calendario-mesa-mobile.png?v=2",
  },
  {
    title: "Caneta Personalizada",
    product: "Caneta Personalizada",
    category: "canetas",
    ctaId: "btn-whatsapp-banner-caneta-personalizada",
    desktop: "/images/banners/banner-caneta-personalizada-desktop.png",
    mobile: "/images/banners/banner-caneta-personalizada-mobile.png?v=2",
  },
];

export function BannerCarousel() {
  const [activeBanner, setActiveBanner] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const wasSwiping = useRef(false);

  const goToNext = () => {
    setActiveBanner((current) => (current + 1) % banners.length);
  };

  const goToPrevious = () => {
    setActiveBanner((current) => (current - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = window.setInterval(goToNext, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
    touchDeltaX.current = 0;
    wasSwiping.current = false;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    touchDeltaX.current = event.touches[0].clientX - touchStartX.current;

    if (Math.abs(touchDeltaX.current) > 12) {
      wasSwiping.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 45) {
      if (touchDeltaX.current < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const trackBannerClick = (banner: Banner) => {
    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Array<Record<string, string>> };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "click_whatsapp",
        button_id: banner.ctaId,
        product_category: banner.category,
      });
    }
  };

  return (
    <section aria-label="Ofertas em destaque" className="w-full overflow-hidden bg-[#0D1E42]">
      <div
        className="relative w-full overflow-hidden bg-white"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          aria-label="Banner anterior"
          onClick={goToPrevious}
          className="absolute left-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/45 text-3xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-slate-950/65 sm:flex"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Próximo banner"
          onClick={goToNext}
          className="absolute right-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/45 text-3xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-slate-950/65 sm:flex"
        >
          ›
        </button>

        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeBanner * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <a
              key={banner.ctaId}
              id={banner.ctaId}
              href={buildWhatsAppUrl(banner.product)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                if (wasSwiping.current) {
                  event.preventDefault();
                  wasSwiping.current = false;
                  return;
                }

                trackBannerClick(banner);
              }}
              className="block min-w-full focus:outline-none focus:ring-4 focus:ring-green-400"
              aria-label={`Solicitar orçamento no WhatsApp para ${banner.title}`}
            >
              <Image
                src={banner.mobile}
                alt={`${banner.title} - oferta especial para WhatsApp`}
                width={1080}
                height={1080}
                className="block aspect-square w-full object-cover sm:hidden"
                sizes="100vw"
                priority={index === 0}
              />
              <Image
                src={banner.desktop}
                alt={`${banner.title} - oferta especial para WhatsApp`}
                width={1200}
                height={400}
                className="hidden h-auto w-full object-cover sm:block"
                sizes="100vw"
                priority={index === 0}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 bg-[#0D1E42] py-2 sm:py-3">
        {banners.map((banner, index) => (
          <button
            key={`indicator-${banner.ctaId}`}
            type="button"
            aria-label={`Ver banner ${index + 1}: ${banner.title}`}
            onClick={() => setActiveBanner(index)}
            className={`h-2 rounded-full transition-all sm:h-2.5 ${
              activeBanner === index ? "w-8 bg-green-500" : "w-3 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
