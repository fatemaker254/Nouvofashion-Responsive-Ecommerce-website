const bar=document.getElementById('bar');
const closed=document.getElementById('close');
const nav=document.getElementById('navbar');


if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}//this is to open the side bar when we click the sign
if(closed){
    closed.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}// this is to close the side bar when we touch the cross