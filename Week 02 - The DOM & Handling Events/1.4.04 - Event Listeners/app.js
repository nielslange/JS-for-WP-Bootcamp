/********************************
 * Event Listeners
 * 1.4.4
 *
 *******************************/











/********************************
 * Add an Event Listener
 * 1.4.4.1
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




























/********************************
 * Add an Event Listener
 * in a Loop
 * 1.4.4.2
 *
 *******************************/
var linkEl = document.getElementsByTagName( 'a' ),
    max = linkEl.length;

for( var i = 0; i < max; i++ ) {

  linkEl[i].addEventListener( 'click', displayLinkInfo, false );

}

function displayLinkInfo( event ) {
  event.preventDefault();
  console.log( event.target.innerHTML );
}








































/********************************
 * Add an Event Listener
 * in a Loop
 * 1.4.4.3
 *
 *******************************/
var linkEl = document.getElementsByTagName( 'a' ),
    max = linkEl.length;


for( var i = 0; i < max; i++ ) {

  linkEl[i].addEventListener( 'click', alertLinkInfo, false );
  linkEl[i].addEventListener( 'click', displayLinkInfo, false );

}

function displayLinkInfo( event ) {
  event.preventDefault();
  console.log( event.target.innerHTML );
}

function alertLinkInfo( event ) {
  event.preventDefault();
  alert( event.target.innerHTML );
}



























// End 1.4.4
