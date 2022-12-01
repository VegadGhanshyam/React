const str: string = "         Vegad Ghanshyam     ";
console.log(str);
console.log(str.trim());
console.log("-------------------");

const arr1: number[] = [1, 4, 5, 3];
console.log(Array.isArray(arr1));
console.log(Array.isArray(str));
console.log("-------------------");

arr1.forEach((value) => {
  console.log(value);
});
console.log("-------------------");

arr1.map((value) => {
  console.log(value * 2);
});
console.log("-------------------");

const a = arr1.filter((value) => {
  console.log(value > 2);
  return value > 2;
});
console.log(a);
console.log("-------------------");

const b = arr1.reduce(
  (total: number, value: number, index: number, array: number[]) => {
    return total + value;
  }
);
console.log(b);

console.log("-------------------");

arr1.every((value) => {
  console.log(value > 2);
});
console.log("-------------------");

const c = arr1.some((value) => {
  return value > 2;
});
console.log(c);
console.log("-------------------");

console.log( arr1.indexOf(4));
console.log( arr1.lastIndexOf(3));

const json='{"name":"John", "age":30, "city":"New York"}';
const obj=JSON.parse(json);
console.log(json);
console.log(obj.name+' '+obj.age+' '+obj.gender);
console.log("-------------------");

const obj1 = {name:"John", age:30, city:"New York"};
const myJson=JSON.stringify(obj1);
console.log(myJson);
console.log("-------------------");


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  let d=cars.sort((a,b)=>{
   return a.year-b.year;
  })
  console.log(d);
  
  








