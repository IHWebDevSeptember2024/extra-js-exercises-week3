// Exercise 1
// Create a variable called myName and assign it a string value. Log the variable to the console.

// Solution
const myName = "Eleni";
console.log(myName);



// Exercise 2
// Create a variable called myAge and assign it a number value. Log the variable to the console.

// Solution
const myAge = 101;
console.log(myAge);



// Exercise 3
// Create a variable called myHobbies and assign it an array of string values. Log the variable to the console.

// Solution
const myHobbies = ['reading', 'hiking', 'movies'];
console.log(myHobbies);


// Exercise 4
// Create a variable called myDog and assign it an object with properties of name, age, and breed. Log the variable to the console.

// Solution
const myDog = {
    name: "Snowball",
    age: 3,
    breed: "Husky"
};

for (const property in myDog){
    if(myDog.hasOwnProperty(property)){
    console.log(`${property}: ${myDog[property]}`);
    }
}

// Exercise 5
// With the variables created above, create a new object called myInfo. This object should have properties (keys) of name, age, hobbies, and dog. Log the variable to the console.

// Solution
const myInfo = {
    name: myName,
    age: myAge,
    hobbies: myHobbies,
    dog: myDog 
};

console.log(myInfo);



// Exercise 6
// Create a function called sayHello that takes in a name and logs the string "Hello, name". Call the function with the argument of your name.

// Solution
function sayHello (name){
    console.log(`Hello, ${name}`)
}

sayHello(myName);



// Exercise 7
// Given the array of names, create a loop to use the sayHello function to log "Hello, name" for each name in the array. Use a for loop or a forEach loop to iterate over the array

// Solution
const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];
names.forEach(sayHello);



// Exercise 8
// Create a function called sum that takes two parameters that are numbers and it console logs the sum of the two numbers.

// Solution
function sum (num1, num2){
    const sum = num1 + num2;
    console.log(sum);
}



// Exercise 9
// Write a function called convertToUpper that converts a string to uppercase and logs it to the console.

// Solution
function convertToUpper (lowercaseString){
    const uppercaseString = lowercaseString.toUpperCase();
    console.log(uppercaseString);
}



// Exercise 10
// Write a function called checkEvenOdd that checks if a number is even or odd and logs "Even" or "Odd".

// Solution
function checkEvenOdd (number){
    number % 2 === 0 ? console.log("Even") : console.log("Odd");
}



// Exercise 11
// Create a function called sumArray that takes an array of numbers and returns the sum of all numbers.

// Solution
function sumArray (arrayOfNumbers){
    //Check it's an array
    if (!(Array.isArray(arrayOfNumbers))){
        console.log(`Please provide an array.`);
        return;
    }
    //Check it's not empty
    if (!(arrayOfNumbers.length > 0)){
        console.log(`Please make sure the array is not empty.`);
        return;
    }

    //Check all the elements of the array are numbers
    for (let i = 0; i < arrayOfNumbers.length; i++){
        if (isNaN(arrayOfNumbers[i])){
            console.log(`The element in position ${i} is not a number.`);
            return;
        }
    }
    
    const sumOfNumbers = arrayOfNumbers.reduce((accumulator, number) => {
        return accumulator += number;
        }, 0);
    
    return sumOfNumbers;
}



// Exercise 12
// Write a function called splitString that creates an array from a string, splitting it by a each character.

// Solution
function splitString (stringToSplit){
    return stringToSplit.split("");
}



// Exercise 13
// Now write a function called reverseString that creates an array based on a string, then reverses the array and logs the result.

// Solution
function reverseString(baseString){
    console.log(baseString.split("").reverse());
}

// Exercise 14
// Now that you know how to reverse an array, can you convert this array back to a string? Create a function called arrayToString that converts an array of characters back to a string. Use the next example to test your function:

// const characters = ["o", "l", "l", "e", "h"];
// // expected result is "olleh"

// Solution
function arrayToString(arrayOfChars){
    return(arrayOfChars.join(''));
}



// Exercise 15
// After you've learned how to do this three steps, can you create a function that checks if a word is palindrome? A palindrome is a word that reads the same backward as forward. For example, "anna" is a palindrome. Your function called isPalindrome will receive a string and should return true if the string is a palindrome and false if it is not.

// Solution
 function isPalindrome(stringToCheck){
    const arrayOfChars = stringToCheck.split("");
    const arrayOfLetters = arrayOfChars.filter((char) => /[a-zA-Z]/.test(char) );
    const stringOfLetters = arrayOfLetters.join();
    if (stringOfLetters.length === 0){
        console.log("Your string didn't contain any letters!");
        return;
    }
    const stringOfLettersReverse = arrayOfLetters.reverse().join();
    const result = stringOfLetters.toLowerCase() === stringOfLettersReverse.toLowerCase() ?  true : false;
    console.log(result);
    return result;
 }

// Exercise 16
// Create a function called fizzBuzz that logs every number from 1 to n, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz". Example: fizzBuzz(10) should log the following:

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// Solution
function fizzBuzz(maxNumber){

    let currentNum = 0;

    for (let i = 0; i < maxNumber; i++){
        
        currentNum = i + 1;

        if ((currentNum % 3 === 0) && (currentNum % 5 === 0)){
            console.log("FizzBuzz");
        }else if(currentNum % 3 === 0){
            console.log("Fizz");
        }else if((currentNum % 5 === 0)){
            console.log("Buzz");
        } else{
            console.log(currentNum);
        }
    }

}

fizzBuzz(15);


// Exercise 17
// Create a function called findLongestWord that takes an array of strings and logs the longest string.

// Solution
function findLongestString(arrayOfStrings){

    let longestString = "";

    arrayOfStrings.forEach((string) => {
        if (longestString.length < string.length){
            longestString = string;
        }
    })
    console.log(longestString);
}