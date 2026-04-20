// Write a JavaScript program that takes a variable score and uses a switch
// statement to print a grade:
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60
// Then, use a ternary operator to check if the student has passed (60 or above)
// or failed, and print the result.

function score(num){
  switch (true) {
      
    case ((num>=90) && (num<=100)):
        console.log("Grade: A")
        break;
        
    case ((num>=80) && (num<=89)):
        console.log("Grade: B")
        break;
        
    case ((num>=70) && (num<=79)):
        console.log("Grade: C")
        break;
        
    case ((num>=60) && (num<=69)):
        console.log("Grade: D")
        break;
        
    case ((num>=0) && (num<=59)):
        console.log("Grade: F")
        break;
        
    default:
        console.log("Invalid score.")
    }
  
  // check if student has passed 
  (num>=60) ? (console.log("Student has passed.")) : (console.log("Student has failed."))

}

// Test
score(59)