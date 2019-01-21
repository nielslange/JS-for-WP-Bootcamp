// 1.2.18.1 - Switch statement with break

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

// 1.2.18.2 - Break statement in a loop

var categories = [ 'JavaScript', 'WordPress', 'API', 'React', 'JSON' ],
    max = categories.length;

for ( var i = 0; i < max; i++ ) {
  if( 'API' === categories[i] ) break;
  console.log( categories[i] );
}

// 1.2.18.3 - Continue statement in a loop

var categories = [ 'JavaScript', 'WordPress', 'API', 'React', 'JSON' ],
    max = categories.length,
    i;

for ( i = 0; i < max; i++ ) {
  if( 'API' === categories[i] ) continue;
  console.log( categories[i] );
}
