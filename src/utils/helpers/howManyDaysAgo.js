// return a string that represents how many days ago the given date was
export const howManyDaysAgo = (dateStr) => {
  const date = new Date(dateStr);

  // get the time value for the given date and the current date
  const givenTime = date.getTime();
  const currentTime = new Date();

  // calculate the difference between the two times in milliseconds
  const timeDiff = currentTime.getTime() - givenTime;

  // convert the time difference from milliseconds to days
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // calculate the number of months between the two dates
  const monthDiff = (currentTime.getFullYear() - date.getFullYear()) * 12 + (currentTime.getMonth() - date.getMonth());

  if (daysDiff === 0) {
    return "today";
  } else if (daysDiff < 31) {
    return `${daysDiff} days ago`;
  } else {
    return `${monthDiff} months ago`;
  }
};
