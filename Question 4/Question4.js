// Create
// a JavaScript object named post representing a social media post with
// these properties: username, caption, likes, comments (array data type).

// Add a method inside the object named addLike() that increases the like count by 1.
// Then, use object destructuring to extract and print the username and caption.

let post = {
  username: "@razeenbrey",
  caption: "Powered by ZAIO",
  likes:0,
  comments: [],
  
  addLike: function(){
    this.likes +=1;
  }
}

// Tests
post.addLike()
let {username, caption} = post;
console.log("Username: " + username)
console.log("Caption: " + caption)