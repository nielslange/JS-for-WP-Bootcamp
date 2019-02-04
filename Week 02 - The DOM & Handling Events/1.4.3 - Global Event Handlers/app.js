/********************************
 * Global Event Handler
 * 1.4.3
 *
 *******************************/











/********************************
 * Global Event Handler Example
 * 1.4.3.1
 *
 *******************************/
// var linkEl = document.getElementsByTagName( 'a' )[0],
//     displayLinkInfo;
//
// displayLinkInfo  = function( event ) {
//   event.preventDefault();
//   console.log( event.target.innerHTML );
// };
//
// linkEl.onclick = displayLinkInfo;


























/********************************
 * Global Event Handler Example
 * 1.4.3.2
 *
 *******************************/

// var linkEl = document.getElementsByTagName( 'a' )[0];
//
// linkEl.onclick = function( event ) {
//   event.preventDefault();
//   console.log( event.target.innerHTML );
// };



























/********************************
 * Global Event Handler Example
 * 1.4.3.3
 *
 *******************************/
// var linkEl = document.getElementsByTagName( 'a' )[0],
//     displayLinkInfo,
//     alertLinkInfo;
//
// displayLinkInfo  = function( event ) {
//   event.preventDefault();
//   console.log( event.target.innerHTML );
// };
//
// alertLinkInfo  = function( event ) {
//   event.preventDefault();
//   alert( event.target.innerHTML );
// };
//
// linkEl.onclick = alertLinkInfo;
// linkEl.onclick = displayLinkInfo;




















































/********************************
 * Global Event Handler Example
 * 1.4.3.4
 *
 *******************************/
var linkEl = document.getElementsByTagName( 'a' )[0],
    displayLinkInfo,
    alertLinkInfo,
    linkHandler;

displayLinkInfo  = function( event ) {
  event.preventDefault();
  console.log( event.target.innerHTML );
};

alertLinkInfo  = function( event ) {
  event.preventDefault();
  alert( event.target.innerHTML );
};

linkHandler = function( event ) {

  displayLinkInfo( event );
  alertLinkInfo( event );

};

linkEl.onclick = linkHandler;






























// End 1.4.3
