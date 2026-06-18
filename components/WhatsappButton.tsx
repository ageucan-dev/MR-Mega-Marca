"use client";

import Image from "next/image";
import { QualificationSource, pushDataLayer } from "@/lib/qualification";

type Props = {
  id: string;
  category: string;
  label: string;
  product?: string;
  buttonLocation: string;
  className?: string;
  onOpenQualification: (source: QualificationSource) => void;
};

export function WhatsappButton({
  id,
  category,
  label,
  product,
  buttonLocation,
  className = "",
  onOpenQualification,
}: Props) {
  const handleClick = () => {
    const source = {
      buttonId: id,
      buttonLocation,
      productCategory: category,
      product,
    };

    pushDataLayer({
      event: "click_cta_lp",
      button_id: id,
      button_location: buttonLocation,
      product_category: category,
    });

    pushDataLayer({
      event: "open_qualification_form",
      button_id: id,
      button_location: buttonLocation,
      product_category: category,
    });

    onOpenQualification(source);
  };

  if (id === "btn-whatsapp-flutuante") {
    return (
      <button
        id={id}
        type="button"
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
      </button>
    );
  }

  return (
    <button id={id} type="button" className={className} onClick={handleClick}>
      {label}
    </button>
  );
}
