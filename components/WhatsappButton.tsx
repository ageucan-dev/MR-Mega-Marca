"use client";

import Image from "next/image";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  id: string;
  category: string;
  label: string;
  product?: string;
  className?: string;
  eventName?: "click_whatsapp" | "click_product_card" | "click_final_cta";
};

export function WhatsappButton({ id, category, label, product, className = "", eventName = "click_whatsapp" }: Props) {
  const href = buildWhatsAppUrl(product);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Array<Record<string, string>> };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: eventName, button_id: id, product_category: category });
    }
  };

  if (id === "btn-whatsapp-flutuante") {
    return (
      <a
        id={id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group relative block h-16 w-16 transition duration-300 hover:-translate-y-1 sm:h-[72px] sm:w-[72px]"
        onClick={handleClick}
      >
        <span className="absolute inset-x-2 -bottom-1 h-4 rounded-full bg-black/25 blur-md transition group-hover:bg-black/30" aria-hidden="true" />
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp"
          width={96}
          height={96}
          className="relative h-full w-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,0.28)]"
          priority
        />
      </a>
    );
  }

  return (
    <a id={id} href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={handleClick}>
      {label}
    </a>
  );
}
