
export default function Testimonials() {
  const items = [
    { name: "Carla A.", text: "Peças lindíssimas e com caimento perfeito! Atendimento atencioso e entrega rápida." },
    { name: "Juliana M.", text: "Finalmente roupas plus size modernas que me deixam confiante! Amei a qualidade." },
    { name: "Renata P.", text: "Comprei um vestido para um evento e foi sucesso. Voltarei sempre!" },
  ];
  return (
    <section className="section bg-pink-50">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">Amor em cada compra ❤️</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="card p-6">
              <p className="text-gray-700">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold text-pink-700">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
