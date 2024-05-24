// ls Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const SquareFunc = (num) => {
  return num * num;
};

const DoubleFunc = (num) => {
  return num * 2;
};

const Add5Func = (num) => {
  return num + 5;
};

const ComposeFunc = (num) => {
  const squared = SquareFunc(num);
  const doubled = DoubleFunc(squared);
  const result = Add5Func(doubled);
  return result;
};

console.log(ComposeFunc(3));
