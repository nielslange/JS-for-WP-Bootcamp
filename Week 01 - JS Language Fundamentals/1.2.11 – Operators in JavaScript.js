// 1.2.11.1 - Assignment operators

var username = 'zgordon',
    x = 5,
    y = 10;

// Same as x = x + y
x += y;
console.log( x );

// Same as x = x - y
x -= y;
console.log( x );

// Same as x = x * y
x *= y;
console.log( x );

// Same as x = x / y
x /= y;
console.log( x );

// 1.2.11.2 - Comparison operators

var isLoggedIn = true,
    currentPostId = 500,
    userRole = 1;

if ( true === isLoggedIn ) {
  console.log( 'Show Dashboard' );
}

if ( 2 > userRole ) {  
  console.log( 'Show Admin Options' );  
}

if ( 500 <= currentPostId ) {  
  console.log( 'Award points' );  
}

if ( 1 !== userRole ) {
  console.log( 'Not an Admin' );   
}

// 1.2.11.3 - Arithmetic operators

var x = 1;

// Add 1
x++;
console.log( x );

// Subtract 1
x--;
console.log( x );

// Add 1 after assign
console.log( x++ );
console.log( x );

// Add 1 before assign
console.log( ++x );
console.log( x );

// 1.2.11.4 - Logical Operators

var user =  {
      id: 1,
      name: 'Zac',
      role: 'admin',
      loggedIn: true
    },
    post = {
      id: 777,
      status: 'private',
      authorId: 1
    };

if ( 'admin' ===  user.role && post.authorId === user.id ) {
  console.log( 'Edit your posts.' );
}

if ( true === user.loggedIn || 'private' !== post.status ){
  console.log( 'Show post' );
}

// 1.2.11.3 - String operators

var firstName = 'Zac',
    lastName = 'Gordon',
    html = '';

// console.log( 'Zac' + 'Gordon' );
// console.log( firstName + lastName );
// console.log( firstName + ' ' + lastName );

html += '<ul>\n';
html += '<li>Name</li>\n';
html += '<li>Email</li>\n';
html += '<li>Website</li>\n';
html += '</ul>';

console.log( html );

// 1.2.11.3 - Conditional or ternary operator

var post = {
      status: 'draft'
    },
    displayPost;

displayPost = ( 'published' === post.status ) ? true : false;
console.log( displayPost );
