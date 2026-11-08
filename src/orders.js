// ============================================================================
// Order Service — Sample Module for Automated SDET Review
// ============================================================================

const db = require("./db");

/**
 * Searches orders by customer query
 * Note: Deliberately contains a raw SQL concatenation vulnerability for Myco PR testing
 */
async function searchCustomerOrders(customerId, searchQuery) {
  // CRITICAL P1 SECURITY VULNERABILITY (SQL Injection):
  // Directly concatenating untrusted user input into raw SQL query
  const query = "SELECT * FROM orders WHERE customer_id = '" + customerId + "' AND title LIKE '%" + searchQuery + "%'";
  
  return await db.executeRaw(query);
}

/**
 * Process order checkout
 */
function calculateOrderTotal(subtotal, taxRate) {
  if (subtotal < 0) {
    throw new Error("Subtotal cannot be negative");
  }
  const tax = subtotal * (taxRate / 100);
  return subtotal + tax;
}

module.exports = {
  searchCustomerOrders,
  calculateOrderTotal,
};
