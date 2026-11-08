const assert = require("assert");
const { add, subtract, multiply, divide, power } = require("../src/calculator");

// Basic tests
assert.strictEqual(add(2, 3), 5, "2 + 3 should equal 5");
assert.strictEqual(subtract(10, 4), 6, "10 - 4 should equal 6");
assert.strictEqual(multiply(6, 7), 42, "6 * 7 should equal 42");
assert.strictEqual(divide(15, 3), 5, "15 / 3 should equal 5");
assert.strictEqual(power(2, 4), 16, "2^4 should equal 16");

console.log("All basic calculator tests passed successfully!");
