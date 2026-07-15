interface Props {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: Props) {
  const progress = (currentStep / 4) * 100;

  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between">
        <span>Etapa {currentStep} de 4</span>

        <span>{progress}%</span>
      </div>

      <div className="h-3 rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-violet-600 transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
