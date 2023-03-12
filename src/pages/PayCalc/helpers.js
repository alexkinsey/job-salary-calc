// This file contains helper functions for the PayCalc page
// This function calculates the pay and returns an object with the results
export function calculatePay(payAmount, payPeriod, hoursPerWeek) {
  let hourlyRate, weeklyRate, monthlyRate, yearlyRate;

  // Sanitize the payAmount input
  payAmount = parseFloat(payAmount.replace(/\D/g, ''));

  if (payPeriod === 'hourly') {
    hourlyRate = payAmount;
    weeklyRate = payAmount * hoursPerWeek;
    monthlyRate = (payAmount * hoursPerWeek * 52) / 12;
    yearlyRate = payAmount * hoursPerWeek * 52;
  } else if (payPeriod === 'weekly') {
    hourlyRate = payAmount / hoursPerWeek;
    weeklyRate = payAmount;
    monthlyRate = (payAmount * 52) / 12;
    yearlyRate = payAmount * 52;
  } else if (payPeriod === 'monthly') {
    hourlyRate = (payAmount * 12) / (hoursPerWeek * 52);
    weeklyRate = (payAmount * 12) / 52;
    monthlyRate = payAmount;
    yearlyRate = payAmount * 12;
  } else if (payPeriod === 'yearly') {
    hourlyRate = payAmount / (hoursPerWeek * 52);
    weeklyRate = payAmount / 52;
    monthlyRate = payAmount / 12;
    yearlyRate = payAmount;
  }

  hourlyRate = hourlyRate.toFixed(2);
  weeklyRate = weeklyRate.toFixed(2);
  monthlyRate = monthlyRate.toFixed(2);
  yearlyRate = yearlyRate.toFixed(2);

  return {
    hourlyRate,
    weeklyRate,
    monthlyRate,
    yearlyRate,
  };
}

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

// This function converts a string to title case
export function toTitleCase(str) {
  let lowers = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'for',
    'nor',
    'as',
    'at',
    'by',
    'for',
    'from',
    'in',
    'into',
    'near',
    'of',
    'on',
    'onto',
    'to',
    'with',
  ];
  let uppers = ['id', 'tv'];

  str = str.toLowerCase().replace(/([^\W_]+[^\s-]*) */g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  str = str.replace(/:\s*\w/g, function (txt) {
    return txt.toUpperCase();
  });

  for (let i = 0, j = lowers.length; i < j; i++) {
    str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), function (txt) {
      return txt.toLowerCase();
    });
  }

  for (let i = 0, j = uppers.length; i < j; i++) {
    str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), uppers[i].toUpperCase());
  }

  return str;
}
