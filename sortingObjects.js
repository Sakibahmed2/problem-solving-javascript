// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2020,
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2019,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2021,
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    year: 2018,
  },
  {
    make: "Tesla",
    model: "Model S",
    year: 2022,
  },
];

const SortCars = (arr) => {
  const sortedCar = arr.sort((a, b) => a.year - b.year);
  return sortedCar;
};

console.log(SortCars(cars));
