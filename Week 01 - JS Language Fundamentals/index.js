// Week 01: JS Language Fundamentals

console.log('\n # Recommended ##################################################################################################### \n\n');

// 1. Create a variable with your name
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

var name = 'niels';
console.log(name);

// 2. Create a function that logs your name with console.log()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

function printName() {
  console.log('niels');
}
printName();

// 3. Create an object called "me" that includes properties for your first and last names as well as other properties for your website and social media
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

var me = {
  firstName: 'niels',
  lastName: 'lange',
  website: 'https://nielslange.de',
  email: 'info@nielslange.de',
  social: {
    twitter: '@codenex',
    instagram: '@codenex'
  }
}
console.log(me);

// 4. Create a boolean variable called loggedIn (set to either true or false)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

var loggedIn = true;
console.log(loggedIn);

// 5. Write a conditional statement that logs "Logged In" when loggedIn is true and "Please login" when loggedIn is false
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

var message = loggedIn ? 'Logged In' : 'Please login';
console.log(message);

// 6. Create an array called ids filled with numbers that could represent post ids
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var ids = [1, 2, 3, 5, 8];
console.log(ids);

// 7. Loop over the ids and log them all out
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

ids.forEach((e) => { console.log(e); });

// 8. Create an array of post objects. Include an id, title and content property on each object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var posts = [
  {
    id: 1,
    title: 'Hello World',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    postStatus: 'published'
  },
  {
    id: 2,
    title: 'Hello Zag',
    content: 'Praesentium voluptatum deleniti atque corrupti quos dolores.',
    postStatus: 'published'
  },
  {
    id: 3,
    title: 'Hello Wes',
    content: 'Et quas molestias excepturi sint occaecati cupiditate non provident.',
    postStatus: 'published'
  },
  {
    id: 5,
    title: 'Hello Earth',
    content: 'Similique sunt in culpa qui officia deserunt mollitia animi.',
    postStatus: 'draft'
  },
  {
    id: 8,
    title: 'Hello Niels',
    content: 'Id est laborum et dolorum fuga. Et harum quidem rerum facilis.',
    postStatus: 'scheduled'
  }
];
console.log(posts);

// 9. Loop over the array of posts and log out the title of each one
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

posts.forEach((e) => {
  if (e.postStatus == 'published') {
    console.log(e.title);
  }
});

// 10. Create a function that will take an array of posts and log out the title and content of each post.

function printPosts(data) {
  data.forEach((e) => {
    console.log(e.title + '\n' + e.content);
  });
}

// Optional *************************************************************************

console.log('\n # Optional ######################################################################################################## \n\n');

// 1. Create variables of different data types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

var varBoolean = true;
var varNull = null;
var varUndefined;
var varNumber = 23.5;
var varString = 'JS for WP Bootcamp';
var varSymbol = Symbol('bootcamp');
var varObject = {
  firstName: 'Niels',
  lastName: 'Lange'
};

console.log(varBoolean);
console.log(varNull);
console.log(varUndefined);
console.log(varNumber);
console.log(varString);
console.log(varSymbol);
console.log(varObject);

// 2. Write functions with parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

function add(firstAddend, secondAddend) {
  var sum = firstAddend + secondAddend;
  return sum;
}

function substract(minuend, subtrahend) {
  var difference = minuend - subtrahend;
  return difference;
}

function multiply(firstFactor, secondFactor) {
  var product = firstFactor * secondFactor;
  return product;
}

function divide(dividend, divisor) {
  var quotient = dividend / divisor;
  return quotient;
}

function mod(dividend, divisor) {
  var remainder = dividend % divisor;
  return remainder;
}

function pow(base, exponent) {
  var power = base ** exponent;
  return power;
}

console.log(add(2, 3));
console.log(substract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(mod(2, 3));
console.log(pow(2, 3));

// 3. Create objects with properties and methods