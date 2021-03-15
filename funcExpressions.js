// FUNCTION EXPRESSIONS (AKA The Func Express)
// Creating a function and storing it to a variable

/*
Syntax Example

variableType variableName = function() {
  CODE TO BE RUN GOES HERE;
}

Can also be done with an Arrow Function set as the value...
variableType variableName = () => {
  CODE TO BE RUN GOES HERE;
}
*/

// Example 1
const theFuncExpress = function(){
    console.log(`Hop on board the Func Express`);
    console.log(`This is a Function Expression`);
  }
  theFuncExpress();
  
  console.log("=========");
  
  // Example 2A
  // CAN run a function declaration (Or Arrow Function) on a line that precedes where the function is created, because function declarations are Hoisted to the beginning of the JavaScript file.
  funcOne();
  
  function funcOne(){
    console.log(`Hello`);
  }
  
  // Example 2B
  // Can NOT run a Function Expression on a line that precedes where the function is created, because Function Expressions are NOT Hoisted to the beginning of JavaScript file.
  // funcTwo();
  
  const funcTwo = function(){
    console.log(`Not hoisted`);
  }
  
  console.log("========");
  
  // Example 3
  // Function Expression that uses an arrow function as the function value set to the funcThree variable
  const funcThree = () => {
    console.log(`End of lesson`);
  }
  funcThree();
  