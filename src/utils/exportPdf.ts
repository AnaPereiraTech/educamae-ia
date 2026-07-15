import jsPDF from "jspdf";

export function exportAnalysisPdf(text: string) {
  const doc = new jsPDF();

  doc.setFont("helvetica");
  doc.setFontSize(18);
  doc.text("EducaMãe IA", 20, 20);

  doc.setFontSize(12);

  const lines = doc.splitTextToSize(text, 170);

  doc.text(lines, 20, 35);

  doc.save("diagnostico-financeiro.pdf");
}
