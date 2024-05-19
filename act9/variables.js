//TASK 1&2: This code will show number 293 and the varialbe Kelvin will not change because it uses "const".
const Kelvin = 0;

//TASK 3&4: This code will show the result of the subtraction of Kelvin and 273, which is 20.
const Celsius = Kelvin - 273;

//TASK 5&6: It will round the number saved to the variable Fahrenheit. I used "let" since it allows me to change the value.
let Fahrenheit = Celsius * (9/5) + 32;

//TASK 7&8: Using the .floor() method to round down the fahrenheit temperature.
Fahrenheit = Math.floor(Fahrenheit);

//TASK 9: With the use of the string interpolation, the value saved to fahrenheit will be replaced.
console.log('The temperature is ' + Fahrenheit + ' degrees Fahrenheit.');