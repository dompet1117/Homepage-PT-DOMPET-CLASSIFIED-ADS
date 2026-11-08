export interface ProductivityInputs {
  teamSize: number;
  meetingsPerWeek: number;
  monthlyAdBudget: number; // in USD
  designHoursPerWeek: number;
}

export interface ProductivityResults {
  hoursSavedMonthly: number;
  meetingHoursSavedMonthly: number;
  designHoursSavedMonthly: number;
  adEfficiencyLiftPercent: number;
  estimatedAdSavingsMonthly: number;
  totalFinancialImpactMonthlyUSD: number;
  annualizedImpactUSD: number;
  productivityMultiplier: string;
}

/**
 * Calculates estimated business productivity impact across PT DOMPET CLASSIFIED ADS platforms:
 * - Minutes AI: cuts meeting documentation and follow-up overhead by ~75%
 * - Mode AI & Spotlight AI: accelerates design and marketing asset prep by ~70%
 * - Ad-Net AI: yields ~28% average cost efficiency improvement in ad placements & targeting
 * - Blended labor valuation: average ~$35/hour standard productivity rate
 */
export function calculateProductivity(inputs: ProductivityInputs): ProductivityResults {
  const team = Math.max(1, inputs.teamSize);
  const meetings = Math.max(0, inputs.meetingsPerWeek);
  const budget = Math.max(0, inputs.monthlyAdBudget);
  const designHours = Math.max(0, inputs.designHoursPerWeek);

  // 4.33 weeks per month
  const weeksPerMonth = 4.33;

  // Minutes AI: saves approx 0.75 hours of manual note-taking, transcription, and follow-up per meeting
  const meetingHoursSavedMonthly = Math.round(meetings * 0.75 * weeksPerMonth);

  // Spotlight & Mode AI: saves approx 70% of design turnaround hours
  const designHoursSavedMonthly = Math.round(designHours * 0.70 * weeksPerMonth);

  const totalHoursSavedMonthly = meetingHoursSavedMonthly + designHoursSavedMonthly;

  // Standard blended operational labor cost per hour
  const hourlyLaborValue = 35;
  const laborSavingsUSD = totalHoursSavedMonthly * hourlyLaborValue;

  // Ad-Net AI optimization efficiency: 28% estimated cost savings / yield uplift
  const adEfficiencyLiftPercent = 28;
  const estimatedAdSavingsMonthly = Math.round(budget * (adEfficiencyLiftPercent / 100));

  const totalFinancialImpactMonthlyUSD = laborSavingsUSD + estimatedAdSavingsMonthly;
  const annualizedImpactUSD = totalFinancialImpactMonthlyUSD * 12;

  // Productivity multiplier score: 1.5x up to 5.0x
  const baseMultiplier = 1.6;
  const calculatedBoost = Math.min(3.4, (totalHoursSavedMonthly / (team * 40)) * 2 + (budget > 1000 ? 0.6 : 0.2));
  const productivityMultiplier = (baseMultiplier + calculatedBoost).toFixed(1) + 'x';

  return {
    hoursSavedMonthly: totalHoursSavedMonthly,
    meetingHoursSavedMonthly,
    designHoursSavedMonthly,
    adEfficiencyLiftPercent,
    estimatedAdSavingsMonthly,
    totalFinancialImpactMonthlyUSD,
    annualizedImpactUSD,
    productivityMultiplier,
  };
}

export function formatCurrency(amount: number, locale: 'en' | 'id' = 'en'): string {
  if (locale === 'id') {
    // Convert to IDR equivalent (rough rate ~15,500)
    const idrAmount = amount * 15500;
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(idrAmount);
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}
