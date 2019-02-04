/********************************
 * Removing Nodes
 * 1.3.12
 *
 *******************************/



/********************************
 * Removing a Node with .remove()
 * 1.3.12.1
 *
 *******************************/

// var pEl = document.querySelector( 'li' );
//
// pEl.remove();





























/********************************
 * Removing a Node with .removeChild()
 * 1.3.12.2
 *
 *******************************/

var posts = document.querySelector( '.posts' ),
    firstPost = posts.querySelector( 'li' ),
    trash = document.querySelector( '.trash' ),
    trashPosts = document.querySelector( '.trash.posts' ),
    oldEl;

oldEl = posts.removeChild( firstPost );
trashPosts.appendChild( oldEl );
trash.classList.remove( 'hidden' );

























// End 1.3.12
