
export interface CalculatorData {
  // Investment
  investmentValue: number;
  investmentPercentage: number;
  
  // Sales
  revenue: number;
  
  // Variable Costs
  shippingPercentage: number;
  taxPercentage: number;
  markup: number;
  marketplacePercentage: number;
  cardFeePercentage: number;
  
  // Fixed Costs
  vello: number;
  platform: number;
  team: number;
  rent: number;
  condominium: number;
  electricity: number;
  otherCosts: number;
  
  // Results
  ebitda: number;
}

export interface CalculatorResults {
  // Investment
  roas: number;
  
  // Variable Costs
  shippingCost: number;
  taxCost: number;
  markupValue: number;
  marketplaceCost: number;
  cardFeeCost: number;
  totalVariableCosts: number;
  variableCostsPercentage: number;
  
  // Contribution Margin
  contributionMargin: number;
  contributionMarginPercentage: number;
  
  // Fixed Costs
  totalFixedCosts: number;
  fixedCostsPercentage: number;
  
  // Results
  ebitda: number;
  ebitdaPercentage: number;
}

export const calculate = (data: CalculatorData): CalculatorResults => {
  // Investment
  const roas = data.revenue / data.investmentValue || 0;
  
  // Variable Costs
  const shippingCost = (data.shippingPercentage / 100) * data.revenue;
  const taxCost = (data.taxPercentage / 100) * data.revenue;
  const markupValue = data.markup || 0;
  const marketplaceCost = (data.marketplacePercentage / 100) * data.revenue;
  const cardFeeCost = (data.cardFeePercentage / 100) * data.revenue;
  
  const totalVariableCosts = shippingCost + taxCost + markupValue + marketplaceCost + cardFeeCost;
  const variableCostsPercentage = (totalVariableCosts / data.revenue) * 100 || 0;
  
  // Contribution Margin
  const contributionMargin = data.revenue - totalVariableCosts;
  const contributionMarginPercentage = (contributionMargin / data.revenue) * 100 || 0;
  
  // Fixed Costs
  const totalFixedCosts = data.vello + data.platform + data.team + data.rent + data.condominium + data.electricity + data.otherCosts;
  const fixedCostsPercentage = (totalFixedCosts / data.revenue) * 100 || 0;
  
  // Results
  const ebitda = data.ebitda !== undefined ? data.ebitda : contributionMargin - totalFixedCosts;
  const ebitdaPercentage = (ebitda / data.revenue) * 100 || 0;
  
  return {
    roas,
    shippingCost,
    taxCost,
    markupValue,
    marketplaceCost,
    cardFeeCost,
    totalVariableCosts,
    variableCostsPercentage,
    contributionMargin,
    contributionMarginPercentage,
    totalFixedCosts,
    fixedCostsPercentage,
    ebitda,
    ebitdaPercentage
  };
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};
