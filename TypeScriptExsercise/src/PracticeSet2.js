"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
//factorial Exercise
var number = 5;
var fact = 1;
for (var i_1 = 1; i_1 <= number; i_1++) {
    fact = i_1 * fact;
}
console.log(fact);
//Factorial using recursion
var factorial = function (x) {
    if (x === 0) {
        return 1;
    }
    else
        return x * factorial(x - 1);
};
console.log(factorial(4));
// merge two array
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 5];
var arr = new Set(arr1.concat(arr2));
console.log(arr1.concat(arr2));
console.log("------------------------------------");
console.log(arr);
console.log("------------------------------------");
//merge two object
var obj1 = { id: 1, name: "Mohan" };
var obj2 = { age: 20, country: "IND" };
var obj = __assign(__assign({}, obj1), obj2);
console.log(obj);
console.log("------------------------------------");
var students = [
    {
        id: 1,
        name: "Mohan",
        collage: "VVP",
        marks: 60
    },
    {
        id: 2,
        name: "Rakesh",
        collage: "VVP",
        marks: 71
    },
    {
        id: 3,
        name: "Manohar",
        collage: "GECR",
        marks: 80
    },
    {
        id: 4,
        name: "Rohan",
        collage: "GECR",
        marks: 70
    },
    {
        id: 5,
        name: "Mohit",
        collage: "DARSHAN",
        marks: 31
    },
];
//more than 70 marks
var i = students.filter(function (students) {
    return students.marks > 70;
});
console.log(i);
console.log("------------------------------------");
students.forEach(function (students) {
    console.log(students.name);
});
console.log("------------------------------------");
//student result status
students.filter(function (students) {
    if (students.marks < 33) {
        students.result = "fail";
    }
    else {
        students.result = "pass";
    }
    console.log(students);
});
