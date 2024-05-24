// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const sumOfEvenNumber = (num) => {
  const sum = num.reduce((acc, value) => {
    if (value % 2 === 0) {
      return acc + value;
    }
    return acc;
  }, 0);
  return sum;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfEvenNumber(numbers));
