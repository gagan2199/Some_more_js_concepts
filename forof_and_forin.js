let ab=[1,2,3,4,5,6];


let sname="gagan";

let arrfrom= Array.from(sname);         // will convert string into array

for(let t of arrfrom)
{
    console.log(t);
}


for (let item of ab)               // will print elements of ab, treat i as each element
{
    console.log(item);
}


for (let i in ab)               // will print element's key (0,1,2,3,4,5) of ab, treat i as key of each element
{
    console.log(i);
}