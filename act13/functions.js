//ACTIVITY 1: Write a function to calculate the area of a rectangle given its length and width.

function calculateRectangleArea(length, width) {
    console.log(length * width);
}

// Testing the function by invoking or calling it.
calculateRectangleArea(5, 8); // Output: 40



//ACTIVITY 2: Write a function to reverse a string.

function reverseString(str) {
    console.log(str.split("").reverse().join(""));
}

// Testing the function by invoking or calling it.
console.log(reverseString("hello")); // Output: "olleh"



//ACTIVITY 3: Write a function to generate a random number between a given minimum and maximum value.

function generateRandomNumber(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

// Testing the function by invoking or calling it.
console.log(generateRandomNumber(1, 10)); // Output: Random number between 1 and 10



//ACTIVITY 4: Write a function to count the number of vowels in a string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count);
}

// Testing the function by invoking or calling it.
countVowels("hello"); // Output: 2



//ACTIVITY 5: Write a function that takes an integer as input and returns "Even" if the number is even, and "Odd" if the number is odd.

function checkEvenOrOdd(number) {
    console.log(number % 2 === 0 ? "Even" : "Odd");
}

// Testing the function by invoking or calling it.
checkEvenOrOdd(7);  // Output: Odd
checkEvenOrOdd(10); // Output: Even