
import { useState, useEffect } from "react";
import { InputField } from "./InputField";
import { InputSection } from "./InputSection";
import { ResultsDisplay } from "./ResultsDisplay";
import { CalculatorData, calculate, formatCurrency, formatPercentage } from "@/utils/calculator";

export const ROASCalculator = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    // Investment
    investmentValue: 20000,
    investmentPercentage: 27,
    
    // Sales
    revenue: 74975.39,
    
    // Variable Costs
    shippingPercentage: 10,
    taxPercentage: 6,
    markup: 4.10,
    marketplacePercentage: 10,
    cardFeePercentage: 3.5,
    
    // Fixed Costs
    vello: 3000,
    platform: 1000,
    team: 6000,
    rent: 0,
    condominium: 0,
    electricity: 0,
    otherCosts: 0,
  });
  
  const [results, setResults] = useState(calculate(formData));
  
  useEffect(() => {
    const newResults = calculate(formData);
    setResults(newResults);
  }, [formData]);
  
  const updateField = (field: keyof CalculatorData, value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* Investment & Performance */}
          <InputSection 
            title="Investimento & Performance" 
            color="bg-section-investment"
            delay={100}
          >
            <InputField
              id="investmentValue"
              label="INVESTIMENTO (R$)"
              type="currency"
              value={formData.investmentValue}
              onChange={(value) => updateField("investmentValue", value)}
              prefix="R$"
            />
            
            <InputField
              id="investmentPercentage"
              label="PERCENTUAL DE INVESTIMENTO %"
              type="percentage"
              value={formData.investmentPercentage}
              onChange={(value) => updateField("investmentPercentage", value)}
              suffix="%"
            />
            
            <div className="mb-4">
              <p className="input-label">ROAS</p>
              <p className={`result-display ${results.roas >= 3 ? "text-vello-green" : "text-vello-orange"}`}>
                {results.roas.toFixed(2)}
              </p>
            </div>
          </InputSection>
          
          {/* Sales */}
          <InputSection 
            title="Vendas" 
            color="bg-section-sales"
            delay={200}
          >
            <InputField
              id="revenue"
              label="Faturamento Real (R$)"
              type="currency"
              value={formData.revenue}
              onChange={(value) => updateField("revenue", value)}
              prefix="R$"
            />
          </InputSection>
          
          {/* Variable Costs */}
          <InputSection 
            title="Custos Variáveis" 
            color="bg-section-variable"
            delay={300}
          >
            <div className="grid grid-cols-2 gap-4">
              <InputField
                id="shippingPercentage"
                label="Frete %"
                type="percentage"
                value={formData.shippingPercentage}
                onChange={(value) => updateField("shippingPercentage", value)}
                suffix="%"
                className="mb-1"
              />
              
              <div className="mb-4">
                <p className="input-label">Frete (R$)</p>
                <p className="result-display text-vello-dark-gray">
                  {formatCurrency(results.shippingCost)}
                </p>
              </div>
              
              <InputField
                id="taxPercentage"
                label="Imposto %"
                type="percentage"
                value={formData.taxPercentage}
                onChange={(value) => updateField("taxPercentage", value)}
                suffix="%"
                className="mb-1"
              />
              
              <div className="mb-4">
                <p className="input-label">Imposto (R$)</p>
                <p className="result-display text-vello-dark-gray">
                  {formatCurrency(results.taxCost)}
                </p>
              </div>
              
              <InputField
                id="markup"
                label="Markup"
                type="number"
                value={formData.markup}
                onChange={(value) => updateField("markup", value)}
                className="mb-1"
              />
              
              <div className="mb-4">
                <p className="input-label">Markup (R$)</p>
                <p className="result-display text-vello-dark-gray">
                  {formatCurrency(results.markupValue)}
                </p>
              </div>
              
              <InputField
                id="marketplacePercentage"
                label="Marketplace %"
                type="percentage"
                value={formData.marketplacePercentage}
                onChange={(value) => updateField("marketplacePercentage", value)}
                suffix="%"
                className="mb-1"
              />
              
              <div className="mb-4">
                <p className="input-label">Marketplace (R$)</p>
                <p className="result-display text-vello-dark-gray">
                  {formatCurrency(results.marketplaceCost)}
                </p>
              </div>
              
              <InputField
                id="cardFeePercentage"
                label="Taxa de Cartão %"
                type="percentage"
                value={formData.cardFeePercentage}
                onChange={(value) => updateField("cardFeePercentage", value)}
                suffix="%"
                className="mb-1"
              />
              
              <div className="mb-4">
                <p className="input-label">Taxa de Cartão (R$)</p>
                <p className="result-display text-vello-dark-gray">
                  {formatCurrency(results.cardFeeCost)}
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4">
              <div>
                <p className="input-label">Total Custos Variáveis</p>
                <p className="result-display text-vello-dark-gray">
                  {formatCurrency(results.totalVariableCosts)}
                </p>
              </div>
              
              <div>
                <p className="input-label">Custos Variáveis %</p>
                <p className="result-display text-vello-dark-gray">
                  {formatPercentage(results.variableCostsPercentage)}
                </p>
              </div>
            </div>
          </InputSection>
        </div>
        
        <div>
          {/* Contribution Margin */}
          <InputSection 
            title="Margem de Contribuição" 
            color="bg-section-sales"
            delay={400}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="input-label">Margem de Contribuição (R$)</p>
                <p className="result-display text-vello-dark-gray">
                  {formatCurrency(results.contributionMargin)}
                </p>
              </div>
              
              <div>
                <p className="input-label">Margem de Contribuição %</p>
                <p className="result-display text-vello-dark-gray">
                  {formatPercentage(results.contributionMarginPercentage)}
                </p>
              </div>
            </div>
          </InputSection>
          
          {/* Fixed Costs */}
          <InputSection 
            title="Custos Fixos" 
            color="bg-section-fixed"
            delay={500}
          >
            <InputField
              id="vello"
              label="Vello"
              type="currency"
              value={formData.vello}
              onChange={(value) => updateField("vello", value)}
              prefix="R$"
            />
            
            <InputField
              id="platform"
              label="Plataforma (ecommerce,email,marketplace...)"
              type="currency"
              value={formData.platform}
              onChange={(value) => updateField("platform", value)}
              prefix="R$"
            />
            
            <InputField
              id="team"
              label="Equipe (Operação)"
              type="currency"
              value={formData.team}
              onChange={(value) => updateField("team", value)}
              prefix="R$"
            />
            
            <InputField
              id="rent"
              label="Aluguel"
              type="currency"
              value={formData.rent}
              onChange={(value) => updateField("rent", value)}
              prefix="R$"
            />
            
            <InputField
              id="condominium"
              label="Condomínio"
              type="currency"
              value={formData.condominium}
              onChange={(value) => updateField("condominium", value)}
              prefix="R$"
            />
            
            <InputField
              id="electricity"
              label="Luz"
              type="currency"
              value={formData.electricity}
              onChange={(value) => updateField("electricity", value)}
              prefix="R$"
            />
            
            <InputField
              id="otherCosts"
              label="Outras pessoas/gastos"
              type="currency"
              value={formData.otherCosts}
              onChange={(value) => updateField("otherCosts", value)}
              prefix="R$"
            />
            
            <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4">
              <div>
                <p className="input-label">Total Custos Fixos</p>
                <p className="result-display text-vello-dark-gray">
                  {formatCurrency(results.totalFixedCosts)}
                </p>
              </div>
              
              <div>
                <p className="input-label">Custos Fixos %</p>
                <p className="result-display text-vello-dark-gray">
                  {formatPercentage(results.fixedCostsPercentage)}
                </p>
              </div>
            </div>
          </InputSection>
          
          {/* Results */}
          <ResultsDisplay results={results} />
        </div>
      </div>
    </div>
  );
};
