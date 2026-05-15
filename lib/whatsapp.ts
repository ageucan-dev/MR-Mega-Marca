export const WHATSAPP_NUMBER = "553537431554";

export function buildWhatsAppMessage(product?: string) {
  return `Olá, vim pelo site da Mega Marca e gostaria de solicitar um orçamento.\n\nProduto desejado: ${product ?? ""}\nQuantidade aproximada:\nPrazo desejado:\nCidade/Estado:\nJá tenho logo ou arte:\nObservações sobre o pedido:`;
}

export function buildWhatsAppUrl(product?: string) {
  const text = encodeURIComponent(buildWhatsAppMessage(product));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
