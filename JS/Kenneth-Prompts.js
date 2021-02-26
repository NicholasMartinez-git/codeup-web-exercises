// Write a function named calculateTax that takes in two inputs representing the
// totalPaid and the taxPercent. If both inputs are numeric or numeric strings,
// calculateTax should return the total with tax added in a string looking like:
// "$XX.XX". If either or both inputs are not numeric or numeric strings, calculateTax
// should return false.

// calculateTax(25, 8)				 // "$27.00"
// calculateTax(10, 12)             // "$11.20"
// calculateTax(120, 15.5)			 //	"$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax("Codeup", 100)      // false
// calculateTax()                   // false