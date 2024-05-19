//TASK 1:This is what my current age is
const myAge = 14;

//TASK 2: This is the early years wherein the value saved will change
let earlyYears= 2;

//TASK 3: Using the multiplication operator to multiplying the earlyYears' value by 10.5
earlyYears *= 10.5;

//TASK 4: This code will show my age when subtracted with 2 and will be changed later on
let laterYears = myAge-2;

//TASK 5: Multiplying laterYears by 4 to calculate dog years for my later years
laterYears *=4;

//TASK 6: Printing the values of laterYaers and earlyYears
console.log(laterYears);
console.log(earlyYears);

//TASK 7: By adding earlyYears and laterYears in a variable myAgeInDogYears will show my age in dog years
let myAgeInDogYears= earlyYears + laterYears;

//TASK 8: Using the string and .toLowerCasw() method and storing in myName
let myName = "Czyra".toLowerCase();

//TASK 9: This code will show my name in lowercase and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

//TASK 10: Converting any human age to dog years, changing myAge, and using without *=

const myage = 16;

let earlyyears= 2;

earlyYears = earlyyears * 10.5;

let lateryears = myage-2;

lateryears = lateryears * 4;

console.log(lateryears);
console.log(earlyyears);

let myageInDogYears= earlyyears + lateryears;

let myname = "Marky".toLowerCase();

console.log(`My name is ${myname}. I am ${myage} years old in human years which is ${myageInDogYears} years old in dog years.`);