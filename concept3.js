let var1=3;
let arr1=[1,2,3,44,56,67,86,"ram","sham","akaash"];

let numarr=[37,32,13,54,25,2,453,32,53];

let srt1 = arr1.sort();

let srt2= numarr.sort((a,b)=>
{
return a-b;
})

console.log(srt1);
console.log(srt2);