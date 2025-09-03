
import Link from "next/link";

const WHATSAPP = "5534992447675";

const products = [
  { id: 1, name: "Vestido Midi Floral", price: "R$ 159,90", badge: "Novidade", img: "https://placehold.co/600x800?text=Vestido+Midi" },
  { id: 2, name: "Conjunto Alfaiataria", price: "R$ 219,90", badge: "Best Seller", img: "https://placehold.co/600x800?text=Conjunto+Alfaiataria" },
  { id: 3, name: "Jeans Modelador", price: "R$ 189,90", badge: "Conforto", img: "https://placehold.co/600x800?text=Jeans+Modelador" },
  { id: 4, name: "Blusa Oversized", price: "R$ 89,90", badge: "Essencial", img: "https://placehold.co/600x800?text=Blusa+Oversized" },
  { id: 5, name: "Saia Plissada", price: "R$ 139,90", badge: "Elegante", img: "https://placehold.co/600x800?text=Saia+Plissada" },
  { id: 6, name: "Macacão Comfort", price: "R$ 229,90", badge: "Novo", img: "https://placehold.co/600x800?text=Macacão+Comfort" },
  { id: 7, name: "Cardigan Tricot", price: "R$ 119,90", badge: "Quentinho", img: "https://placehold.co/600x800?text=Cardigan+Tricot" },
  { id: 8, name: "T-shirt Premium", price: "R$ 79,90", badge: "Básico", img: "https://placehold.co/600x800?text=T-shirt+Premium" },
];

export default function Catalog() {
  return (
    <section id="catalogo" className="section bg-white">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Catálogo</h2>
            <p className="mt-2 text-gray-600">Seleções queridinhas da semana</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["P-M-G", "46-48", "50-52", "54-56", "58-60"].map((size) => (
              <button key={size} className="rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700 transition hover:border-pink-300 hover:text-pink-700">
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
              <div className="relative">
                <img src={p.img} alt={p.name} className="aspect-[3/4] w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-pink-700 shadow">{p.badge}</span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-pink-700">{p.price}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Link href={`https://wa.me/${WHATSAPP}?text=Olá!%20Tenho%20interesse%20no%20produto:%20${encodeURIComponent(p.name)}`} className="flex-1 rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-pink-700">
                    Comprar via WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Quero%20ver%20o%20catálogo%20completo.`} className="btn btn-outline">
            Ver catálogo completo →
          </a>
        </div>
      </div>
    </section>
  );
}
