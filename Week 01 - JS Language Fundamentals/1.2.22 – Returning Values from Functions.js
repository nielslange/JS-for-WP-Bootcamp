// 1.2.22.1 - Default return value of a function

var getPostTitle = function() {
  console.log( 'Title' );
};

var title = getPostTitle();

console.log( title );

// 1.2.22.2 - Using return in a function

var getPostTitle = function() {
  return 'Title';
};

var title = getPostTitle();

console.log( title );

// 1.2.22.3 - Returning values in functions with a variable

var getPostTitle = function() {
  var title = 'Title';
  return title;
};

var title = getPostTitle();

console.log( title );

// 1.2.22.4 - Multiple functions returning values

var getPostTitle = function() {
  return 'Title';
};

var getPostAuthor = function() {
  return 'Zac';
};

var displayPostHeading = function() {

  var title = getPostTitle(),
      author = getPostAuthor();
  
  console.log( title + ' by ' +  author );
  
};

displayPostHeading();