import { Link } from "react-router-dom";

import SummaryCard from "../components/result/SummaryCard";
import AISection from "../components/result/AISection";
import ExpenseChart from "../components/charts/ExpenseChart";
import GoalProgress from "../components/result/GoalProgress";

import { useLocalStorage } from "../hooks/useLocalStorage";
import type { FinanceData } from "../types/finance";

import { exportAnalysisPdf } from "../utils/exportPdf";

export default function Result() {
  const [financeData] = useLocalStorage<FinanceData>("finance-data", {
    nome: "",
    idade: "",
    filhos: 0,
    renda: 0,
    beneficio: "",
    objetivo: "",
    moradia: 0,
    alimentacao: 0,
    terapias: 0,
    medicamentos: 0,
    transporte: 0,
    escola: 0,
    outros: 0,
    meta: 0,
    prazo: "",
  });

  const [analysis] = useLocalStorage<string>(
    "gemini-analysis",
    "Nenhum diagnóstico encontrado.",
  );

  const despesas =
    financeData.moradia +
    financeData.alimentacao +
    financeData.terapias +
    financeData.medicamentos +
    financeData.transporte +
    financeData.escola +
    financeData.outros;

  const saldo = financeData.renda - despesas;

  function getSection(title: string) {
    const regex = new RegExp(`${title}[\\s\\S]*?(?=\\n#|$)`, "i");
    return analysis.match(regex)?.[0] ?? "";
  }

  const diagnostico = getSection("Diagnóstico Financeiro");
  const gastos = getSection("Principais Gastos");
  const economia = getSection("Como Economizar");
  const rendaExtra = getSection("Ideias para Aumentar a Renda");
  const plano = getSection("Plano Financeiro");
  const mensagem = getSection("Mensagem Final");

  function copyAnalysis() {
    navigator.clipboard.writeText(analysis);
    alert("Diagnóstico copiado!");
  }

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-violet-700">
          Resultado da Análise
        </h1>

        <p className="mt-3 text-slate-500">
          Confira abaixo sua análise personalizada.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <SummaryCard
          title="Receita"
          value={`R$ ${financeData.renda.toFixed(2)}`}
        />

        <SummaryCard title="Despesas" value={`R$ ${despesas.toFixed(2)}`} />

        <SummaryCard title="Saldo" value={`R$ ${saldo.toFixed(2)}`} />
      </div>

      <ExpenseChart data={financeData} />

      <GoalProgress saldo={saldo} meta={financeData.meta} />

      <div className="space-y-6">
        <AISection
          emoji="🌷"
          title="Diagnóstico Financeiro"
          content={diagnostico}
        />

        <AISection emoji="💸" title="Principais Gastos" content={gastos} />

        <AISection emoji="💡" title="Como Economizar" content={economia} />

        <AISection
          emoji="🚀"
          title="Ideias para Aumentar a Renda"
          content={rendaExtra}
        />

        <AISection emoji="🪙" title="Plano Financeiro" content={plano} />

        <AISection emoji="❤️" title="Mensagem Final" content={mensagem} />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => exportAnalysisPdf(analysis)}
          className="rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          📄 Exportar PDF
        </button>

        <button
          onClick={copyAnalysis}
          className="rounded-xl bg-sky-600 px-6 py-3 text-white hover:bg-sky-700"
        >
          📋 Copiar Diagnóstico
        </button>

        <Link
          to="/form"
          className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
        >
          🔄 Novo Diagnóstico
        </Link>
      </div>
    </div>
  );
}
