// const p1=document.querySelector('p1');
// p1.style.color='blue';
// const p2=document.querySelector('p2');
// p2.style.color='green';
// const p3=document.querySelector('p3');
// p3.style.color='orange';

// function myFunction() {
//     var w = window.open();
//     w.document.open();
//     w.document.write("<h2>Hello World!</h2>");
//     w.document.close();
// }
// btn.addEventListener('click',myFunction)

const fs = require("fs");
fs.readFile("demo.json", "utf-8", (err, jsonString) => {
 
         const data = JSON.parse(jsonString);
    console.log(data.Id);
  
});
