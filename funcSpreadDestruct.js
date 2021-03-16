// SPREAD & DESTRUCTURING WITH FUNCTIONS (Parameters and Arguments)

// *** ARRAYS ***
const powerRangers = [
  `Blue`,
  `Red`,
  `Black`,
  `Yellow`,
  `Pink`
];

// Without Spread or Destructuring
function aWOS(color){
  console.log(color[0]);
  console.log(color[1]);
  console.log(color[2]);
  console.log(color[3]);
  console.log(color[4]);
}
// Displays each item from the powerRangers array by accessing each one using the index for it
aWOS(powerRangers);

console.log("=========");

// SPREAD
// With Spread
function aWS(a, b, c, d, e){
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}
// Using spread to use the items in the powerRangers array as arguments that are passed in the AWS function
aWS(...powerRangers);
// aWS(`Blue`, `Red`, `Black`, `Yellow`, `Pink`);

console.log("==========");

// DESTRUCTURING
// With Destructuring
// Destructuring the arguments passed in by destructuring the parameter for the function
function aWD([one, two, three, four, five]){
  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);
  console.log(five);
}
aWD(powerRangers);

console.log("=========");

// *** OBJECTS ***
const rangerNames = {
  blueRanger: `Billy`,
  redRanger: `Jason`,
  blackRanger: `Zack`,
  yellowRanger: `Trini`,
  pinkRanger: `Kimberly`
};

// Key value pairs (AKA Properties) in an objects cannot be spread as argument values when a function is run/called

// DESTRUCTURING
// Without Destructuring
function oWOD(name){
  console.log(name.blueRanger);
  console.log(name.redRanger);
  console.log(name.blackRanger);
  console.log(name.yellowRanger);
  console.log(name.pinkRanger);
}
// Displays each key value from the rangerNames object by accessing each value with the key that is paired with it
oWOD(rangerNames);

// With Destructuring
// Example 1
// Destructuring the object argument passed in by destructuring the parameter for the function
function oWD1({ blueRanger, redRanger, blackRanger, yellowRanger, pinkRanger }){
  console.log(blueRanger);
  console.log(redRanger);
  console.log(blackRanger);
  console.log(yellowRanger);
  console.log(pinkRanger);
}
oWD1(rangerNames);

console.log("============");

// Example 2
// Parameter destructuring can be used to selector only certain keys from an object (NOTE: This only works when the argument that is passed in is an object)
function oWD2({yellowRanger, pinkRanger}){
  console.log(yellowRanger);
  console.log(pinkRanger);
}
oWD2(rangerNames);

console.log("=======");

// USING REST WITH FUNCTIONS
// Using Rest so if 2 or more arguments (AKA the Rest) are passed in to this function they will be grouped in the "b" parameter as an array of those values.
function funcWithRest(a, ...b){
  console.log(a);
  console.log(b);
}
funcWithRest(`Rita Repulsa`, `Ivan Ooze`, `Goldar`, `Lord Zedd`);