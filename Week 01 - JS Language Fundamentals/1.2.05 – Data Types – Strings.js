// 1.2.5.1 - String values

var username = 'nielslange';
console.log( username );

// 1.2.5.2 - String values with missing quotation marks

var username = 'nielslange';
console.log( username );

// 1.2.5.3 - String values

var title = 'Hello JavaScript!';
var content = 'Lorem ipsum dolor sit amet';

// 1.2.5.4 - String concatenation

var title = 'Hello JavaScript!';
var content = 'Lorem ' + ' ipsum';
var post = title + ' - ' + content;
console.log ( post );

// 1.2.5.5 - Variables at top

var title = 'Hello JavaScript!',
    content = 'Lorem ' + ' ipsum',
    post;
var post = title + ' - ' + content;
console.log ( post );

// 1.2.5.6 - String methods

var title = 'Hello, my world!',
    content = 'Lorem ipsum',
    spacey = ' username ';
console.log ( title.charAt( 1 ) );
console.log ( title.slice( 0, -1 ) );
console.log ( title.slice( 2 ) );
console.log ( content.concat( ' ', title ) );
console.log ( spacey.trim() );