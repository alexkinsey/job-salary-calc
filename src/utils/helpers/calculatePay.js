// This function calculates the pay and returns an object with the results
export function calculatePay(payAmount, payPeriod, hoursPerWeek) {
  let hourlyRate, weeklyRate, monthlyRate, yearlyRate;

  // Sanitize the payAmount input
  payAmount = parseFloat(payAmount.replace(/\s*£/g, ''));

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
