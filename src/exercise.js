//Exercise 1
const myName = "Marta Gómez";
console.log(myName);

//Exercise 2
const myAge = 29;
console.log(myAge);

//Exercise 3
const myHobbies = [
  "Dormir",
  "Pintar",
  "Leer",
  "RRSS",
  "Pasear con mi perro",
  "Jugar a los Sims",
];
console.log(myHobbies);

//Exercise 4
const myDog = {
  name: "Panko",
  age: 2,
  breed: "Teckel",
};
console.log(myDog);

//Exercise 5
const myInfo = {
  name: myName,
  age: myAge,
  hobbies: myHobbies,
  dog: myDog,
};

console.log(myInfo);

//Exercise 6
function sayHello(name) {
  console.log(`Hello, ${name}`);
}

sayHello("Marta Gómez");

//Exercise 7
const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];

names.forEach(function (names) {
  sayHello(names);
});

//Exercise 8
function sum(number1, number2) {
  console.log(number1 + number2);
}

sum(3, 7);

//Exercise 9
function convertToUpper(string) {
  console.log(string.toUpperCase());
}

convertToUpper("hola que tal");

//Exercise 10
function checkEvenOdd(number3) {
  if (number3 % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOdd(40);

//Exercise 11
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumArray([2, 78, 3]));

//Exercise 12
function splitString(text) {
  const arrayString = text.split("");
  return arrayString;
}

console.log(splitString("hola que tal"));

//Exercise 13

function reverseString(text1) {
  const strArray = text1.split(" ");
  const reversedArray = strArray.reverse();
  return reversedArray;
}
console.log(reverseString("buenas tardes que tal"));

//Exercise 14

function arrayToString(char) {
  return char.join("");
}
const characters = ["o", "l", "l", "e", "h"];
console.log(arrayToString(characters));

//Exercise 15
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

console.log(isPalindrome("anna"));

//Exercise 16
function fizzBuzz(number4) {
  for (i = 1; i <= number4; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

//Exercise 17
function findLongestString(strings) {
    let longest = "";
    strings.forEach(function(str) {
      if (str.length > longest.length) {
        longest = str;
      }
    });
    console.log(longest);
  }
  findLongestString(["apple", "banana", "grapefruit"]);