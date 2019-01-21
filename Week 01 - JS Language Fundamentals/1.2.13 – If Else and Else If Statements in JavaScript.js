// 1.2.13.1 - If else statement

var loggedIn = true;

if ( true === loggedIn ) {
  console.log( 'Show post' );
} else {
  console.log( 'Please login' );
}

// 1.2.13.2 - Else if statement

var user = {    
      role: 'editor',
      username: 'test'
    };

if ( 'admin' === user.role ) {
  console.log( 'Show admin' );
} else if ( 'editor'  ===  user.role ) {
  console.log( 'Show all posts' );
} else if ( 'author'  ===  user.role ) {
  console.log( 'Show author posts' );
} else {
  console.log( 'Please contact admin' );
}

// 1.2.13.3 - Unrecommended If Statement Formatting

var loggedIn = false;

// One line statements without curly braces

if ( true === loggedIn ) 
  console.log( 'Show post' );
else 
  console.log( 'Please login' );

  // Missing spaces

if(true===loggedIn){
  console.log('Show Post');
}else{
  console.log('Please login');
}