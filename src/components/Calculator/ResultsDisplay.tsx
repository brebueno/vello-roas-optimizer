
import { CalculatorResults, formatCurrency, formatPercentage } from "@/utils/calculator";
import { FadeIn } from "../Animations/FadeIn";
import { InputField } from "./InputField";

interface ResultsDisplayProps {
  results: CalculatorResults;
  onEbitdaChange: (value: number) => void;
  ebitdaValue: number;
  onTargetEbitdaPercentageChange: (value: number) => void;
  targetEbitdaPercentage: number;
}

export const ResultsDisplay = ({ 
  results, 
  onEbitdaChange, 
  ebitdaValue, 
  onTargetEbitdaPercentageChange,
  targetEbitdaPercentage
}: ResultsDisplayProps) => {
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
          
          <InputField
            id="targetEbitdaPercentage"
            label="EBITDA Alvo %"
            type="percentage"
            value={targetEbitdaPercentage}
            onChange={onTargetEbitdaPercentageChange}
            suffix="%"
            className="mb-1"
          />
          
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
        
        <div className="mt-6 pt-4 border-t bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-vello-blue mb-3">Resultados para ROAS Ideal</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="input-label">Faturamento Mínimo Necessário</h4>
              <p className="result-display text-vello-blue">
                {formatCurrency(results.minimumRevenue)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Faturamento mínimo para cobrir custos e atingir EBITDA alvo de {formatPercentage(targetEbitdaPercentage)}
              </p>
            </div>
            
            <div>
              <h4 className="input-label">ROAS Ideal</h4>
              <p className="result-display text-vello-orange">
                {results.idealRoas.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                ROAS necessário para atingir o faturamento mínimo com o investimento atual
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
