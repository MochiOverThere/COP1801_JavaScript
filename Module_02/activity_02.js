// Utilize the prompt method to ask user for their first name & store it in the Fname variable
var Fname = prompt("Please enter your first name:");

// Display a welcome message containing the user's provided Fname
alert("Hello " + Fname + " ! Welcome to the circle area calculator.");

// Create constant piValue variable to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

// Utilize prompt() again to ask for and store user's favorite number in the myFavNum variable
var myFavNum = prompt("Please enter your favorite number:");

// Convert the user input into a floating point number using the parseFloat() method
myFavNum = parseFloat(myFavNum);

// Calculate the area of a circle using the myFavNum value as the radius & store it in the myArea variable
var myArea = piValue * Math.pow(myFavNum, 2);

// Display variable containing user name and name of variable
document.write("<p>Fname = " + Fname + ": variable to store the user's name as a string.</p>");

// Display variable containing user's favorite number and name of variable
document.write("<p>myFavNum = " + myFavNum + ": variable to store the user's favorite number, converted to a floating point decimal.</p>");

// Display variable containing area of a circle using myFavNum as the radius and name of variable
document.write("<p>myArea = " + myArea + ": variable to store the area of a circle using the user's favorite number as the radius.</p>");

// Display message with the user's name, favorite number, and the area of the circle
document.write("<p>Hello " + Fname + ", you entered " + myFavNum + " as your favorite number. If that was the radius of a circle, the circle's area would be " + myArea.toFixed(7) + ".</p>")
