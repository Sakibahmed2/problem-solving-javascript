// Write A Function That Counts The Number Of Vowels In A Given String.

// Example: Happy New Year

const FindVowels = (value) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let chr of value) {
    if (vowels.includes(chr)) {
      count++;
    }
  }
  return count;
};

const getAllVowels = FindVowels("Happy New Year");
console.log(getAllVowels);
