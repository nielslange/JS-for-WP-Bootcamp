// 1.2.8.1 - Symbols

var post = {
      id: 2,
      slug: 'hello-js',
      title: 'Hello JavaScript!'
    },
    IS_ACTIVE = Symbol();

post[IS_ACTIVE] = true;

console.log( post[IS_ACTIVE] );

// 1.2.8.2 - Symbols as keys

var post = {
      title: 'Hello JavaScript!'
    },
    UNIQUE_KEY = Symbol();

post.key = UNIQUE_KEY;

console.log( post.key );
