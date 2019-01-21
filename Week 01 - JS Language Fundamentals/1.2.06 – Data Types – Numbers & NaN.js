// 1.2.6.1 - Numbers

var a = 4,
    b = 3,
    c;

c = a + b;
console.log ( c );

c = a - b;
console.log ( c );

c = a * b;
console.log ( c );

c = a / b;
console.log ( c );

c = a % b;
console.log ( c );

// 1.2.6.2 - Numbers and strings

var a = 4,
    b = '3',
    c;

c = a + b;
console.log ( c );

// 1.2.6.3 - ParseInt and ParseFloat

var a = 4,
    b = '3',
    c = '3.333',
    sum;

sum = a + b;
console.log( sum );

sum = a + parseInt( b );
console.log( sum );

sum = a + parseFloat( c );
console.log( sum );

// 1.2.6.4 - toInt

var a = 3.333;

console.log( a );
console.log( a.toFixed( 2 ) );
console.log( parseFloat( a.toFixed( 2 ) ) );

// 1.2.6.5 - Check if string or number

var a = 3,
    b = '4';

console.log( typeof a );
console.log( typeof b );

// 1.2.6.6 - NaN - Not a number

console.log( parseInt( 'tK3Vz9' ) );
console.log( 1 / '#fff' );

// 1.2.6.7 - Math objects

console.log( Math.PI );
console.log( Math.sqrt( 144 ) );
console.log( Math.pow( 13, 13 ) );

var  g = 3.33333333,
     h = 3.77777777;

console.log( Math.round( g ) );
console.log( Math.round( h ) );

var i = Number.POSITIVE_INFINITY,
    j = 1000000000,
    k = -222;

console.log( Math.max( g, h, i, j, k ) );
console.log( Math.min( g, h, i, j, k ) );
