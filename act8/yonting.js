//favoriteColor variable
let favoriteColor;
favoriteColor = 'green';
console.log(favoriteColor);



//comments variable: multiline
/*
Comments in JavaScript are used to add notes for explanation or annotations to the code. Its notes are either for yourself or for other programmers. Comments are only meant for humans to understand the code better. So in other words, comments are ignored by the browsers as it only helps humans to understand the codes by the explanatory notes or comments.
*/

//comments variable: single-line
// In my opinion, commenting code is significant because it helps improving the code to be readable, understandable, and collaborative among every developers and programmers in which it contributes to such projects and websites.



//addition operator (my full name)
let fname = 'Czyra Jenreal'
let lname = 'Yonting';
let fullname = fname + '' + lname;
console.log(fullname);



//subtraction, multiplication,and division operators (number 15 and number 3)
let num1 = 15;
let num2 = 3;
function subtract(num1, num2) {
  let result = num1 - num2;
  return result;
}
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
function divide(num1, num2) {
  let result = num1 / num2;
  return result;
}

//results
//:subtraction
let Result1;
Result1 = 12;
console.log(Result1);

//:multiplication
let Result2;
Result2 = 18;
console.log(Result2);

//:division
let Result3;
Result3 = 5;
console.log(Result3);



//conditionals: if-else statement
let temperature = 33;
if (temperature >= 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's a cool day.");
}



//conditionals: greet user
function greetUser(Czyra) {
  console.log('Hello, ' + Czyra + '! Welcome to the cyberworld.');
}
greetUser('Czyra');