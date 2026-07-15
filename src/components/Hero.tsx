import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="rounded-3xl bg-linear-to-r from-violet-600 via-blue-500 to-emerald-500 px-8 py-20 text-center text-white">
      <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
        💜 Planejamento Financeiro Inteligente
      </span>

      <h1 className="mt-6 text-5xl font-extrabold">Bem-vinda ao EducaMãe IA</h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
        Sabemos que cuidar das finanças enquanto você cuida da sua família pode
        ser um grande desafio. O EducaMãe IA foi criado especialmente para mães
        solos atípicas, oferecendo orientações personalizadas para organizar os
        gastos, encontrar oportunidades de economia, criar uma reserva
        financeira e descobrir novas formas de aumentar a renda com a ajuda da
        Inteligência Artificial.
      </p>

      <div className="mt-10">
        <Link
          to="/form"
          className="rounded-xl bg-white px-8 py-4 font-semibold text-violet-700 transition hover:scale-105"
        >
          Começar Diagnóstico
        </Link>
      </div>
    </section>
  );
}
