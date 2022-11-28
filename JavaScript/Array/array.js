//pattern

let a='';
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        a+="*"
    }
    a+="\n";
}
console.log(a);



//sum of array

const price=[5,4,5,7,8,10,11,15,9,10];
let sum=0;
price.forEach(x=>{
    sum+=x;
})
console.log(sum);


//filter >5
const filter= price.filter((price,idx,prices)=>{
    return price >5
})
console.log(filter);


//find maximum
max=0;
for(let i=0;i<price.length;i++){
    if(price[i]>max){
     max=price[i];
    }
}console.log(max);

//find maximum and minimum

const maxn= [Math.max(...price), Math.min(...price)]
const minn=[maxnumber,minnumber]=maxn;
console.log(maxnumber,minnumber);

let str='elephant egg else';
let arr=str.split('');
console.log(arr);

//count element e
let count=0;
for(let i=0;i<=arr.length;i++){
    if(arr[i]==='e'){
        count++;
        console.log(count+arr[i]);
    }
}

//print without duplicate

const list=new Set([1,5,4,7,5,8,9]);

console.log(list);