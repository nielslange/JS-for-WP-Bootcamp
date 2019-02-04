/********************************
 * Getting the parent of a node
 * 1.3.4.1
 *
 *******************************/


// var h1 = document.querySelector( 'h1' ),
//     h1ParentEl = h1.parentElement,
//     h1ParentNode = h1.parentNode;
//
// console.log( h1ParentEl );
// console.log( h1ParentNode );
//
// console.log( h1.parentNode.parentNode );



/********************************
 * Getting children/child of a node
 * 1.3.4.2
 *
 *******************************/


var content = document.querySelector( '.content' ),
    contentChildrenEls = content.children,
    contentChildrenNodes = content.childNodes,
    contentFirstChildNode = content.firstChild,
    contentLastChildNode = content.lastChild,
    contentLastChildEl = content.lastElementChild,
    contentFirstChildEl = content.firstElementChild;

// console.log( contentChildrenEls );
// console.log( contentChildrenNodes );
// console.log( contentFirstChildNode );
// console.log( contentLastChildNode );
// console.log( contentLastChildEl );
// console.log( contentFirstChildEl );


// console.log( contentChildrenEls.length );
// console.log( contentChildrenNodes.length );
// console.log( contentFirstChildNode.nodeType );
// console.log( contentLastChildNode.nodeType );
// console.log( contentLastChildEl.nodeType );
// console.log( contentFirstChildEl.nodeType );
//
// console.log( content.childElementCount );








/********************************
 * Getting siblings of a node
 * 1.3.4.3
 *
 *******************************/


var contact = document.getElementById( 'contact' ),
    contactPrevNode = contact.previousSibling ,
    contactNextNode = contact.nextSibling,
    contactPrevEl = contact.previousElementSibling,
    contactNextEl = contact.nextElementSibling;


console.log( contactPrevNode, contactNextNode );
console.log( contactPrevEl, contactNextEl );






// End 1.3.4
