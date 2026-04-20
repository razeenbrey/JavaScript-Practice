// Write a function named greetingBot that:
// Takes a user’s name and a boolean value isMorning.
// If
// isMorning is true, return "Good morning, [name]!"; otherwise, return
// "Hello, [name]!". Use logical operators and template literals to build
// your output.
// Then test your function with different inputs.

function greetingBot(name, isMorning){
  if (isMorning){
    console.log(`Good morning, ${name}!`);
  }
  else{
    console.log(`Hello, ${name}!`);
  }
}

// Tests
greetingBot("Razeen", true)
greetingBot("Razeen", false)
greetingBot("John", 0)
greetingBot("Chris", null)
greetingBot("Zweli", 123)