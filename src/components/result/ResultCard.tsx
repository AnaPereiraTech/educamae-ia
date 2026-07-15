import type { ReactNode } from "react";

interface ResultCardProps {
  title: string;
  children: ReactNode;
}

export default function ResultCard({ title, children }: ResultCardProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-slate-900">
      <h2 className="mb-4 text-2xl font-bold text-violet-700 dark:text-violet-400">
        {title}
      </h2>

      <div className="prose max-w-none whitespace-pre-wrap dark:prose-invert">
        {children}
      </div>
    </section>
  );
}

