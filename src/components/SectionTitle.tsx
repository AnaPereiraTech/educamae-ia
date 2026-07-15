interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-violet-700 dark:text-violet-400">
        {title}
      </h2>

      <p className="mt-3 text-slate-600 dark:text-slate-300">{subtitle}</p>
    </div>
  );
}
