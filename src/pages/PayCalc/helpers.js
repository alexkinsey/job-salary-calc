export function calculatePay(amount, payPeriod, hoursPerWeek) {
  let hourlyRate, weeklyRate, monthlyRate, yearlyRate;

  if (payPeriod === 'hourly') {
    hourlyRate = parseFloat(amount);
    weeklyRate = amount * hoursPerWeek;
    monthlyRate = (amount * hoursPerWeek * 52) / 12;
    yearlyRate = amount * hoursPerWeek * 52;
  } else if (payPeriod === 'weekly') {
    hourlyRate = amount / hoursPerWeek;
    weeklyRate = parseFloat(amount);
    monthlyRate = (amount * 52) / 12;
    yearlyRate = amount * 52;
  } else if (payPeriod === 'monthly') {
    hourlyRate = (amount * 12) / (hoursPerWeek * 52);
    weeklyRate = (amount * 12) / 52;
    monthlyRate = parseFloat(amount);
    yearlyRate = amount * 12;
  } else if (payPeriod === 'yearly') {
    hourlyRate = amount / (hoursPerWeek * 52);
    weeklyRate = amount / 52;
    monthlyRate = amount / 12;
    yearlyRate = parseFloat(amount);
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
