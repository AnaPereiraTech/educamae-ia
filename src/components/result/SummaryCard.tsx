interface Props {
  title: string;
  value: string;
}

export default function SummaryCard({ title, value }: Props) {
  return (
    <div className="rounded-xl bg-violet-50 p-5 text-center shadow dark:bg-slate-800">
      <h3 className="text-sm text-slate-500">{title}</h3>

      <p className="mt-2 text-2xl font-bold text-violet-700 dark:text-violet-300">
        {value}
      </p>
    </div>
  );
}
