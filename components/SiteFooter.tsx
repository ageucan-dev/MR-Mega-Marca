"use client";

import Image from "next/image";

const businessAddress = "Tv. Zenun, 102 - Centro, Campestre - MG, 37730-000, Brazil";
const businessMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(businessAddress)}&output=embed`;
const businessMapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-950">
      <div className="container-section grid gap-8 md:grid-cols-2">
        <div>
          <Image src="/images/logo-mr-mega-marca.png" alt="MR & Mega Marca - fornecedor de brindes personalizados" width={260} height={80} className="h-auto w-[220px]" />
          <p className="mt-4 max-w-lg text-slate-700">Fornecedor de brindes e produtos personalizados para empresas, eventos e ações promocionais.</p>
          <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">Endereço</p>
            <address className="mt-2 text-sm not-italic leading-relaxed text-slate-700">{businessAddress}</address>
            <button type="button" onClick={() => navigator.clipboard.writeText(businessAddress)} className="mt-3 inline-flex rounded-full bg-green-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-green-700">Copiar endereço</button>
          </div>
          <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <iframe title="Localização da MR & Mega Marca no Google Maps" src={businessMapEmbedUrl} className="h-56 w-full border-0 sm:h-64" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <a href={businessMapSearchUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700">Abrir localização no Google Maps</a>
        </div>
        <div className="text-sm text-slate-800">
          <p><strong>Endereço:</strong> Tv. Zenun, 102 - Centro, Campestre - MG</p>
          <p><strong>WhatsApp:</strong> 35 3743 1554</p>
          <p><strong>Domínio:</strong> www.mrmegamarca.com.br</p>
          <p><strong>CNPJ:</strong> 09.633.083/0001-20</p>
          <div className="mt-4 flex flex-wrap gap-4 font-semibold text-slate-900">
            {[["Produtos", "produtos"], ["Como Funciona", "como-funciona"], ["FAQ", "faq"], ["Contato", "contato"]].map(([name, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-green-700">{name}</a>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Selos de segurança</p>
            <Image src="/images/selos/selos-verificacao.png" alt="Selos de verificação Reclame Aqui, Google Safe Browsing e SSL certificado" width={1000} height={260} className="h-auto w-full max-w-[520px] rounded-2xl object-contain" />
          </div>
          <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} MR & Mega Marca. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
