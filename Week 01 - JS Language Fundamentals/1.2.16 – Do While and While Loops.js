// 1.2.16.1 - Do while loop

var postIds = [ 1, 2, 37, 44, 88, 122 ],
    i = 0,
    max = postIds.length;

do {
  console.log( postIds[i] );
  i++;
} while ( i < max );

// 1.2.16.2 - Do while loop still runs at least once

var loggedIn = false;

do {
  console.log( 'Display admin bar' );
} while ( true === loggedIn );

// 1.2.16.3 - Do while loop with window 

var signedUp = false,
    askAgain = true;

do {
  // Wait some time
  signUp = window.confirm( 'Sign Up!' );
} while ( false === signUp && true === askAgain );

// 1.2.16.4 - While loop 

var postsToDisplay = 10;

while ( postsToDisplay > 0 ) {
  console.log( 'Display post' );
  postsToDisplay--;
}
