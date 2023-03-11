// This file contains helper functions for the PayCalc page
// This function calculates the pay and returns an object with the results
export function calculatePay(payAmount, payPeriod, hoursPerWeek) {
  let hourlyRate, weeklyRate, monthlyRate, yearlyRate;

  if (payPeriod === 'hourly') {
    hourlyRate = parseFloat(payAmount);
    weeklyRate = payAmount * hoursPerWeek;
    monthlyRate = (payAmount * hoursPerWeek * 52) / 12;
    yearlyRate = payAmount * hoursPerWeek * 52;
  } else if (payPeriod === 'weekly') {
    hourlyRate = payAmount / hoursPerWeek;
    weeklyRate = parseFloat(payAmount);
    monthlyRate = (payAmount * 52) / 12;
    yearlyRate = payAmount * 52;
  } else if (payPeriod === 'monthly') {
    hourlyRate = (payAmount * 12) / (hoursPerWeek * 52);
    weeklyRate = (payAmount * 12) / 52;
    monthlyRate = parseFloat(payAmount);
    yearlyRate = payAmount * 12;
  } else if (payPeriod === 'yearly') {
    hourlyRate = payAmount / (hoursPerWeek * 52);
    weeklyRate = payAmount / 52;
    monthlyRate = payAmount / 12;
    yearlyRate = parseFloat(payAmount);
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
