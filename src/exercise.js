const myName = "Roxana";
console.log(myName);

const myAge = 31;
console.log(myAge);

const myHobbies = [
  "yoga",
  "cooking",
  "sleep",
  "listen music",
  "painting aquarellas",
];
console.log(myHobbies);

const myDog = {
  name: "Thera",
  age: 2,
  breed: "Border Collie",
};
console.log(myDog);

const myInfo = {
  name: myName,
  age: myAge,
  hobbies: myHobbies,
  dog: myDog,
};
console.log(myInfo);

function sayHello(name) {
  console.log(`Hello, ${name}`);
}
sayHello("Roxana");

const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];

names.forEach((name) => sayHello(name));

function sum(a, b) {
  console.log(a + b);
}
sum(3, 2);

function convertToUpper(string) {
  console.log(string.toUpperCase());
}

convertToUpper("I'm very sleepy");

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
checkEvenOdd(3);

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

function splitString(string) {
  return string.split("");
}

console.log(splitString("Tera"));

function reverseString(text) {
  let reversed = text.split("").reverse();
  console.log(reversed);
}

reverseString("hola");

const characters = ["o", "l", "l", "e", "h"];

function arrayToString(ditto) {
    return ditto.join("")
    
}

console.log(arrString(characters));

function isPalindrome(word) {
    return word === word.split("").reverse().join("");
  }

  console.log(isPalindrome("gato"));
  

