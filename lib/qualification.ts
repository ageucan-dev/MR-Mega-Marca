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

export const DEADLINE_OPTIONS = [
  "Tenho urgência",
  "Até 15 dias",
  "Até 30 dias",
  "Mais de 30 dias",
  "Ainda não tenho prazo definido",
] as const;

export type ProductOption = (typeof PRODUCT_OPTIONS)[number];
export type QuantityOption = (typeof QUANTITY_OPTIONS)[number];
export type DeadlineOption = (typeof DEADLINE_OPTIONS)[number];

export type QualificationFormData = {
  fullName: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  deadline: string;
  notes: string;
};

export type QualificationSource = {
  buttonId: string;
  buttonLocation: string;
  productCategory: string;
  product?: string;
};

export type EnhancedConversionUserData = {
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
};

type GtagWindow = Window & {
  dataLayer?: Array<Record<string, unknown> | unknown[]>;
  gtag?: (...args: unknown[]) => void;
};

export const MINIMUM_ORDER_MESSAGE =
  "No momento, a MR Mega Marca trabalha principalmente com pedidos corporativos e quantidades maiores. Para seguir com o orçamento pelo WhatsApp, informe uma quantidade acima de 100 unidades.";

export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);
}

export function setEnhancedConversionUserData(userData: EnhancedConversionUserData) {
  if (typeof window === "undefined") return;

  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || function gtagFallback(...args: unknown[]) {
    w.dataLayer?.push(args);
  };

  w.gtag("set", "user_data", {
    email: userData.email,
    phone_number: userData.phone_number,
    address: {
      first_name: userData.first_name,
      last_name: userData.last_name,
    },
  });
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (!digits) return "";
  if (digits.startsWith("55")) return `+${digits}`;

  return `+55${digits}`;
}

export function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] ?? "";
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";

  return { firstName, lastName };
}

export function buildEnhancedConversionUserData(form: QualificationFormData): EnhancedConversionUserData {
  const { firstName, lastName } = splitFullName(form.fullName);

  return {
    email: normalizeEmail(form.email),
    phone_number: normalizePhone(form.phone),
    first_name: firstName,
    last_name: lastName,
  };
}

export function isQualifiedForm(form: QualificationFormData) {
  return Boolean(
    form.fullName.trim() &&
      form.phone.trim() &&
      form.email.trim() &&
      form.product &&
      form.quantity &&
      form.quantity !== "Menos de 100 unidades" &&
      form.deadline,
  );
}
