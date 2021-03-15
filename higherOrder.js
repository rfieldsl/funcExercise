// HIGHER ORDER FUNCTIONS
// Passing a function as a parameter/argument into another function

// Example 1 (Passing a prexisting function as a parameter)

// Function created to pass as an argument into the "print" function
function hello() {
    console.log(`Hello`);
  }
  
  function print(greet) {
    // Need to include the parentheses "()" so the function passed in as an argument will run/execute
    greet();
  }
  // Do NOT include "()" after function name when passing in as an arugment. Doing this will run/execute the function before is it passed in.
  print(hello);
  
  console.log('==========');
  
  // Example 2
  function funcOne(p = function(){
    console.log(`Set a function as the default parameter value`);
  }){
    p();
  }
  // Runs the funcOne function with the default anonymous function as the argument for the "p" parameter
  funcOne();
  console.log('=========');
  // Runs the funcOne function with the "hello" function as the argument
  funcOne(hello);
  console.log('=========');
  // Runs/executes the anonymous arrow function that is passed in as the argument
  funcOne(() => console.log(`This is an anonymous arrow function`));
  
  