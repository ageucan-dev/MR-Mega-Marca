import type { QualificationFormData } from "@/lib/qualification";

export const WHATSAPP_NUMBER = "553537431554";

export function buildWhatsAppMessage(data: QualificationFormData) {
  const notes = data.notes?.trim() || "Não informado.";

  return `Olá, gostaria de fazer um orçamento com a MR Mega Marca.

Nome: ${data.fullName.trim()}
Telefone: ${data.phone.trim()}
E-mail: ${data.email.trim()}
Produto desejado: ${data.product}
Quantidade aproximada: ${data.quantity}
Prazo desejado: ${data.deadline}
Observações: ${notes}`;
}

export function buildWhatsAppUrl(data: QualificationFormData) {
  const text = encodeURIComponent(buildWhatsAppMessage(data));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
