import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="rounded-full border border-slate-300 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
