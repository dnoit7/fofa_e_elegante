import Image from "next/image";
import Link from "next/link";

// seu WhatsApp (DDI+DDD+numero, sem + e sem espaços)
const WHATSAPP = "5534992447675";

// >>> EDITE AQUI: seus produtos reais
// img: caminho relativo dentro de /public (ex.: /produtos/vestido-midi.jpg)
const products = [
  {
    id: "vestido-mid",
    name: "Vestido Mid",
    price: 159.9,
    badge: "Novidade",
    sizes: ["46", "48", "50", "52"],
    img: "public/vestido-mid.jpg",
  },
  {
    id: "vestido-mid-azul",
    name: "Vestido Mid Azul",
    price: 219.9,
    badge: "Best Seller",
    sizes: ["48", "50", "52", "54"],
    img: "public/vestido-mid-azul.jpg",
  },
  
  // adicione mais itens aqui seguindo o mesmo padrão
];

// util: formata preço em Real
function brl(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function Catalog() {
  return (
    <section id="catalogo" className="section bg-white">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-10 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Catálogo</h2>
            <p className="mt-2 text-gray-600">Seleções atualizadas da Fofa e Elegante</p>
          </div>

          {/* Filtros estáticos de tamanho (visuais) */}
          <div className="flex flex-wrap gap-2">
            {["46", "48", "50", "52", "54", "56", "58", "60"].map((size) => (
              <span
                key={size}
                className="rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700"
                title={`Disponibilidade varia por produto`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
            >
              <div className="relative">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={900}
                  height={1200}
                  className="aspect-[3/4] w-full object-cover"
                  priority={false}
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-pink-700 shadow">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-pink-700">{brl(p.price)}</p>

                <p className="mt-2 text-xs text-gray-500">
                  Tamanhos: {p.sizes.join(" · ")}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <Link
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      `Olá! Tenho interesse no produto: ${p.name} (${brl(p.price)}). Tamanho desejado: `
                    )}`}
                    className="flex-1 rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-pink-700"
                  >
                    Comprar via WhatsApp
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              "Quero ver o catálogo completo."
            )}`}
            className="inline-flex items-center justify-center rounded-2xl border border-pink-200 px-6 py-3 text-pink-700 transition hover:bg-pink-50"
          >
            Ver catálogo completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
