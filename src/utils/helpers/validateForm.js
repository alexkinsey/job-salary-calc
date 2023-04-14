// This function is used to validate the form
export const validateForm = (formData, setError) => {
  const errors = {
    eJobTitle: !formData.jobTitle.trim() ? 'Please enter a job title' : '',
    ePayAmount: !formData.payAmount || formData.payAmount.length < 2 ? 'Please enter a valid amount' : '',
    eHoursPerWeek: !formData.hoursPerWeek ? 'Please enter hours worked per week' : '',
  };

  setError(errors);
  return !Object.values(errors).some((error) => error);
};
