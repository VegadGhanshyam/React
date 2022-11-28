// const  _ = require('lodash');

const arr=[1,5,4,3,7];
const arr1=[5,8,7];
console.log(arr.concat(arr1));


//merge object
const obj1 = {id:1, name:"Mohan"};
const obj2 = {age: 20, country: "IND"};
const mer={
    ...obj1,
    ...obj2
};
console.log(mer);



let students = [
    {
        id: 1,
        name: "Mohan",
        collage: "VVP",
        marks: [60],
        s1 : {
            id: 1,
            name: "Mohan",
            collage: "VVP",
            marks: [60],
            d1 : {
                std_id: 6,
                name: "Mohan",
                collage: "VVP",
                marks: [60]
            }
        }
    },
    {
        id: 2,
        name: "Rakesh",
        collage: "VVP",
        marks: [71]
    },
    {
        id: 3,
        name: "Manohar",
        collage: "GECR",
        marks: [80]
    },
    {
        id: 4,
        name: "Rohan",
        collage: "GECR",
        marks: [95]
    },
    {
        id: 5,
        name: "Mohit",
        collage: "DARSHAN",
        marks: [30]
    }
];

//greterthan 70 marks student
let l=students.filter((students)=>{
    return students.marks>70;

});
console.log(l);

//student pass fail
students.filter((students)=>{
    
    if(students.marks<33){
        students.result="fail";
    }else{
        students.result="pass";
    }
console.log(students);
});

//student name
for(let i=0;i<students.length;i++){
    console.log(students[i].name);
}

// const {collage,...abc}=students[0];

// console.log(collage,abc);
// console.log(_.get(students,['students','0','id']));

// console.log(_.get(students[0],'s1.d1.std_id','default'));


// _.forEach({ 'x': 1, 'y': 2 }, function(value, key) {
//     console.log(value);
//   });




  const baseValue = prompt('Enter the base of a triangle: ');
  const heightValue = prompt('Enter the height of a triangle: ');
  
  // calculate the area
  const areaValue = (baseValue * heightValue) / 2;
  
  console.log(
    `The area of the triangle is ${areaValue}`
  );

