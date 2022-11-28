let str="Hello World";
sum='';
for(let i=0;i<str.length;i++){
    sum=str[i]+sum;
}
console.log(sum);       


function sub(str){
    return str.substring(1,str.length-1);
}
console.log(sub(str));



// color change
function keydown(){
    document.getElementById("demo").style.backgroundColor='red';
}
function keyup(){
    document.getElementById("demo").style.backgroundColor='white';
}



function getOption() {
    selectElement = document.querySelector('#select1');
   output=selectElement.value;
   document.querySelector('.output').textContent=output;
}