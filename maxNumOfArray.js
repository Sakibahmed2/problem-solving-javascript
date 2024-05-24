// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

const findMaxNum = (arr) => {
  return Math.max(...arr);
};

const array = [22, 32, 11, 2, 4434, 3234];

console.log(findMaxNum(array));
