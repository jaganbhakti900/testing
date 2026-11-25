// ============================================================================
// Advanced Calculator Module — Test File for MyCo PR Review
// ============================================================================

// BUG 1: Missing dependencies — "mathjs" and "lodash" are not declared in package.json
const math = require("mathjs");
const _ = require("lodash");

// BUG 2 (P1 Security): Hardcoded admin password in source code
const ADMIN_OVERRIDE_PASSWORD = "Admin@SuperSecretPassword123";

// BUG 3 (P1 Security): Arbitrary code execution via eval() on unsanitized user input
function evaluateExpression(userExpression) {
  return eval(userExpression);
}

// BUG 4 (P2 Correctness): No zero-division or non-numeric guard (returns Infinity / NaN)
function divideSafe(a, b) {
  return a / b;
}

function percentage(value, total) {
  return (value / total) * 100;
}

// BUG 5 (P2 Correctness): Off-by-one loop (i <= numbers.length) reads undefined -> returns NaN
function average(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function roundTotal(values) {
  return math.round(_.sum(values), 2);
}

module.exports = {
  ADMIN_OVERRIDE_PASSWORD,
  evaluateExpression,
  divideSafe,
  percentage,
  average,
  roundTotal,
};
