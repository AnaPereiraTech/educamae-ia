import { PiggyBank, Lightbulb, Wallet } from "lucide-react";

import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="funcionalidades" className="py-20">
        <SectionTitle
          title="O que o EducaMãe IA faz?"
          subtitle="Ferramentas simples para facilitar sua organização financeira."
        />

        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Wallet />}
            title="Controle de Gastos"
            description="Organize receitas e despesas de forma simples e acompanhe para onde seu dinheiro está indo."
          />

          <FeatureCard
            icon={<PiggyBank />}
            title="Cofrinho Inteligente"
            description="Defina metas e acompanhe seu progresso para criar uma reserva financeira."
          />

          <FeatureCard
            icon={<Lightbulb />}
            title="Sugestões da IA"
            description="Receba dicas de economia, planejamento e ideias para aumentar sua renda."
          />
        </div>
      </section>

      <HowItWorks />

      <CTA />
    </>
  );
}
