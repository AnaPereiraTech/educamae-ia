interface Props {
  emoji: string;
  title: string;
  content: string;
}

export default function AISection({ emoji, title, content }: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
      <h2 className="mb-4 text-2xl font-bold text-violet-700">
        {emoji} {title}
      </h2>

      <div className="whitespace-pre-wrap leading-8">{content}</div>
    </div>
  );
}
