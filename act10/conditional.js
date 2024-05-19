//PROGRAM 1: TEMPERATURE CONVERTER

// Prompt user to enter temperature and its unit
let temperature = prompt("Enter temperature:");
let unit = prompt("Enter unit (C for Celsius, F for Fahrenheit):");

// Convert temperature based on unit
let convertedTemperature;

//Using if, else if, and else statement in converting the temperature based on the given unit
if (unit === "C") {
  let convertedTemperature = (temperature * 9/5) + 32
  console.log(convertedTemperature,"degrees Celcius")
}
else if (unit === "F") {
  let convertedTemperature = (temperature - 32) * 5 / 9
  console.log(convertedTemperature,"degrees Fahrenheit")
}
else {
  console.log("There is an error.")
}


//PROGRAM 2: GRADE CALCULATOR

let score = prompt("Enter the score:");

//Using if, else if, and else statement in calculating grade based on score
let grade;

if (score>=90) {
  let grade = "A"
  console.log("Grade:", grade)
}
else if (score>=80) {
  let grade = "B"
  console.log("Grade:", grade)
}
else if (score >= 70) {
  let grade = "C"
  console.log("Grade:", grade)
}
else if (score >= 60) {
  let grade = "D"
  console.log("Grade:", grade)
}
else {
  let grade = "F"
  console.log("Grade:", grade)
}