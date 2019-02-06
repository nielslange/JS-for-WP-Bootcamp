/********************************
 * Event Propagation
 * 1.4.6
 *
 *******************************/











/********************************
 * Event Capturing and Bubbling
 * 1.4.6.1
 *
 *******************************/
// var containers = document.getElementsByClassName( 'container' );
//
// for (var i = 0, max = containers.length; i < max; i++) {
//
//   containers[i].addEventListener( 'click', displayEventPhase, true  );
//   //containers[i].addEventListener( 'click', displayEventPhase, false );
//
// }
//
// function displayEventPhase( e ) {
//
//   var phase = e.eventPhase;
//
//   if( 1 === phase ) {
//     phase = 'Capturing';
//   } else if ( 2 === phase ) {
//     phase = 'At Target';
//   } else if ( 3 === phase ) {
//     phase = 'Bubbling';
//   }
//
//   console.log( 'Box: ' + this.id + ' - ' + phase );
//   if( e.target.id === this.id ) {
//     console.log( 'Box: ' + e.target.id + ' - ' + phase );
//   }
// }



























/********************************
 * Stopping Propagation
 * 1.4.6.2
 *
 *******************************/
 var containers = document.getElementsByClassName( 'container' );

 for (var i = 0, max = containers.length; i < max; i++) {

   containers[i].addEventListener( 'click', displayEventPhase, true );

 }

 function displayEventPhase( e ) {

   var phase = e.eventPhase;

   //e.stopPropagation();

   if( 1 === phase ) {
     phase = 'Capturing';
   } else if ( 2 === phase ) {
     phase = 'At Target';
   } else if ( 3 === phase ) {
     phase = 'Bubbling';
   }

   console.log( 'Box: ' + e.currentTarget.id + ' - ' + phase );


 }






// End 1.4.6
