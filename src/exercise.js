const myName = "Sven";
console.log(myName);

const myAge = 47;
console.log(myAge);

const myHobbies = ["Skiing", "Family", "Hiking"];
console.log(myHobbies);

const myDog = {
	name: "Kalle",
	age: 8,
	breed: "Rotweiler",
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
	// console.log("Hello,",name);
}
sayHello("Sven");

const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];

for (let i = 0; i < names.length; i++) {
	sayHello(names[i]);
}

function sum(number1, number2) {
	console.log(number1 + number2);
}

function convertToUpper(word) {
	console.log(word.toUpperCase());
}

function checkEvenOdd(number) {
	if (number % 2 === 0) {
		console.log("Even");
	} else {
		console.log("Odd");
	}
}

const numbers = [1, 2, 3, 4, 5];

function sumArray(numbers) {
	let sum = 0;
	numbers.forEach((number) => {
		sum += number;
	});
	return sum;
}

console.log(sumArray(numbers));

function splitString(string) {
	return string.split("");
}

function reverseString(text) {
	const reversed = [];
	let toBeReversed = splitString(text);
	toBeReversed.forEach(function (word) {
		reversed.unshift(word);
	});
	console.log(reversed);

	return reversed;
}

function arrayToString(charString) {
	return charString.join("");
}

function isPalindrome(word) {
	let mergedWord = word.split("");
	let mergedWordReverse = word.split("").reverse();
	mergedWord = mergedWord.join("");
	mergedWordReverse = mergedWordReverse.join("");
	if (mergedWord === mergedWordReverse) {
		return true;
	} else {
		return false;
	}
}
console.log(isPalindrome("hello"));

function fizzBuzz(number) {
	for (let i = 1; i <= number; i++) {
		if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}
fizzBuzz(10);

function findLongestString(array) {
    if (array.length === 0) return false;
    longestWord = array[0];
    array.forEach(function(word) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    });
    console.log(longestWord);
}
