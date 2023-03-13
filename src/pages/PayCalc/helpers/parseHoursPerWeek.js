// This function parses the hours input and returns a string
export function parseHoursPerWeek(amount) {
  // Remove all characters except digits and decimal point
  amount = amount.replace(/[^0-9.]/g, '');
  // Remove decimal places
  amount = amount.split('.')[0];
  // remove leading zeros
  amount = amount.replace(/^0+(\d)/, '$1');
  return amount;
}
