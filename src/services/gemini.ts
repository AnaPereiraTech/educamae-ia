import { GEMINI_API_KEY } from "../config/env";

export async function generateFinancialAnalysis(prompt: string) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Não foi possível gerar o diagnóstico.");
  }

  const data = await response.json();

  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ??
    "Não foi possível gerar uma resposta."
  );
}
