// 1.2.7.1 - Declaring and assigning an object

var post = {};

post = {
  id: 2,
  title: 'Hello JavaScript'
};

// 1.2.7.2 - Declaring and assigning an object

var post = {
  id: 2,
  title: 'Hello JavaScript'
};

console.log( post );

// 1.2.7.3 - Reassigning and adding new properties

var post = {
  id: 2,
  title: 'Hello JavaScript'
};

post.title = 'Hello JavaScript!';
post.slug = 'hello-javascript';

console.log( post );

// 1.2.7.4 - Getting an object or property 

var post = {
  id: 2,
  title: 'Hello JavaScript'
};

console.log( post );
console.log( post.title );

// 1.2.7.5 - Console logging objects with strings

var post = {
      id: 2,
      title: 'Hello JavaScript'
    };

console.log( 'Post: ' + post );
console.log( 'Post: ', post );
