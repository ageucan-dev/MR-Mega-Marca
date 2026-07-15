export const WHATSAPP_NUMBER = "553537431554";

type WhatsAppContext = {
  product?: string;
};

export function buildWhatsAppMessage(context: WhatsAppContext = {}) {
  const product = context.product || "";

  return `Olá, vim pelo site da Mega Marca e gostaria de solicitar um orçamento.

Produto desejado: ${product}
Quantidade aproximada:
Prazo desejado:
Cidade/Estado:
Já tenho logo ou arte:
Observações sobre o pedido:`;
}

export function buildWhatsAppUrl(product?: string) {
  const text = encodeURIComponent(buildWhatsAppMessage({ product }));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
