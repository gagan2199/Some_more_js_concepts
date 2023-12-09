let body= document.getElementsByTagName('body');

body.color='red';
body.backgroundcolor='black';

// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);

// order an array of names
names.sort();

// order an array of objects with name
users.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});


        var a=["ram",28,"btech"]
        document.write(a +" "+"<br>");
        a[1]=1;
        delete a[2];
        document.write(a +" "+"<br>");
    