
import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "5534992447675";
const INSTAGRAM = "fofa_e_elegante";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-white to-pink-50 section">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-20 bg-primary" />
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
            Moda Plus Size 44–60
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Fofa e Elegante
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Estilo, conforto e autoestima. Peças pensadas para valorizar cada curva.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={`https://wa.me/${WHATSAPP}?text=Olá!%20Vim%20do%20site%20e%20quero%20ver%20o%20catálogo.`}
              className="btn btn-primary">
              Comprar no WhatsApp
            </Link>
            <Link href={`https://instagram.com/${INSTAGRAM}`} target="_blank" className="btn btn-outline">
              Ver Instagram
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600 md:grid-cols-4">
            {["Pix 5% OFF","Até 6x no Cartão","Troca em 7 dias","Envios p/ todo Brasil"].map((t, i) => (
              <div key={i} className="card p-3">{t}</div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-100">
            <Image src="https://placehold.co/900x1100?text=Banner+Plus+Size" alt="Modelo Plus Size" width={900} height={1100} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100 md:block">
            <p className="text-xs font-semibold text-pink-700">Nova Coleção</p>
            <p className="text-sm text-gray-700">Primavera • Verão</p>
          </div>
        </div>
      </div>
    </section>
  );
}
