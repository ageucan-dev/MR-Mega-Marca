import type { QualificationFormData } from "@/lib/qualification";

export const WHATSAPP_NUMBER = "553537431554";

export function buildWhatsAppMessage(data: QualificationFormData) {
  const notes = data.notes.trim() || "Não informado.";

  return `Olá, gostaria de fazer um orçamento com a MR Mega Marca.

Produto desejado: ${data.product}
Quantidade aproximada: ${data.quantity}
Finalidade do pedido: ${data.purpose}
Cidade/Estado: ${data.cityState.trim()}
Prazo desejado: ${data.deadline}
Logo ou arte: ${data.art}
Observações: ${notes}`;
}

export function buildWhatsAppUrl(data: QualificationFormData) {
  const text = encodeURIComponent(buildWhatsAppMessage(data));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
