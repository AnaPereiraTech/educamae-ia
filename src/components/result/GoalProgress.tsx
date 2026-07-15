interface Props {
  saldo: number;
  meta: number;
}

export default function GoalProgress({ saldo, meta }: Props) {
  const progress = meta > 0 ? Math.min((saldo / meta) * 100, 100) : 0;

  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
      <h2 className="mb-4 text-xl font-bold">Progresso da Meta</h2>

      <div className="h-4 rounded-full bg-slate-200">
        <div
          className="h-4 rounded-full bg-violet-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4">{progress.toFixed(1)}% da meta alcançada</p>
    </div>
  );
}
