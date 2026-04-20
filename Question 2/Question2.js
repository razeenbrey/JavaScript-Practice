// Create a program that:Takes a string input like "25" and converts it into a number.
// Tests whether different values (0, "", "hello", null, undefined, NaN) are truthy or falsy using if statements.
// Print out which values are truthy and which are falsy.

function truthyFalsyChecker(inp){
  if (inp){
    console.log("The input is truthy.");
  }
  else{
    console.log("The input is falsy.");
  }
}

function numConverter(inp){
  truthyFalsyChecker(inp)
  if (typeof inp !== 'string') {
    throw new Error("Please enter a string.");
  }
  else{
    return(Number(inp));
  }
}

// Test
numConverter("234")