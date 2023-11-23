let btn=document.getElementById('btn');
let container=document.getElementsByClassName('container');

// let container=document.querySelector('.container');                 this can also be use to access class name

btn.addEventListener('click',()=>
{
    // document.body.style.backgroundColor='red';
    btn.style.color='blue';
    container[0].style.backgroundColor='red';

    // container.style.backgroundColor='red';        for query selector adding color
})

let a=[1,2,3,4,5,6];
let c=[1,2,3,4,5,9,4,6];

spl=a.splice(2,3,9,122,7);      // from index 2 3 elements 9,122,7 added
console.log(spl); 
console.log(a); 

let b=c.slice(0,2);            // from index 0 to 2 separated
console.log(b)