import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-violet-600">404</h1>

      <h2 className="mt-6 text-3xl font-bold">Página não encontrada</h2>

      <p className="mt-4 text-slate-500">
        A página que você tentou acessar não existe.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-violet-600 px-8 py-3 text-white"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
