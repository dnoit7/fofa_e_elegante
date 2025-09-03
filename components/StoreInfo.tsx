
export default function StoreInfo() {
  const WHATSAPP = "5534992447675";
  const INSTAGRAM = "fofa_e_elegante";
  return (
    <section id="contato" className="section bg-white">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Onde estamos</h2>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li><span className="font-semibold text-pink-700">Endereço: </span>Rua José de Santana, 454, Sala 211, Centro – Patos de Minas - MG</li>
            <li><span className="font-semibold text-pink-700">Horário: </span>Seg–Sex 08:30–18:00 • Sáb 09:00–13:00</li>
            <li><span className="font-semibold text-pink-700">Pagamento: </span>Pix, Cartão de Crédito/Débito e Dinheiro</li>
            <li><span className="font-semibold text-pink-700">WhatsApp: </span>
              <a className="link" href={`https://wa.me/${WHATSAPP}`}> (34) — Fale com a gente</a></li>
            <li><span className="font-semibold text-pink-700">Instagram: </span>
              <a className="link" href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer">
                @{INSTAGRAM}
              </a></li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`https://wa.me/${WHATSAPP}?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20peças.`} className="btn btn-primary">Chamar no WhatsApp</a>
            <a href={`https://wa.me/${WHATSAPP}?text=Olá!%20Quero%20agendar%20uma%20visita.`} className="btn btn-outline">Agendar visita</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100">
          <iframe title="Mapa Loja Fofa e Elegante"
            src="https://www.google.com/maps?q=Rua%20Jos%C3%A9%20de%20Santana%2C%20454%2C%20Patos%20de%20Minas&output=embed"
            className="h-80 w-full" loading="lazy" allowFullScreen />
        </div>
      </div>
    </section>
  );
}
