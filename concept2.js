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