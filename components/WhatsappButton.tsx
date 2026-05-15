"use client";

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

  return (
    <a id={id} href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={handleClick}>
      {label}
    </a>
  );
}
