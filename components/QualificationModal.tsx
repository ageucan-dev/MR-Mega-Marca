"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  DEADLINE_OPTIONS,
  MINIMUM_ORDER_MESSAGE,
  PRODUCT_OPTIONS,
  QUANTITY_OPTIONS,
  buildEnhancedConversionUserData,
  isQualifiedForm,
  pushDataLayer,
  setEnhancedConversionUserData,
} from "@/lib/qualification";
import type { QualificationFormData, QualificationSource } from "@/lib/qualification";

type Props = {
  isOpen: boolean;
  source: QualificationSource | null;
  onClose: () => void;
};

const emptyForm: QualificationFormData = {
  fullName: "",
  phone: "",
  email: "",
  product: "",
  quantity: "",
  deadline: "",
  notes: "",
};

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-bold text-slate-900">{label}</span>
      <select
        id={id}
        value={value}
        required
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
      >
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function QualificationModal({ isOpen, source, onClose }: Props) {
  const [form, setForm] = useState<QualificationFormData>(emptyForm);

  useEffect(() => {
    if (!isOpen) return;
    setForm({ ...emptyForm, product: source?.product ?? "" });
  }, [isOpen, source?.product]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const isDisqualified = form.quantity === "Menos de 100 unidades";
  const isValid = useMemo(() => isQualifiedForm(form), [form]);

  if (!isOpen) return null;

  const updateField = (field: keyof QualificationFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));

    if (field === "quantity" && value === "Menos de 100 unidades") {
      pushDataLayer({
        event: "disqualified_lead",
        reason: "quantidade_menor_100",
        product_category: source?.productCategory ?? form.product,
        quantity_range: value,
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isDisqualified) {
      pushDataLayer({
        event: "disqualified_lead",
        reason: "quantidade_menor_100",
        product_category: source?.productCategory ?? form.product,
        quantity_range: form.quantity,
      });
      return;
    }

    if (!isValid) return;

    const leadPayload = {
      product_category: source?.productCategory ?? form.product,
      quantity_range: form.quantity,
      deadline: form.deadline,
      button_id: source?.buttonId,
      button_location: source?.buttonLocation,
    };

    const userData = buildEnhancedConversionUserData(form);

    setEnhancedConversionUserData(userData);

    pushDataLayer({
      event: "set_user_data_for_enhanced_conversions",
      user_data: userData,
      enhanced_conversion_note: "Usar apenas em tags de Google Ads / Conversões Otimizadas. Não enviar estes dados ao GA4 como parâmetros personalizados.",
    });
    pushDataLayer({ event: "qualified_lead", ...leadPayload });
    pushDataLayer({ event: "click_whatsapp_qualified", ...leadPayload });

    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/70 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-6" role="presentation">
      <button type="button" aria-label="Fechar questionário" className="absolute inset-0 h-full w-full cursor-default" onClick={onClose} />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="qualification-title"
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-green-700">Orçamento qualificado</p>
            <h2 id="qualification-title" className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Antes de seguir para o WhatsApp
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Preencha seus dados para nossa equipe entender melhor o pedido e agilizar o orçamento.
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Fechar modal" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-slate-700 transition hover:bg-slate-200">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <label htmlFor="fullName" className="block sm:col-span-2">
            <span className="text-sm font-bold text-slate-900">Nome e sobrenome</span>
            <input
              id="fullName"
              value={form.fullName}
              required
              autoComplete="name"
              placeholder="Exemplo: Christian Silva"
              onChange={(event) => updateField("fullName", event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </label>

          <label htmlFor="phone" className="block">
            <span className="text-sm font-bold text-slate-900">Telefone</span>
            <input
              id="phone"
              value={form.phone}
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="Exemplo: (35) 99999-9999"
              onChange={(event) => updateField("phone", event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </label>

          <label htmlFor="email" className="block">
            <span className="text-sm font-bold text-slate-900">E-mail</span>
            <input
              id="email"
              type="email"
              value={form.email}
              required
              autoComplete="email"
              placeholder="Exemplo: contato@email.com"
              onChange={(event) => updateField("email", event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </label>

          <SelectField id="product" label="Produto desejado" value={form.product} options={PRODUCT_OPTIONS} onChange={(value) => updateField("product", value)} />
          <SelectField id="quantity" label="Quantidade aproximada" value={form.quantity} options={QUANTITY_OPTIONS} onChange={(value) => updateField("quantity", value)} />

          {isDisqualified ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold leading-relaxed text-red-800 sm:col-span-2">
              {MINIMUM_ORDER_MESSAGE}
            </div>
          ) : null}

          <SelectField id="deadline" label="Prazo desejado" value={form.deadline} options={DEADLINE_OPTIONS} onChange={(value) => updateField("deadline", value)} />

          <label htmlFor="notes" className="block sm:col-span-2">
            <span className="text-sm font-bold text-slate-900">Observações <span className="font-medium text-slate-500">(opcional)</span></span>
            <textarea
              id="notes"
              value={form.notes}
              rows={4}
              placeholder="Exemplo: quero opções com bom custo-benefício para distribuir em um evento."
              onChange={(event) => updateField("notes", event.target.value)}
              className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </label>

          <div className="sm:col-span-2">
            <button
              id="btn-qualification-submit"
              type="submit"
              disabled={!isValid}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:shadow-none disabled:hover:bg-slate-300"
            >
              Continuar para o WhatsApp
            </button>
            <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
              Ao continuar, seus dados serão usados para atendimento do orçamento e medição de campanhas conforme políticas aplicáveis.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
