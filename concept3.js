let var1=3;
let arr1=[1,2,3,44,56,67,86,"ram","sham","akaash","harsh"];

let numarr=[37,32,13,54,25,2,453,32,53];      // sorting of numerical values

let srt1 = arr1.sort();                
 // sorting as dictionary

let srt2= numarr.sort((a,b)=>
{
return a-b;
})

console.log(srt1);
console.log(srt2);

var a=["ram",23,"btech"]
        document.write(a +" "+"<br>");
        a[1]=2;
        delete a[2];
        document.write(a +" "+"<br>");
   
