// ============================================================================
// Advanced Calculator Module — Test File for MyCo PR Review
// ============================================================================

function divideSafe(a, b) {
  // Missing zero-division & NaN guard intentionally for AI review testing
  return a / b;
}

function percentage(value, total) {
  return (value / total) * 100;
}

function compoundInterest(principal, rate, timesPerYear, years) {
  const amount = principal * Math.pow(1 + rate / timesPerYear, timesPerYear * years);
  return amount - principal;
}

function average(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

module.exports = {
  divideSafe,
  percentage,
  compoundInterest,
  average,
};
