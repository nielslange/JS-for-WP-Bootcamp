/********************************
 * Creating Nodes
 * 1.3.9
 *
 *******************************/






/********************************
 * Creating a Text Node
 * 1.3.9.1
 *
 *******************************/

//
// var pText = document.createTextNode( 'Lorem' );
//
// console.log( pText.nodeType );
// console.log( pText.nodeValue );




























/********************************
 * Creating an Element Node
 * 1.3.9.2
 *
 *******************************/


// var pText = document.createTextNode( 'Lorem' ),
//     pEl = document.createElement('p');
//
// console.log( pEl.nodeType );
// console.log( pEl.innerHTML );




























/********************************
 * Appending Nodes
 * 1.3.9.3
 *
 *******************************/


// var pText = document.createTextNode( 'Lorem' ),
//     pEl = document.createElement('p');
//
// pEl.appendChild( pText );
//
// console.log( pEl.childNodes.length );
// console.log( pEl.childNodes[0].nodeValue );
//
// console.log( pEl.outerHTML );




























/********************************
 * Creating a Link Node
 * in an Element
 * 1.3.9.4
 *
 *******************************/


// var aText = document.createTextNode( 'Read More..' ),
//     aEl = document.createElement('a'),
//     pText = document.createTextNode( 'Learn more about the DOM. ' ),
//     pEl = document.createElement('p');
//
// aEl.setAttribute( 'href', '#link' );
// aEl.appendChild( aText );
//
// pEl.appendChild( pText );
// pEl.appendChild( aEl );
//
// console.log( pEl.outerHTML );




























/********************************
 * Using a Document Fragment
 * 1.3.9.5
 *
 *******************************/


var divEl = document.createElement('div'),
    docFrag = document.createDocumentFragment(),
    p1Text = document.createTextNode( 'Lorem' ),
    p1El = document.createElement('p'),
    p2Text = document.createTextNode( 'Ipsum' ),
    p2El = document.createElement('p'),
    p3Text = document.createTextNode( 'Maximus' ),
    p3El = document.createElement('p');


p1El.appendChild( p1Text );
p2El.appendChild( p2Text );
p3El.appendChild( p3Text );

docFrag.appendChild( p1El );
docFrag.appendChild( p2El );
docFrag.appendChild( p3El );

divEl.appendChild( docFrag );
console.log( divEl.outerHTML );





// End 1.3.9
