/** Tasks:

Declare and Initialize Variables:

Create a variable userName and assign your name to it.
Create a variable userAge and assign your age to it.
Print both variables to the console.*/

//----------------------------------------------------------

let userName = "John";

let userAge = 25;

console.log(userName);

console.log(userAge);



/** Variable Naming:

Declare a variable with a name that is not allowed (e.g., let 1user;) and observe the error.
Correct the variable name to follow the naming rules (e.g., let user1;). */

//----------------------------------------------------------------------

// let 1user; // This will cause an error
let user1; // Corrected variable name


/** Reassigning Variables:

Declare a variable favoriteColor and assign a color to it.
Reassign the variable to a different color.
Print the variable before and after reassignment.*/

//---------------------------------------------------------

let favoriteColor = "blue";

console.log(favoriteColor);

favoriteColor = "green";

console.log(favoriteColor);


/** Using const and let:

Declare a constant variable birthYear and assign your birth year to it.
Try to reassign the birthYear variable and observe the error.
Declare a let variable currentYear and assign the current year to it.
Reassign the currentYear variable to the next year.*/

//----------------------------------------------------------------------

const birthYear = 1995;

// birthYear = 2000; // This will cause an error

let currentYear = 2024;

currentYear = 2025;

console.log(currentYear);
