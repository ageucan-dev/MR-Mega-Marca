export const PRODUCT_OPTIONS = [
  "Chaveiros personalizados",
  "Canetas personalizadas",
  "Brindes personalizados",
  "Camisetas ou uniformes",
  "Sacochilas",
  "Kits corporativos",
  "Outro produto",
] as const;

export const QUANTITY_OPTIONS = [
  "Menos de 100 unidades",
  "100 a 300 unidades",
  "301 a 500 unidades",
  "501 a 1.000 unidades",
  "Acima de 1.000 unidades",
  "Ainda não sei",
] as const;

export const PURPOSE_OPTIONS = [
  "Empresa",
  "Evento",
  "Equipe ou colaboradores",
  "Ação promocional",
  "Uso pessoal",
] as const;

export const DEADLINE_OPTIONS = [
  "Tenho urgência",
  "Até 15 dias",
  "Até 30 dias",
  "Mais de 30 dias",
  "Ainda não tenho prazo definido",
] as const;

export const ART_OPTIONS = [
  "Sim, tenho logo ou arte",
  "Tenho apenas a logo",
  "Ainda não tenho arte",
  "Preciso de orientação",
] as const;

export type ProductOption = (typeof PRODUCT_OPTIONS)[number];
export type QuantityOption = (typeof QUANTITY_OPTIONS)[number];
export type PurposeOption = (typeof PURPOSE_OPTIONS)[number];
export type DeadlineOption = (typeof DEADLINE_OPTIONS)[number];
export type ArtOption = (typeof ART_OPTIONS)[number];

export type QualificationFormData = {
  product: string;
  quantity: string;
  purpose: string;
  cityState: string;
  deadline: string;
  art: string;
  notes: string;
};

export type QualificationSource = {
  buttonId: string;
  buttonLocation: string;
  productCategory: string;
  product?: string;
};

export const MINIMUM_ORDER_MESSAGE =
  "No momento, a MR Mega Marca trabalha principalmente com pedidos corporativos e quantidades maiores. Para seguir com o orçamento pelo WhatsApp, informe uma quantidade acima de 100 unidades.";

export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const w = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);
}

export function isQualifiedForm(form: QualificationFormData) {
  return Boolean(
    form.product &&
      form.quantity &&
      form.quantity !== "Menos de 100 unidades" &&
      form.purpose &&
      form.cityState.trim() &&
      form.deadline &&
      form.art,
  );
}
