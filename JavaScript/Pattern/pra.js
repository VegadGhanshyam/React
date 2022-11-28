
const section = document.querySelector('section')
const button =document.querySelector('button')
section.className='red-bg';


button.addEventListener('click',()=>{
    if(section.className==='red-bg visible'){
        section.className='red-bg invisible';
    }else{
        section.className='red-bg visible';
    }

    section.className.toggle('visible');
    section.className.toggle('invisible')
});

function page(){
    console.log('Hello world')
}
page.addEventListener('click',www.google.co.in);