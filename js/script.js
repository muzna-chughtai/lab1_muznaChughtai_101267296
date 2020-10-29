// LAB VARIABLES:
//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle=`UX Designer`
let myFutureCity=`Toronto`
let annualSalary=`20k`
let companyName=`Deliotte`

console.log(`You will be a ${jobTitle} in ${myFutureCity}, making $${annualSalary} for ${companyName}.`)

let str=`You will be a ${jobTitle} in ${myFutureCity}, making $${annualSalary} for ${companyName}`
 document.getElementById("ex1").innerHTML=str;

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let currentYear=`2020`
let birthYear=`1995`
let age= currentYear - birthYear;


console.log(`They are ${age} years old.`)

let str2=`They are ${age} years old.`
 document.getElementById("ex2").innerHTML=str2;

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let currentAge=`28`
let maximumAge=`60`
let amountPerDay=`3`
let lifetimeSupply=(maximumAge-currentAge)*(amountPerDay*365);

console.log(`You will need ${lifetimeSupply} to last you until the ripe old age of ${maximumAge}.`)

let str3=`You will need ${lifetimeSupply} to last you until the ripe old age of ${maximumAge}`
 document.getElementById("ex3").innerHTML=str3;

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let radius= 20
let circumference= Math.PI* 2*radius;

console.log(`The circumference is ${circumference}`)

let area=Math.PI* radius*radius;

console.log(`The area is ${area}`)

let str4=`The area is ${area}.`
 document.getElementById("ex4").innerHTML=str4;

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius= 33
let celsiusToFahrenheit= (celsius*9)/5+32;

console.log(`${celsius}°C is ${celsiusToFahrenheit}°F`)

let fahrenheit= 33
let fahrenheitInToCelsius=((fahrenheit -32)*5)/9;

console.log(`${fahrenheit}°F is ${fahrenheitInToCelsius}°C.`)

let str5=`${fahrenheit}°F is ${fahrenheitInToCelsius}°C.`
document.getElementById("ex5").innerHTML=str5;
//LAB FUNCTIONS:
// EXERCISE 6
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(a){
    let squareNum = a*a;
    console.log(`The result of squaring the number ${a} is ${squareNum}`)
    return squareNum;
}
squareNumber(3);

let eleEx6 = document.querySelector("#ex6")
eleEx6.textContent = `The result of squaring the number${squareNumber(3)}`
 


// EXERCISE 7
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(a){
    let half = a/2;
    console.log(`Half of ${a} is ${half}.`)
    return half;
}
halfNumber(5);


let ele = document.querySelector("#ex7")
ele.textContent = `Half of 5 is ${halfNumber(5)}`

// EXERCISE 8
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(a,b){
    let percent= (a/b)*100;
    console.log(`${a} is ${percent}% of ${b}`)
    return percent;
}
percentOf (5,10);

let eleEx8 = document.querySelector("#ex8")
eleEx8.textContent = `5 is ${percentOf(5,10)}% of 10`

// EXERCISE 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radius){
    let area= Math.PI *radius*radius;
    console.log(`The area for a circle with radius ${radius} is ${area}`)
    return area;
}
areaOfCircle(2);

let eleEx9 = document.querySelector("#ex9")
eleEx9.textContent = `The area for a circle with radius 2 is ${areaOfCircle(2)}`

// EXERCISE 10
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function runAll(a){
    let half = halfNumber(a);
    let squared = squareNumber(half);
    let area = areaOfCircle(squared);
    let result = percentOf(squared,area);
    console.log(`Half of number is ${half}, square of half is ${squared},area with radius 6.25 is ${area} & percentage of area is ${result}`)
}
runAll(5);

let eleEx10 = document.querySelector("#ex10")
eleEx10.textContent = `${runAll()}`