/********************************
 * Removing Event Listeners
 * 1.4.5
 *
 *******************************/











/********************************
 * Removing an Event Listener
 * 1.4.5.1
 *
 *******************************/
// var linkEl = document.getElementsByTagName( 'a' )[0];
//
// function displayLinkInfo( event ) {
//   event.preventDefault();
//   console.log( event.target.innerHTML );
// }
//
// linkEl.addEventListener( 'click', displayLinkInfo, false );
// //linkEl.removeEventListener( 'click', displayLinkInfo, false );




























/********************************
 * Removing an Element and
 * Event Listener Memory Leaks
 * 1.4.5.2
 *
 *******************************/
// var linkEl = document.getElementsByTagName( 'a' )[0];
//
// function displayLinkInfo( event ) {
//   event.preventDefault();
//   console.log( event.target.innerHTML );
// }
//
// linkEl.addEventListener( 'click', displayLinkInfo, false );
// linkEl.remove();







































/********************************
 * Why not to use anonymous functions
 * with addEventListener
 * 1.4.5.3
 *
 *******************************/
// var linkEl = document.getElementsByTagName( 'a' )[0];
//
//
// linkEl.addEventListener( 'click', function ( e ) {
//   e.preventDefault();
//   console.log( event.target.innerHTML );
// }
// , false );
//
//
// linkEl.removeEventListener( 'click', function( e ){}, false );




























/********************************
 * Removing Event Listener
 * After One Click
 * 1.4.5.4
 *
 *******************************/
// var linkEl = document.getElementsByTagName( 'a' )[0];
//
// function displayLinkInfo( event ) {
//   event.preventDefault();
//   console.log( event.target.innerHTML );
//   linkEl.removeEventListener( 'click', displayLinkInfo, false )
// }
//
// linkEl.addEventListener( 'click', displayLinkInfo, false );















































/********************************
 * Removing Event Listener
 * After One Click
 * 1.4.5.5
 *
 *******************************/
var content = document.querySelector( '.content' ),
    originalLinks = document.querySelectorAll( '.content p a' ),
    pEl = document.createElement( 'p' ),
    linkEl = document.createElement( 'a' ),
    linkText = document.createTextNode( 'Open links in new tab' );

function setTargetBlank( event ) {

  for( var i = 0, max = originalLinks.length;  i < max; i++ ) {

    originalLinks[i].setAttribute( 'target', '_blank' );

  }

  console.log( 'Ready to open in new windows!' );

  linkEl.removeEventListener( 'click', setTargetBlank, false );
  linkEl.innerHTML = 'Open in same window';
  linkEl.addEventListener( 'click', removeTargetBlank, false );

}

function removeTargetBlank( event ) {

  for( var i = 0, max = originalLinks.length;  i < max; i++ ) {

    originalLinks[i].removeAttribute( 'target' );

  }

  console.log( 'Will open in same tab now!' );

  linkEl.removeEventListener( 'click', removeTargetBlank, false );
  linkEl.innerHTML = 'Open links in new tab';
  linkEl.addEventListener( 'click', setTargetBlank, false );

}

linkEl.appendChild( linkText );
linkEl.setAttribute( 'href', '#' );
pEl.appendChild( linkEl );
content.appendChild( pEl );

linkEl.addEventListener( 'click', setTargetBlank, false );



























// End 1.4.5
