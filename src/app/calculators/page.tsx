import type { Metadata } from "next";
import CompoundCalculator from "@/components/CompoundCalculator";
export const metadata: Metadata = { title: "Investment Calculators" };
export default function CalculatorsPage() {
  return <div className="container page-shell"><span className="eyebrow">TOOLS FOR LEARNING</span><h1>Investment calculators</h1><p className="page-intro">Explore how contributions, time and assumed returns interact. Change the inputs to understand different scenarios.</p><div className="calculator-intro"><h2>Compound growth calculator</h2><p>Estimate the future value of an initial investment plus recurring monthly contributions.</p></div><CompoundCalculator /></div>;
}
