export const timeDiff = (a, b, time_parameter) => {
  const givenA = new Date(a);
  const givenB = new Date(b);
  const timeDifference = givenB - givenA;

  switch (time_parameter) {
    case 'min':
      const diffInMinutes = Math.floor(timeDifference / 60000);
      return diffInMinutes;
    case 'sec':
      const diffInSeconds = Math.floor(timeDifference / 1000);
      return diffInSeconds;
    case 'day':
      const diffInDays = Math.floor(diffInHours / 86400000);
      return diffInDays;
    default:
      // hour
      const diffInHours = Math.floor(timeDifference / 3600000);
      return diffInHours;
  }
}

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const readTime = (time) => {
  const date = new Date(time);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Set to true if you prefer 12-hour format
    timeZone: 'UTC' // Adjust according to your time zone preference
  };
  const humanReadable = date.toLocaleString(options);
  return humanReadable
}