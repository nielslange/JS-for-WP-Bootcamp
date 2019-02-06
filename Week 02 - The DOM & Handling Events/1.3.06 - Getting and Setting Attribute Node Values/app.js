/********************************
 * Getting and Setting Attribute Node Values
 * 1.3.6
 *
 *******************************/










/********************************
 * Getting Attribute Nodes
 * 1.3.6.1
 *
 *******************************/

// var a = document.querySelector( 'a' ),
//     atts = a.attributes;

// console.log( atts );

// for( var i = 0, max = atts.length; i < max; i++ ) {

//    console.log( atts[i].nodeName +
//                 ': ' +
//                 atts[i].nodeValue );

// }










/********************************
 * Get a specific Attribute
 * 1.3.6.2
 *
 *******************************/


// var a = document.querySelector( 'a' ),
//     aTitle = a.getAttribute( 'title' ),
//     aHref = a.getAttribute( 'href' );

// console.log( aTitle );
// console.log( aHref );










/********************************
 * Set an Attribute
 * 1.3.6.3
 *
 *******************************/

// var a = document.querySelector( 'a' );

// a.setAttribute( 'href' , 'https://twitter.com/jsforwp' );
// a.setAttribute( 'id', 'twitter' )

// console.log( a.getAttribute( 'href' ) );
// console.log( a.getAttribute( 'id' ) );










/********************************
 * Working with Classes
 * 1.3.6.4
 *
 *******************************/

// var content = document.querySelector( '.content' );

// console.log( content.getAttribute( 'class' ) );
// console.log( content.className );
// console.log( content.classList );

// content.classList.add( 'active' );
// content.classList.remove( 'active' );
// content.classList.toggle( 'active' );

// console.log( content.classList );










/********************************
 * Data Attributes
 * 1.3.6.5
 *
 *******************************/

// var contact = document.getElementById( 'contact' );

// console.log( contact.getAttribute( 'data-time' ) );

// console.log( contact.dataset );

// console.log( contact.dataset.location );

// contact.dataset.location = 'Asheville';
// console.log( contact.dataset.location );










// End 1.3.6