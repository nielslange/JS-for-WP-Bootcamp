// 1.2.14.1 - Switch statements

var user = {
      role: 'editor',
      username: 'zgordon',
      twitter: 'zgordon'
    };

switch ( user.role ) {
  case 'admin':
    console.log( 'Show admin' );
    break;
  case 'editor':
    console.log( 'Show all posts' );
    break;
  case 'author':
    console.log( 'Show author posts' );
    break;
  case 'contributor':
    console.log( 'Show admin' );
    break;
  default:
    console.log( 'Contact admin' );
}

// 1.2.14.2 - Switch statement missing breaks

var user = {
      role: 'editor',
      username: 'zgordon',
      twitter: 'zgordon'
    };

switch ( user.role ) {
  case 'admin':
    console.log( 'Show admin' );
    //break;
  case 'editor':
    console.log( 'Show all posts' );
    //break;
  case 'author':
    console.log( 'Show author posts' );
    break;
  case 'contributor':
    console.log( 'Show admin' );
    break;
  default:
    console.log( 'Contact admin' );
}

// 1.2.14.3 - Chaining multiple cases in a switch statement

var user = {
      role: 'editor',
      username: 'zgordon',
      twitter: 'zgordon'
    };

switch ( user.role ) {
  case 'admin':
  case 'editor':
  case 'author':
    console.log( 'Show available posts' );
    break;
  case 'contributor':
    console.log( 'Show admin' );
    break;
  default:
    console.log( 'Contact admin' );
}

// 1.2.14.4 - Switch vs. else if and things switch cannot do

// Switch statements cannot test multiple conditions

if ( 'admin' === user.role && 'zgordon' === user.username ) {
  console.log( 'Show Dashboard' );
} else if ( 'admin' === user.role && 'dev' === user.username ) {
  console.log( 'Show Source' );
} else if ( 'editor' === user.role && '' !== user.twitter ) {
  console.log( 'Please share this post!' );
}

// Switch statements always check for type

var x = 2;

if ( '2' == x ) {
  console.log( x );
} else if ( 4 == x ) {
  console.log( x );
}

// 1.2.14.5 - Example of else if that switch statement could do

var user = {
      role: 'editor',
      username: 'zgordon',
      twitter: 'zgordon'
    };

if ( 'admin' === user.role ) {
  console.log( 'Show admin' );
} else if ( 'editor'  ===  user.role ) {
  console.log( 'Show all posts' );
} else if ( 'author'  ===  user.role ) {
  console.log( 'Show author posts' );
} else {
  console.log( 'Show contact admin' );
}

// 1.2.14.6 - Possible WP use case for switch statement

var user = {
      role: 'editor',
      username: 'zgordon',
      twitter: 'zgordon'  
    };

switch ( user.role ) {
  case 'admin':
  case 'editor':
  case 'author':
  case 'custom1':
  case 'custom2':
  case 'custom3':
  case 'custom4':
  case 'custom5':
    console.log( 'Show admin' );
    break;
  case 'contributor':
    console.log( 'Show submit post form' );
    break;
  default:
    console.log( 'Please login' );
}
