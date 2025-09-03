
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fofa e Elegante — Moda Plus Size",
  description: "Moda Plus Size com estilo e conforto.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

const WHATSAPP = "5534992447675";
const INSTAGRAM = "fofa_e_elegante";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-content-center rounded-xl bg-primary text-white">
            <span className="text-sm font-extrabold">FE</span>
          </div>
          <span className="text-lg font-extrabold">Fofa e Elegante</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex text-sm text-gray-700">
          <Link className="hover:text-pink-700" href="/#catalogo">Catálogo</Link>
          <Link className="hover:text-pink-700" href="/#sobre">Sobre</Link>
          <Link className="hover:text-pink-700" href="/#contato">Contato</Link>
          <Link className="btn btn-primary text-sm" href={`https://wa.me/${WHATSAPP}`}>
            WhatsApp
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-lg font-extrabold text-primary">Fofa e Elegante</p>
          <p className="text-sm text-gray-500">Moda Plus Size com estilo e conforto</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <Link className="hover:text-pink-700" href="/#catalogo">Catálogo</Link>
          <Link className="hover:text-pink-700" href="/#sobre">Sobre</Link>
          <Link className="hover:text-pink-700" href="/#contato">Contato</Link>
          <Link className="hover:text-pink-700" href="/politicas/troca-devolucao">Troca & Devolução</Link>
          <Link className="hover:text-pink-700" href="/politicas/privacidade">Privacidade</Link>
          <Link className="hover:text-pink-700" href="/politicas/frete">Frete</Link>
        </div>
      </div>
      <div className="bg-gray-50 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Fofa e Elegante. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Olá!%20Preciso%20de%20ajuda.`}
      className="fixed bottom-5 right-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition hover:scale-105"
      aria-label="Abrir WhatsApp"
      title="Falar no WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7">
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.07 0C5.52 0 .2 5.33.2 11.9c0 2.1.56 4.16 1.62 5.97L0 24l6.3-1.77a11.88 11.88 0 0 0 5.77 1.48h.01c6.55 0 11.87-5.33 11.87-11.9 0-3.18-1.24-6.17-3.43-8.33ZM12.08 21.3a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.74 1.05 1-3.64-.22-.37a9.43 9.43 0 0 1-1.44-5.07c0-5.2 4.25-9.43 9.47-9.43 2.54 0 4.93.99 6.72 2.78 1.79 1.8 2.78 4.18 2.78 6.72 0 5.2-4.25 9.47-9.44 9.47Zm5.46-7.13c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.69.16-.2.3-.79.97-.97 1.17-.18.2-.36.22-.66.07-1.8-.9-2.98-1.61-4.17-3.64-.31-.53.31-.5.9-1.66.1-.2.05-.36-.03-.51-.08-.15-.69-1.67-.95-2.29-.25-.6-.5-.51-.69-.52l-.59-.01c-.2 0-.52.08-.79.36-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.48.71.31 1.26.5 1.68.64.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}
