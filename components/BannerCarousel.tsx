"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
    mobile: "/images/banners/banner-mochila-saco-mobile.png",
  },
  {
    title: "Calendário de Mesa Personalizado",
    product: "Calendário de Mesa em PVC Grande com Refil",
    category: "calendario-mesa",
    ctaId: "btn-whatsapp-banner-calendario-mesa",
    desktop: "/images/banners/banner-calendario-mesa-desktop.png",
    mobile: "/images/banners/banner-calendario-mesa-mobile.png",
  },
  {
    title: "Caneta Personalizada",
    product: "Caneta Personalizada",
    category: "canetas",
    ctaId: "btn-whatsapp-banner-caneta-personalizada",
    desktop: "/images/banners/banner-caneta-personalizada-desktop.png",
    mobile: "/images/banners/banner-caneta-personalizada-mobile.png",
  },
];

export function BannerCarousel() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % banners.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

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
    <section aria-label="Ofertas em destaque" className="w-full overflow-hidden bg-white">
      <div className="relative w-full overflow-hidden">
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
              onClick={() => trackBannerClick(banner)}
              className="block min-w-full focus:outline-none focus:ring-4 focus:ring-green-400"
              aria-label={`Solicitar orçamento no WhatsApp para ${banner.title}`}
            >
              <Image
                src={banner.mobile}
                alt={`${banner.title} - oferta especial para WhatsApp`}
                width={360}
                height={120}
                className="block h-auto w-full object-cover sm:hidden"
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

      <div className="flex items-center justify-center gap-2 bg-white py-3 shadow-sm sm:py-4">
        {banners.map((banner, index) => (
          <button
            key={`indicator-${banner.ctaId}`}
            type="button"
            aria-label={`Ver banner ${index + 1}: ${banner.title}`}
            onClick={() => setActiveBanner(index)}
            className={`h-2.5 rounded-full transition-all sm:h-3 ${
              activeBanner === index ? "w-8 bg-green-600" : "w-3 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
