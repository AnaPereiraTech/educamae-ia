export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("A variável VITE_GEMINI_API_KEY não foi configurada.");
}
