function add(a, b) {
    return a + b;
}
console.log(add(10, 11));
//longest word in string
function longest(str1) {
    var array1 = str1.split(" ");
    var result = array1[0];
    for (var i = 1; i < array1.length; i++) {
        if (array1[i].length > result.length) {
            result = array1[i];
        }
    }
    return result;
}
<<<<<<< HEAD
=======
console.log("Longest word from string");
>>>>>>> 73c753e8b269e9f5f84a9c09a5eaec1e66e90858
console.log(longest("write a typescript program"));
console.log("------------------------------------");
//callback function
function fun1(input, fun2) {
    return fun2() + " " + input;
}
function fun2() {
    return 'hello';
}
console.log(fun1("prominent", fun2));
console.log("------------------------------------");
//
var input1 = "hello prominent";
var iin = '';
for (var i = 0; i < input1.length; i++) {
    if (iin.indexOf(input1.charAt(i)) < 0) {
        iin += input1.charAt(i);
    }
}
console.log(iin);
<<<<<<< HEAD
console.log("------------------------------------");
var number = 5;
var fact = 1;
for (var i = 1; i <= number; i++) {
    fact = i * fact;
}
;
console.log(fact);
=======
>>>>>>> 73c753e8b269e9f5f84a9c09a5eaec1e66e90858
