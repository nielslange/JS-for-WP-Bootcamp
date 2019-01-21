// 1.2.20.1 - Function declaration and function call

// Function declaration
function displayPost() {
  console.log( 'Post Title' );
  console.log( 'Post Content' );
}

// Function call
displayPost();

// 1.2.20.2 - An anonymous function 

// function() {
//   console.log( 'Post' );
// }

// 1.2.20.3 - A named function 

// Function Declaration
function displayPost() {
  console.log( 'Post Title' );
  console.log( 'Post Content' );
}

// Function Calls
displayPost();
displayPost();
displayPost();

// 1.2.20.4 - A function expression

var displayPost = function() {
  console.log( 'Post' );
};

displayPost();

// 1.2.20.5 - Function calls inside a function

var displayTitle = function() {
  console.log( 'Functions' );
};

var displayExcerpt = function() {
  console.log( 'Read more..' );
};

var displayPost = function() {
  displayTitle();
  displayExcerpt();
};

displayPost();
