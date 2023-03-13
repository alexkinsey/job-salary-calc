// This function parses the currency input and returns a string
export function parseCurrency(amount) {
  // remove all characters except digits and decimal point
  amount = amount.replace(/[^\d.]+/g, '');
  // make sure there's only one decimal point
  amount = amount.replace(/(\..*)\./g, '$1');
  // limit to two decimal places
  amount = amount.replace(/(\.[\d]{2}).*/g, '$1');
  // remove leading zeros
  amount = amount.replace(/^0+(\d)/, '$1');
  return '£' + amount;
}
