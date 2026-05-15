"use client";

type Props = { id: string; category: string; label: string; product?: string; className?: string };
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsappButton({ id, category, label, product, className = "" }: Props) {
  const href = buildWhatsAppUrl(product);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Array<Record<string, string>> };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "click_whatsapp", button_id: id, product_category: category });
    }
  };

  return (
    <a id={id} href={href} target="_blank" rel="noopener noreferrer" className={`whatsapp-btn ${className}`} onClick={handleClick}>
      {label}
    </a>
  );
}
