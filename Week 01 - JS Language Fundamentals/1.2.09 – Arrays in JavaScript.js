// 1.2.9.1 - Declaring an array

var postIds = [];

// 1.2.9.2 - Declaring an array with new

var postIds = new Array();

// 1.2.9.3 - Declaring and assigning arrays

var postIds = [ 1, 2, 3, 4 ],
    combo = [ 1, 'Text', true ];

console.log( postIds );
console.log( combo );

// 1.2.9.4 - An array of objects

var posts = [
  {
    id: 1,
    title: 'Hello World'
  },
  {
    id: 2,
    title: 'Hello JavaScript'
  },  
  {
    id: 3,
    title: 'Hello Arrays!'
  }
];

console.log( posts );

// 1.2.9.5 - Nested arrays

var postIds = [ 376, 400, 764 ],
    userIds = [ 1, 4, 9 ],
    data = [ postIds, userIds ];

console.log( data );

// 1.2.9.6 - Nested arrays verses objects

var postIds = [ 376, 400, 764 ],
    userIds = [ 1, 4, 9 ],
    data = [ postIds, userIds ];

console.log( data );

data = {
  postIds: postIds,
  userIds: userIds
};

console.log( data );

// 1.2.9.7 - Getting a value based index

var postIds = [ 3, 7, 18, 25 ];

console.log( postIds[ 0 ] );
console.log( postIds[ 1 ] );
console.log( postIds[ 4 ] );

// 1.2.9.8 - Reassigning a value in an array

var postIds = [ 3, 7, 18, 25 ];

postIds[ 0 ] = 5;

console.log( postIds );

// 1.2.9.9 - Adding a value to an array

var postIds = [ 3, 7, 18, 25 ];

postIds.push( 32 );
console.log( postIds );

postIds.push( 64, 78 );
console.log( postIds );

postIds.unshift( 32 );
console.log( postIds );

// 1.2.9.10 - Removing a value from an array

var postIds = [ 3, 7, 18, 25 ];

// Remove from end of array
postIds.pop();
console.log( postIds );

// Remove from beginning of array
postIds.shift();
console.log( postIds );

// Remove based on index, takes index, number items to be removed
postIds.splice( 2, 1 );
console.log( postIds );

// 1.2.9.11 - Getting length of an array

var postIds = [ 3, 7, 18, 25, 38 ];

// Get the number of items in an array
console.log( postIds.length );

// Get the last item in an array
console.log( postIds[ postIds.length ] );
console.log( postIds[ postIds.length - 1] );

// 1.2.9.12 - Concatenating arrays

var savedPostIds = [ 3, 7, 18, 25, 38 ],
    newPostIds = [ 77, 84, 93, 101 ],
    postIds;

postIds = savedPostIds.concat( newPostIds );
console.log( postIds );

// 1.2.9.13 - Slicing arrays

var postIds = [ 3, 7, 18, 25, 38, 44, 57, 64, 72 ],
    selectedPosts;

selectedPostIds = postIds.slice( 2, 7 );
console.log( selectedPostIds );

// 1.2.9.14 - Sorting arrays

var postTitles = [
  'JavaScript',
  'WordPress',
  'Arrays'
],
postIds = [ 7, 44, 13, 21, 71 ];

// Sort text ascending
postTitles.sort();
console.log( postTitles );

// Sort text descending
postTitles.reverse();
console.log( postTitles );

// Does not sort as we would expect
postIds.sort();
console.log( postIds );

// Sort numbers ascending
postIds.sort( function( a, b ) {return a - b;} );
console.log( postIds );

// Sort numbers descending - incorrect
postIds.sort( function( a, b ) {return a + b;} );
console.log( postIds );

// FIX: sort numbers descending - correct
postIds.sort( function( a, b ) {return b - a;} );
console.log( postIds );

// 1.2.9.15 - .forEach

var postTitles = [
      'JavaScript',
      'WordPress',
      'Arrays'
    ];

postTitles.forEach( function( title ) {
  console.log( 'Title: ' + title );
});

// 1.2.9.16 - .isArray

var postIds =  [ 7, 44, 13, 21 ],
    postId = 7;

console.log( Array.isArray( postIds ) );
console.log( Array.isArray( postId ) );

// 1.2.9.17 - Convert arrays to strings and strings to arays

var postTitles = [
      'JavaScript',
      'WordPress',
      'Arrays'
    ],
    userFields = 'Name, Email, Website',
    url = 'http://domain.com/learn/javascript/#content';

// Convert an array to a string
console.log( postTitles.toString() );

// Convert a string to an array
console.log( userFields.split( ',' ) );

// Convert a string to an array
console.log( url.split( '/' ) );
