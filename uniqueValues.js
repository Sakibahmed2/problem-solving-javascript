// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

const uniqueValues = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) === index);
};

const array = [1, 2, 2, 2, 1, 3, 1, 2, 3, 3, 3, 1, 1];
console.log(uniqueValues(array));
