import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateProductivity, formatCurrency } from './calculator';
import { PRODUCTS, COMPANY_INFO } from '../data/products';

test('calculateProductivity returns consistent positive numbers for standard business inputs', () => {
  const result = calculateProductivity({
    teamSize: 10,
    meetingsPerWeek: 12,
    monthlyAdBudget: 2500,
    designHoursPerWeek: 15,
  });

  assert.ok(result.hoursSavedMonthly > 0, 'Total hours saved should be positive');
  assert.ok(result.meetingHoursSavedMonthly > 0, 'Meeting hours saved should be positive');
  assert.ok(result.designHoursSavedMonthly > 0, 'Design hours saved should be positive');
  assert.equal(result.adEfficiencyLiftPercent, 28, 'Ad efficiency lift should be 28%');
  assert.ok(result.estimatedAdSavingsMonthly > 0, 'Estimated ad savings should be positive');
  assert.ok(result.totalFinancialImpactMonthlyUSD > 0, 'Financial impact should be positive');
  assert.equal(result.annualizedImpactUSD, result.totalFinancialImpactMonthlyUSD * 12);
  assert.match(result.productivityMultiplier, /^[0-9]\.[0-9]x$/, 'Multiplier formatted correctly');
});

test('calculateProductivity handles zero edge cases safely without NaN or negative values', () => {
  const result = calculateProductivity({
    teamSize: 0,
    meetingsPerWeek: 0,
    monthlyAdBudget: 0,
    designHoursPerWeek: 0,
  });

  assert.equal(result.hoursSavedMonthly, 0);
  assert.equal(result.estimatedAdSavingsMonthly, 0);
  assert.equal(result.totalFinancialImpactMonthlyUSD, 0);
  assert.equal(result.annualizedImpactUSD, 0);
  assert.ok(!isNaN(result.hoursSavedMonthly));
});

test('formatCurrency formats USD and IDR currencies cleanly', () => {
  const usd = formatCurrency(1000, 'en');
  assert.ok(usd.includes('$1,000') || usd.includes('$'), 'Should format USD');

  const idr = formatCurrency(100, 'id');
  assert.ok(idr.includes('Rp') || idr.includes('IDR'), 'Should format IDR');
});

test('PRODUCTS dataset contains all 4 flagship AI suites and exact requested deployment links', () => {
  assert.equal(PRODUCTS.length, 4, 'Must have 4 flagship platforms');

  const productKeys = PRODUCTS.map(p => p.key);
  assert.ok(productKeys.includes('spotlight'), 'Contains Spotlight AI');
  assert.ok(productKeys.includes('adnet'), 'Contains Ad-Net AI');
  assert.ok(productKeys.includes('minutes'), 'Contains Minutes AI');
  assert.ok(productKeys.includes('mode'), 'Contains Mode AI');

  // Verify all deployments across all products
  const allDeployments = PRODUCTS.flatMap(p => p.deployments);
  assert.equal(allDeployments.length, 38, 'Must have all 38 provided deployment links');

  for (const dep of allDeployments) {
    assert.ok(dep.url.startsWith('https://'), `URL must be HTTPS: ${dep.url}`);
    assert.ok(dep.url.includes('vibex.business') || dep.url.includes('vercel.app'), `URL must be vibex or vercel: ${dep.url}`);
    assert.ok(dep.title.length > 0, `Title must be present for ${dep.url}`);
  }
});

test('COMPANY_INFO specifies PT DOMPET CLASSIFIED ADS and domain dompetclassifiedads.com', () => {
  assert.equal(COMPANY_INFO.legalName, 'PT DOMPET CLASSIFIED ADS');
  assert.equal(COMPANY_INFO.domain, 'dompetclassifiedads.com');
  assert.equal(COMPANY_INFO.email, 'indonesia.dompet@gmail.com');
  assert.equal(COMPANY_INFO.headquarters, 'Indonesia');
  assert.ok(COMPANY_INFO.mission.en.includes('productivity platform products—integrated with AI'));
});
