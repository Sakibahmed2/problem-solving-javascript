// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const person = [
  {
    name: "sakib",
    age: 20,
    gender: "male",
  },
  {
    name: "Ayesha",
    age: 22,
    gender: "female",
  },
  {
    name: "Rahul",
    age: 25,
    gender: "male",
  },
  {
    name: "Fatima",
    age: 19,
    gender: "female",
  },
  {
    name: "John",
    age: 30,
    gender: "male",
  },
];

const FilterFemales = (arr) => {
  const filterFemale = arr.filter((item) => item.gender !== "female");
  const remainingPeople = filterFemale.map((item) => item.name);
  return remainingPeople;
};

console.log(FilterFemales(person));
