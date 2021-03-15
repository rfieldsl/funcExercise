// FUNCTION ARRAY METHODS (ForEach, Map, & Filter)
// Array methods that require a function to be passed in as an argument

// FOR EACH
// Calls/Runs a function for each item in the array

const friends = [
    `Chandler Bing`,
    `Rachel Green`,
    `Monica Geller`,
    `Ross Geller`,
    `Joey Tribbiani`,
    `Phoebe Buffay`
  ];
  
  // Example 1
  names = (n) => {
    console.log(n);
  }
  // Runs the names function on each item in the "friends" array using the array item value as the arugment for the "p" parameter (NOTE: Function must have a parameter to plug the value of each array item into).
  friends.forEach(names);
  
  console.log("========");
  
  // Example 2
  // Runs the anonymous arrow function on each item in the "friends" array (NOTE: You can create a new function instead of passing in a precreated function)
  friends.forEach(n => console.log(n.toUpperCase()));
  
  console.log("==========");
  
  // MAP
  // Creates a new array with the returned values from calling/running a function for every array item. (NOTE: The Map method does NOT alter the original array).
  
  const actors = [
    {first: `Jennifer`, last: `Aniston`},
    {first: `Matthew`, last: `Perry`},
    {first: `Courteney`, last: `Cox`},
    {first: `David`, last: `Schwimmer`},
    {first: `Matt`, last: `LeBlanc`},
    {first: `Lisa`, last: `Kudrow`}
  ];
  
  // Example 1
  function realNames(a){
    return `${a.first} ${a.last}`;
  }
  