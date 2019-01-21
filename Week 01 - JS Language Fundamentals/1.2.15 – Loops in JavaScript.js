// 1.2.15.1 - The for loop

for ( var count = 1; count < 6; count++ ) {
  console.log( 'Display post #' + count );  
}

// 1.2.15.2 - For loop i variable

for ( var i = 0; i < 5; i++ ) {
  console.log( 'Display post #' + i );
}

// 1.2.15.3 - For loop multiple initial expressions

var postIds = [ 1, 7, 14, 34, 88, 117 ];

for ( var i = 0, max = postIds.length; i < max; i++ ) {
  console.log( 'Display post #' + postIds[i] );
}

for ( var i = 0; i < postIds.length; i++ ) {
  console.log( 'Display post #' + postIds[i] );
}

// 1.2.15.4 - For loop multiple conditional conditions

var site1PostIds = [ 1, 2, 3, 4, 5, 6 ],
    site2PostIds = [ 1, 2, 3 ];

for ( var i = 0, 
          max1 = site1PostIds.length, 
          max2 = site2PostIds.length; 
          i < max1 && i < max2; 
          i++ ) {
  console.log( 'Site 1: Post #' + site1PostIds[i] );
  console.log( 'Site 2: Post #' + site2PostIds[i] );
}

// 1.2.15.5 - For loop multiple increment expressions

var orderIds = [ 1, 2, 3, 4, 5 ],
    stock = 100;

for ( var i = 1, max = orderIds.length; i <= max; i++, stock-- ) {
  console.log( 'Processing Order#' + i );
  console.log( 'Stock: ' + stock );
}

// 1.2.14.6 - Initial expressions declared before loop, conditional statement placed inside loop, iterator statement included at end of loop

var i = 1;

for ( ; ; ) {
  if ( i <= 5 ) {
    console.log( 'Display post: ' + i );
  }
  i++;
}

// 1.2.15.6 - An infinite loop

for ( i = 0, max = 10; i < max; max++ ) {
  console.log( 'Hello' );
}
