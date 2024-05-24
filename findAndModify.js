// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const FindAndUpdate = (arr, parsonName, newAge) => {
  const updatedArray = arr.map((person) => {
    if (person.name === parsonName) {
      return { ...person, age: newAge };
    }
    return person;
  });
  console.log(updatedArray);
};

const peoples = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 40 },
];

FindAndUpdate(peoples, "Doe", 10);
