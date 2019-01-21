// 1.2.21.1 - A function with single parameter

var post = {
      id: 1,
      title: 'Function Parameters'
    };

var displayTitle = function( title ) {
  console.log( title );
};

displayTitle( post.title );

// 1.2.21.2 - Function calls with different parameters

var posts = [
   {
      id: 1,
      title: 'Function Parameters'
    },
    {
      id: 2,
      title: 'Parameters are so flexible!'
    }
 ];

var displayTitle = function( title ) {
  console.log( title  );
};

for ( var post of posts ) {
  displayTitle( post.title );
}

// 1.2.21.3 - Function with multiple parameters and multiple function calls

var title = 'Post about Parameters',
    author = 'Zac',
    recommendedPost = 'Learn JavaScript';

var displayPost = function( title, author, recommendedPost ) {
  console.log( title + ' by ' + author );
  console.log( 'Read next: ' + recommendedPost );
};

displayPost( title, author, recommendedPost );

// 1.2.20.1 - Function with multiple parameters and multiple function calls

var post = {
      id: 1,      
      title: 'Post about Parameters'
    },
    author = {
      id: 1,
      displayName: 'Zac'
    },
    relatedPosts = [
      'Learn JavaScript',
      'JavaScript Functions',
      'Multiple Parameters'
    ];

var displayTitle = function( title ) {
  console.log( '<h2>' + title + '<h2>'  );  
}

var displayAuthor = function( author ) {
  console.log( '<p>By: ' + author + '<p>'  );
}

var displayRelatedPosts = function( relatedPosts ) {
  console.log( '<p>Related Posts</p>' );
  console.log( '<ul>' );  
  for ( var post of relatedPosts ) {
    console.log( '<li>' + post + '</li>' );
  }
  console.log( '</ul>' );  
}

var displayPost = function( title, author, relatedPosts ) {
  displayTitle( title );
  displayAuthor( author );
  displayRelatedPosts( relatedPosts );
};

displayPost( post.title, author.displayName, relatedPosts );
