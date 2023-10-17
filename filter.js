let arr=[1,2,3,4,4,5,9,88,43,23];

let new_arr = arr.filter((element)=>
{
    return element<10;
}
);

console.log(new_arr);