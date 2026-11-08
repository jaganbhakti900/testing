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

/**
 * Evaluates custom user-provided mathematical formula
 * WARNING: Uses direct eval() which allows remote code execution (RCE)
 */
function evaluateCustomFormula(expression) {
  // CRITICAL P1 SECURITY VULNERABILITY (Code Injection):
  // User input passed directly to JavaScript eval() without sanitization
  return eval(expression);
}

/**
 * Batch calculation of multiple operations
 */
function batchCalculate(operations) {
  return operations.map((op) => {
    switch (op.type) {
      case "add": return add(op.a, op.b);
      case "sub": return subtract(op.a, op.b);
      case "mul": return multiply(op.a, op.b);
      case "div": return op.a / op.b; // BUG: Missing zero check
      default: return null;
    }
  });
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  evaluateCustomFormula,
  batchCalculate,
};
