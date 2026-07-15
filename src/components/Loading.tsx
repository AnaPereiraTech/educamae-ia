export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-violet-200 border-t-violet-700" />

      <h2 className="mt-8 text-3xl font-bold">EducaMãe IA</h2>

      <p className="mt-4 max-w-md text-center text-slate-500">
        Nossa Inteligência Artificial está analisando cuidadosamente sua
        situação financeira para montar um plano personalizado.
      </p>
    </div>
  );
}
