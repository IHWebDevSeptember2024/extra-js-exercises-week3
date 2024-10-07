const myName = "Tomas Martin";
console.log(myName);




const myAge = 18
console.log(myAge);




const myHobbies = [
  "pizza, music, football"
]


 
const myDog = {
  name : "toby",
  age : 6,
  breed : "pastor aleman" ,
}



const myInfo = {
name : myName,
age : myAge,
hobbies : myHobbies,
dog : myDog,
}



function sayHello(name) {
console.log(`Hello, ${name}`)
  
}

sayHello("Tomas Martin")


const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];


for (let i = 0; i < names.length; i++) {
sayHello(names[i]);
  
}

console.log(sayHello);

function sum (a, b) {
console.log(a + b);
}



function convertToUpper (string){
  console.log(string.toUpperCase());
  
 }
 
 convertToUpper("tomas");
 
 

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
checkEvenOdd(7);
checkEvenOdd(4);
checkEvenOdd(5);



function sumArray (numbers) { 
let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
      }
  return sum;
}

console.log(sumArray([1, 2 ,3, 5]));


function sliptString(str) {
 return  str.split("");

} 
console.log(sliptString("hola me llamo tomas"));



function reverseString (text) {
let reversed = text.split("").reverse()
console.log(reversed);

 
 }

 reverseString("hola me llamo tomas")


 
 const characters = ["o", "l", "l", "e", "h"];

 function arrayToString (string){
 return string.join("")
}

arrayToString(characters)

function isPalindrome (word){
  if (word === word.split("").reverse().join("")){
    return true;

  }else{
    return false
  }
}


function fizzBuzz (numbers) {

    for (let i = 1; i <= numbers; i++) {
    let res = "";
    
    if (i %3 === 0){res += "fizz"};
    
    if (i %5 === 0){res +="Buzz"};
    
      console.log(res || i);
    }   
}

fizzBuzz(15);


function findLongestString (strings) {

  let longest = "";
  strings.forEach((str) => {
    if (str.length > longest.length){
      longest = str;
    }
});
console.log(longest);

}

findLongestString (["dog", "cat", "horse", "tiger", "monkey"])
