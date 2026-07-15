export default function Footer() {
  return (
    <footer className="border-t bg-white py-6 text-center text-sm text-slate-600 transition-colors dark:bg-slate-900 dark:text-slate-300">
      <p>
        © {new Date().getFullYear()} EducaMãe IA • Desenvolvido com React,
        TypeScript e Gemini AI.
      </p>
    </footer>
  );
}
