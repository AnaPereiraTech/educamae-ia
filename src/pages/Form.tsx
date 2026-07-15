import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { buildPrompt } from "../utils/prompt";
import { generateFinancialAnalysis } from "../services/gemini";

import Loading from "../components/Loading";
import ProgressBar from "../components/forms/ProgressBar";
import Stepper from "../components/forms/Stepper";
import Step1 from "../components/forms/Step1";
import Step2 from "../components/forms/Step2";
import Step3 from "../components/forms/Step3";
import Step4 from "../components/forms/Step4";

import type { FinanceData } from "../types/finance";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialData: FinanceData = {
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
};

export default function Form() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const [data, setData] = useLocalStorage<FinanceData>(
    "finance-data",
    initialData,
  );

  async function next() {
    if (step < 4) {
      setStep((prev) => prev + 1);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const prompt = buildPrompt(data);

      const response = await generateFinancialAnalysis(prompt);

      localStorage.setItem("gemini-analysis", response);

      navigate("/resultado");
    } catch (err) {
      console.error(err);

      setError("Não foi possível gerar seu diagnóstico. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function previous() {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow dark:bg-slate-900">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Diagnóstico Financeiro
      </h1>

      <ProgressBar currentStep={step} />

      <Stepper step={step} />

      {step === 1 && <Step1 data={data} setData={setData} />}
      {step === 2 && <Step2 data={data} setData={setData} />}
      {step === 3 && <Step3 data={data} setData={setData} />}
      {step === 4 && <Step4 data={data} setData={setData} />}

      {error && (
        <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      <div className="mt-10 flex justify-between">
        <button
          onClick={previous}
          disabled={step === 1 || loading}
          className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100 disabled:opacity-50"
        >
          Voltar
        </button>

        <button
          onClick={next}
          disabled={loading}
          className="rounded-lg bg-violet-600 px-6 py-3 text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Gerando..."
            : step === 4
              ? "Gerar Diagnóstico"
              : "Próximo"}
        </button>
      </div>
    </section>
  );
}
