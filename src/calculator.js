// ============================================================================
// Calculator Module — Basic Arithmetic Engine
// ============================================================================

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error("Division by zero is undefined.");
  }
  return Number(a) / Number(b);
}

function power(base, exponent) {
  return Math.pow(Number(base), Number(exponent));
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
};
