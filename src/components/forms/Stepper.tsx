interface Props {
  step: number;
}

const labels = ["Dados", "Financeiro", "Despesas", "Objetivos"];

export default function Stepper({ step }: Props) {
  return (
    <div className="mb-10 flex justify-between">
      {labels.map((label, index) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-white
            ${step >= index + 1 ? "bg-violet-600" : "bg-slate-300"}`}
          >
            {index + 1}
          </div>

          <span className="mt-2 text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
