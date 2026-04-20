// Create two arrays of numbers, merge them using the spread operator, and print the combined array.
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5, 6]
console.log(arr2)

// Use a for loop to print the following pattern:

//             *
//          *    *
//       *    *    *
//    *     *    *    *
// *     *    *    *    *
let n = 5

for(let i = 1; i <= n; i++) {
  let output = ""
  
    for(let j=i; j<=n; j++){
    output += " ";
  }
  
  for(let k=1; k<=i; k++){
    output += " * ";
  }
  
  for(let j=1; j<=(n-1); j++){
    output += " ";
  }
  
  console.log(output)
}



// Use a while loop to print numbers from 10 down to 1.
  let count = 10;
  while (count > 0) {
    console.log(count);
    count--;
  }