// For in loops

// 1.2.18.1 - For in loop with an object

var post = {
      id: 1,
      slug: 'for-in',
      title: 'For In'
    };


for ( var prop in post ) {
  console.log( post[prop] );
}

// 1.2.18.2 - For in loop with an object showing keys and values

var post = {
      id: 1,
      slug: 'for-in',
      title: 'For In'
    };

for ( var prop in post ) {
  console.log(  prop + ': ' + post[prop] );
}

// 1.2.18.3 - For in loop with an array

var postIds = [ 1, 2, 34, 55, 77 ];

for ( var prop in postIds ) {
  console.log(  prop + ': ' + postIds[prop] );
}

// 1.2.18.4 - For of loop

var postIds = [ 1, 3, 10, 15 ];

for ( var id of postIds ) {
  console.log( id );
}

// 1.2.19.2 - For of loop showing keys

var postIds = [ 1, 3, 10, 15 ];

postIds.author = 'zgordon';

for ( var i of postIds ) {
  console.log( i );
}

console.log( '---' );

for ( var i in postIds ) {
  console.log( i );
}
