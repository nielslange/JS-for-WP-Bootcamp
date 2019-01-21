// 1.2.12.1 - If statements with == and ===

var loggedIn = false;

if ( false === loggedIn ) {
  console.log( 'Please login' );
}

loggedIn = 0;

if ( false == loggedIn ) {
  console.log( 'Please login' );
}

// 1.2.12.2 - If statement with no =

var loggedIn = 'false';

if ( loggedIn ) {
  console.log( 'Welcome!' );
}

// 1.2.12.3 - Yoda style declarations 

var username = 'yoda';

if ( 'yoda' === username ) {
  console.log( 'Proceed Yoda' ); 
}

username = 'rey';

if ( username = 'yoda' ) {
  console.log( 'Proceed Yoda' ); 
}

if ( 'yoda' = username ) {
  console.log( 'Proceed Yoda' ); 
}
