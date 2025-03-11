
import { CalculatorResults, formatCurrency, formatPercentage } from "@/utils/calculator";
import { FadeIn } from "../Animations/FadeIn";
import { InputField } from "./InputField";

interface ResultsDisplayProps {
  results: CalculatorResults;
  onEbitdaChange: (value: number) => void;
  ebitdaValue: number;
}

export const ResultsDisplay = ({ results, onEbitdaChange, ebitdaValue }: ResultsDisplayProps) => {
  return (
    <FadeIn delay={300} className="mb-6">
      <div className="section-container bg-section-results">
        <h2 className="section-title mb-4">Resultados</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <InputField
            id="ebitda"
            label="EBITDA"
            type="currency"
            value={ebitdaValue}
            onChange={onEbitdaChange}
            prefix="R$"
            className="mb-1"
          />
          
          <div>
            <h3 className="input-label">EBITDA %</h3>
            <p className={`result-display ${results.ebitdaPercentage >= 0 ? "result-positive" : "result-negative"}`}>
              {formatPercentage(results.ebitdaPercentage)}
            </p>
          </div>
          
          <div className="col-span-2 mt-4 pt-4 border-t">
            <h3 className="input-label">ROAS Final</h3>
            <p className={`result-display text-xl ${results.roas >= 3 ? "result-positive" : results.roas >= 2 ? "text-yellow-500" : "result-negative"}`}>
              {results.roas.toFixed(2)}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {results.roas >= 4 
                ? "Excelente! Seu retorno sobre investimento está muito bom."
                : results.roas >= 3
                ? "Bom retorno sobre o investimento em publicidade."
                : results.roas >= 2
                ? "Retorno aceitável, mas há espaço para melhorias."
                : "Atenção: Seu retorno sobre investimento está abaixo do ideal."}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
