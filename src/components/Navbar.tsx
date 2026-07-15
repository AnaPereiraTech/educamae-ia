import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? "text-violet-600 font-semibold"
        : "text-slate-600 hover:text-violet-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-violet-700"
        >
          💜 EducaMãe IA
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Início
          </NavLink>

          <NavLink to="/form" className={navLinkClass}>
            Diagnóstico
          </NavLink>

          <NavLink to="/resultado" className={navLinkClass}>
            Resultado
          </NavLink>
        </nav>

        {/* Botões Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />

          <Link
            to="/form"
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700"
          >
            Começar Diagnóstico
          </Link>
        </div>

        {/* Menu Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="border-t bg-white px-6 py-4 md:hidden dark:bg-slate-900">
          <nav className="flex flex-col gap-4">
            <NavLink to="/" className={navLinkClass}>
              Início
            </NavLink>

            <NavLink to="/form" className={navLinkClass}>
              Diagnóstico
            </NavLink>

            <NavLink to="/resultado" className={navLinkClass}>
              Resultado
            </NavLink>

            <ThemeToggle />

            <Link
              to="/form"
              className="mt-2 rounded-xl bg-violet-600 px-4 py-3 text-center font-medium text-white"
            >
              Começar Diagnóstico
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

<NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "font-semibold text-violet-600"
      : "text-slate-600 hover:text-violet-600"
  }
>
  Início
</NavLink>;
