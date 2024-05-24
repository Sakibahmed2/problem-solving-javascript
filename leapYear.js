// Write A Function That Determines Whether A Given Year Is A Leap Year.

const findLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "This is leap year";
  }
  return "This is not leap year";
};

console.log(findLeapYear(2023));
