// take in a date string and format to a more readable format
export const formatDate = (dateStr) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', options);
};
