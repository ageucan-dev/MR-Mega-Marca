"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { pushDataLayer } from "@/lib/qualification";
import type { QualificationSource } from "@/lib/qualification";

type Banner = {
  title: string;
  product: string;
  category: string;
  ctaId: string;
  desktop: string;
  mobile: string;
};

type Props = {
  onOpenQualification: (source: QualificationSource) => void;
};

const AUTOPLAY_INTERVAL_MS = 5000;
const USER_READING_PAUSE_MS = 20000;

const banners: Banner[] = [
  {
    title: "Caneta Personalizada",
    product: "Canetas personalizadas",
    category: "canetas",
    ctaId: "btn-whatsapp-banner-caneta-personalizada",
    desktop: "/images/banners/banner-caneta-personalizada-desktop.png",
    mobile: "/images/banners/banner-caneta-personalizada-mobile.png?v=2",
  },
  {
    title: "Mochila Saco Personalizada",
    product: "Sacochilas",
    category: "sacochilas",
    ctaId: "btn-whatsapp-banner-mochila-saco",
    desktop: "/images/banners/banner-mochila-saco-desktop.png",
    mobile: "/images/banners/banner-mochila-saco-mobile.png?v=2",
  },
  {
    title: "Calendário de Mesa Personalizado",
    product: "Outro produto",
    category: "calendario-mesa",
    ctaId: "btn-whatsapp-banner-calendario-mesa",
    desktop: "/images/banners/banner-calendario-mesa-desktop.png",
    mobile: "/images/banners/banner-calendario-mesa-mobile.png?v=2",
  },
];

export function BannerCarousel({ onOpenQualification }: Props) {
  const [activeBanner, setActiveBanner] = useState(0);
  const [resumeAutoplayAt, setResumeAutoplayAt] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const wasSwiping = useRef(false);

  const pauseAutoplayForReading = () => {
    setResumeAutoplayAt(Date.now() + USER_READING_PAUSE_MS);
  };

  const goToNext = () => {
    setActiveBanner((current) => (current + 1) % banners.length);
  };

  const goToPrevious = () => {
    setActiveBanner((current) => (current - 1 + banners.length) % banners.length);
  };

  const handleManualNext = () => {
    pauseAutoplayForReading();
    goToNext();
  };

  const handleManualPrevious = () => {
    pauseAutoplayForReading();
    goToPrevious();
  };

  const handleManualIndicator = (index: number) => {
    pauseAutoplayForReading();
    setActiveBanner(index);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (Date.now() < resumeAutoplayAt) return;
      goToNext();
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [resumeAutoplayAt]);

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
      pauseAutoplayForReading();

      if (touchDeltaX.current < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const handleBannerClick = (banner: Banner) => {
    if (wasSwiping.current) {
      wasSwiping.current = false;
      return;
    }

    pushDataLayer({
      event: "click_cta_lp",
      button_id: banner.ctaId,
      button_location: "banner",
      product_category: banner.category,
    });

    pushDataLayer({
      event: "open_qualification_form",
      button_id: banner.ctaId,
      button_location: "banner",
      product_category: banner.category,
    });

    onOpenQualification({
      buttonId: banner.ctaId,
      buttonLocation: "banner",
      productCategory: banner.category,
      product: banner.product,
    });
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
          onClick={handleManualPrevious}
          className="absolute left-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/45 text-3xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-slate-950/65 sm:flex"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Próximo banner"
          onClick={handleManualNext}
          className="absolute right-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/45 text-3xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-slate-950/65 sm:flex"
        >
          ›
        </button>

        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeBanner * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <button
              key={banner.ctaId}
              id={banner.ctaId}
              type="button"
              onClick={() => handleBannerClick(banner)}
              className="block min-w-full focus:outline-none focus:ring-4 focus:ring-green-400"
              aria-label={`Abrir questionário de orçamento para ${banner.title}`}
            >
              <Image
                src={banner.mobile}
                alt={`${banner.title} - oferta especial para orçamento`}
                width={1080}
                height={1080}
                className="block aspect-square w-full object-cover sm:hidden"
                sizes="100vw"
                priority={index === 0}
              />
              <Image
                src={banner.desktop}
                alt={`${banner.title} - oferta especial para orçamento`}
                width={1200}
                height={400}
                className="hidden h-auto w-full object-cover sm:block"
                sizes="100vw"
                priority={index === 0}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 bg-[#0D1E42] py-2 sm:py-3">
        {banners.map((banner, index) => (
          <button
            key={`indicator-${banner.ctaId}`}
            type="button"
            aria-label={`Ver banner ${index + 1}: ${banner.title}`}
            onClick={() => handleManualIndicator(index)}
            className={`h-2 rounded-full transition-all sm:h-2.5 ${
              activeBanner === index ? "w-8 bg-green-500" : "w-3 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
