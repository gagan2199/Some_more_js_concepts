let btn=document.getElementById('btn');
let container=document.getElementsByClassName('container');

// let container=document.querySelector('.container');                 this can also be use to access class name

btn.addEventListener('click',()=>
{
    // document.body.style.backgroundColor='red';
    btn.style.color='blue';
    container[0].style.backgroundColor='red';

    // container.style.backgroundColor='red';        for query selector
})

let a=[1,2,3,4,5,6];
let c=[1,2,3,4,5,6];

spl=a.splice(2,2,9,9);
console.log(spl); 
console.log(a); 

let b=c.slice(0,3);
console.log(b)