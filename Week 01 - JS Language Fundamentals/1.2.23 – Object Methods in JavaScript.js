// 1.2.23.1 - Object with properties

var post = {
  id: 2,
  title: 'Hello JavaScript'
};

console.log( post );
console.log( post.title );

// 1.2.23.2 - Object with properties and a method

var post = {
  id: 2,
  title: 'Hello JavaScript',
  displayTitle: function() {
    console.log( post.title );
  }
};

post.displayTitle();

// 1.2.23.3 - Dot method declaration

var post = {
  id: 2,
  title: 'Hello JavaScript'
};

post.displayTitle = function() {
    console.log( post.title );
};

post.displayTitle();

// 1.2.23.4 - Method with parameters and return value

var post = {
  id: 2,
  title: 'Hello JavaScript',
  getTitleMarkup: function( tag ) {
    
    var markup = '';
 
    markup += '<' + tag + '>';
    markup += post.title;
    markup += '</' + tag + '>';
 
    return markup;
    
  }
};

var titleHTML = post.getTitleMarkup( 'h2' );

console.log( titleHTML );

// 1.2.23.5 - this in a Method

var post = {
  id: 2,
  title: 'Hello JavaScript'
};

post.displayTitle = function() {
    console.log( this.title );
};

post.displayTitle();

// 1.2.23.6 - this in a Method

var post = {
  id: 2,
  slug: 'hello-javascript',
  title: 'Hello JavaScript',
};

post.getTitleLink = function() {

  var markup = '';
  
  markup += '<a href="' + this.slug + '">';
  markup += this.title;
  markup += '</a>';
  
  return markup;

};

var title = post.getTitleLink();

console.log( title );
