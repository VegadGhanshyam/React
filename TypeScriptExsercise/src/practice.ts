function add(a: number, b: number) {
  return a + b;
}
console.log(add(10, 11));


//longest word in string
function longest(str1: string) {
<<<<<<< HEAD
  let array1: String[] = str1.split(" ");
  let result:String = array1[0];
=======
  let array1: any = str1.split(" ");
  let result = array1[0];
>>>>>>> 73c753e8b269e9f5f84a9c09a5eaec1e66e90858

  for (var i = 1; i < array1.length; i++) {
    if (array1[i].length > result.length) {
      result = array1[i];
    }
  }
  return result;
}


console.log(longest("write a typescript program"));
console.log("------------------------------------");


//callback function
function fun1(input:string, fun2:any){
    return fun2()+" "+input;
 
}
function fun2(){
    
    return 'hello';
    
}
console.log(fun1("prominent",fun2));
console.log("------------------------------------");

//

const input1:String="hello prominent";
 let iin='';

for(let i=0;i<input1.length;i++){
     if (iin.indexOf(input1.charAt(i)) < 0) {
    iin+=input1.charAt(i);
  }
}
console.log(iin);
<<<<<<< HEAD
console.log("------------------------------------");


=======
>>>>>>> 73c753e8b269e9f5f84a9c09a5eaec1e66e90858



