import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="my-20 rounded-3xl bg-violet-600 p-12 text-center text-white">
      <h2 className="text-4xl font-bold">
        Pronta para cuidar melhor das suas finanças?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-violet-100">
        Descubra onde seu dinheiro está indo e receba recomendações feitas
        especialmente para você.
      </p>

      <Link
        to="/form"
        className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-violet-700 transition hover:bg-slate-100"
      >
        Fazer meu diagnóstico
      </Link>
    </section>
  );
}
