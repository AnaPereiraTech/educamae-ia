import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 text-4xl">{icon}</div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p>
    </article>
  );
}
