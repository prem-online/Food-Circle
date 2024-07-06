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

export readTime = () => {
  
}