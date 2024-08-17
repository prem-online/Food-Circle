import React from 'react';
import millify from 'millify';

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
  const humanReadable = date.toLocaleString('en-IN', options);
  return humanReadable
}

export const extractInteger = (str)=>{
  const match = str.match(/\d+/);
  if (match) {
    return parseInt(match[0]);
  }
  return null; // Return null if no number is found
}

export const transformData = (input)=> {
  const result = [];

  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      const product_id = parseInt(key.match(/\d+/)[0]);
      const quantity = input[key];
      result.push({ product_id, quantity });
    }
  }

  return result;
}

export const nextMultipleOfTen = (num) => {
  return Math.ceil(num / 10) * 10;
}

export const handleReload = () => {
  window.location.reload();
};

export const cloner = (element, dataArray) => {
  return dataArray.map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export const getRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

export const getRandomUniqueSixDigits = () => {
  const digits = '0123456789'.split('');
  let result = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    result += digits[randomIndex];
    digits.splice(randomIndex, 1); // Remove the used digit
  }

  return parseInt(result, 10); // Convert the result string to an integer
}

export const humanCurrency = (value) => {
  return millify(value, {
      precision: 2,
      lowercase: true,
      units: ['', '', 'Lakh', 'Cr', 'Arab', 'Kharab', 'Neel', 'Padma', 'Shankh'], // Indian numbering system units
      decimalSeparator: '.',
      space: true,
  });
}
