import { strict } from "assert";

//factorial Exercise
let number: number = 5;
let fact: number = 1;
for (let i = 1; i <= number; i++) {
  fact = i * fact;
}
console.log(fact);

//Factorial using recursion
const factorial: any = (x: number) => {
  if (x === 0) {
    return 1;
  } else return x * factorial(x - 1);
};
console.log(factorial(4));

// merge two array
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [1, 2, 5];
let arr = new Set(arr1.concat(arr2));
console.log(arr1.concat(arr2));
console.log("------------------------------------");

console.log(arr);
console.log("------------------------------------");

//merge two object

let obj1 = { id: 1, name: "Mohan" };
let obj2 = { age: 20, country: "IND" };
let obj = {
  ...obj1,
  ...obj2,
};
console.log(obj);
console.log("------------------------------------");



//student  Exssercise
interface student{
    id: number | string;
    name: string;
    collage: string;
    marks: number;
    result?: String;
}

let students:student[] = [
  {
    id: 1,
    name: "Mohan",
    collage: "VVP",
    marks: 60,
  },
  {
    id: 2,
    name: "Rakesh",
    collage: "VVP",
    marks: 71,
  },
  {
    id: 3,
    name: "Manohar",
    collage: "GECR",
    marks: 80,
  },
  {
    id: 4,
    name: "Rohan",
    collage: "GECR",
    marks: 70,
  },
  {
    id: 5,
    name: "Mohit",
    collage: "DARSHAN",
    marks: 31,
  },
];

//more than 70 marks
const i = students.filter((students) => {
  return students.marks > 70;
});
console.log(i);
console.log("------------------------------------");

students.forEach((students) => {
  console.log(students.name);
});
console.log("------------------------------------");


//student result status
students.filter((students) => {
  if (students.marks < 33) {
    students.result = "fail";
  } else {
    students.result = "pass";
  }
  console.log(students);
});



