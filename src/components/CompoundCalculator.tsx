"use client";
import { useMemo, useState } from "react";

export default function CompoundCalculator() {
  const [initial, setInitial] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const months = years * 12;
    const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
    const growth = Math.pow(1 + r, months);
    const futureInitial = initial * growth;
    const futureMonthly = r === 0 ? monthly * months : monthly * ((growth - 1) / r);
    return { total: futureInitial + futureMonthly, invested: initial + monthly * months };
  }, [initial, monthly, rate, years]);

  const fmt = (v: number) => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(v);
  return (
    <div className="calculator-panel">
      <div className="calculator-fields">
        <label>Initial investment (USD)<input type="number" min="0" value={initial} onChange={e => setInitial(Math.max(0, Number(e.target.value)))} /></label>
        <label>Monthly contribution (USD)<input type="number" min="0" value={monthly} onChange={e => setMonthly(Math.max(0, Number(e.target.value)))} /></label>
        <label>Assumed annual return (%)<input type="number" min="0" max="30" step="0.5" value={rate} onChange={e => setRate(Math.max(0, Math.min(30, Number(e.target.value))))} /></label>
        <label>Investment period (years)<input type="number" min="1" max="60" value={years} onChange={e => setYears(Math.max(1, Math.min(60, Number(e.target.value))))} /></label>
      </div>
      <div className="calculator-result">
        <span>Illustrative future value</span>
        <strong>${fmt(result.total)}</strong>
        <div className="result-breakdown"><span>Amount invested</span><b>${fmt(result.invested)}</b></div>
        <div className="result-breakdown"><span>Illustrative growth</span><b>${fmt(result.total - result.invested)}</b></div>
      </div>
      <p className="fine-print">Assumes monthly contributions at month-end and a constant effective annual return converted to a monthly rate. Excludes fees, taxes and inflation. Actual returns are variable and may be negative. This is an illustration, not a forecast.</p>
    </div>
  );
}
