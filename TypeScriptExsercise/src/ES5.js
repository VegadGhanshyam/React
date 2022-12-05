var str = "         Vegad Ghanshyam     ";
console.log(str);
console.log(str.trim());
console.log("-------------------");
var arr1 = [1, 4, 5, 3];
console.log(Array.isArray(arr1));
console.log(Array.isArray(str));
console.log("-------------------");
arr1.forEach(function (value) {
    console.log(value);
});
console.log("-------------------");
arr1.map(function (value) {
    console.log(value * 2);
});
console.log("-------------------");
var a = arr1.filter(function (value) {
    console.log(value > 2);
    return value > 2;
});
console.log(a);
console.log("-------------------");
var b = arr1.reduce(function (total, value, index, array) {
    return total + value;
});
console.log(b);
console.log("-------------------");
arr1.every(function (value) {
    console.log(value > 2);
});
console.log("-------------------");
var c = arr1.some(function (value) {
    return value > 2;
});
console.log(c);
console.log("-------------------");
console.log(arr1.indexOf(4));
console.log(arr1.lastIndexOf(3));
var json = '{"name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse(json);
console.log(json);
console.log(obj.name + ' ' + obj.age + ' ' + obj.gender);
console.log("-------------------");
var obj1 = { name: "John", age: 30, city: "New York" };
var myJson = JSON.stringify(obj1);
console.log(myJson);
console.log("-------------------");
var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];
var d = cars.sort(function (a, b) {
    return a.year - b.year;
});
console.log(d);
