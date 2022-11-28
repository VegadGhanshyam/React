
 function Car(n,m,w,c) {
    
    this.name=n
    this.color=c
    this.model=m
    this,this.weiht=w
 }

    Car.prototype.start=function start(){
        console.log('car is started');
    }
    function drive(){
        console.log('car is running');
    }
    function stop(){
        console.log('car is Stopprd');
    }

    
const car1=new Car('bmw','2018','90','black');
const car2=new Car('farari','2020','80','red');
console.log(car1.start());
console.log(car1.color)



// cylinder area
function Cylinder(height,redius){
    this.height=height;
    this.redius=redius;

}
Cylinder.prototype.volume= function(){
    return this.height*Math.PI*this.redius*this.redius;
}
let cyl=new Cylinder(7,3);
console.log(cyl.volume().toFixed(4));



//book reading status
const library=[

    {
        title:'abc ',
        author:'max',
        status: 'true'
    },
    {
        title:'bcd',
        author:'maxwell',
        status: 'false'

    },
]
for(let i=0;i<=library.length;i++){
    if(library[i].status==='true'){
        console.log('already read');
    }else{
        console.log('need to read');   
    }
}



