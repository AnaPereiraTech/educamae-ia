import SectionTitle from "./SectionTitle";

const steps = [
  {
    number: "1",
    title: "Preencha seus dados",
    description:
      "Informe sua renda, despesas, quantidade de filhos e objetivo financeiro.",
  },
  {
    number: "2",
    title: "A IA analisa tudo",
    description:
      "O Gemini interpreta sua situação financeira e identifica oportunidades.",
  },
  {
    number: "3",
    title: "Receba um plano personalizado",
    description:
      "Você recebe dicas práticas para economizar, aumentar a renda e alcançar seus objetivos.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <SectionTitle
        title="Como funciona?"
        subtitle="Em apenas três passos você recebe uma análise personalizada."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl bg-violet-50 p-6 dark:bg-slate-800"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-xl font-bold text-white">
              {step.number}
            </div>

            <h3 className="text-xl font-bold">{step.title}</h3>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
