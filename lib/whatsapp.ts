export const WHATSAPP_NUMBER = "553537431554";

export const WHATSAPP_MESSAGE = "Olá, vim pelo site da Mega Marca e gostaria de solicitar um orçamento.";

export function buildWhatsAppMessage() {
  return WHATSAPP_MESSAGE;
}

export function buildWhatsAppUrl() {
  const text = encodeURIComponent(buildWhatsAppMessage());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
