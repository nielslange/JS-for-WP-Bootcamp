/********************************
 * The Event Object
 * 1.4.7
 *
 *******************************/











/********************************
 * Event Object Properties
 * 1.4.7.1
 *
 *******************************/
var link  = document.getElementsByTagName( 'a' )[0],
    form = document.getElementsByTagName( 'form' )[0];

link.addEventListener( 'click', handleEvent, false );
form.addEventListener( 'submit', handleEvent, false );

function handleEvent( e ) {

  e.preventDefault();
  console.log( e );

}





// End 1.4.7
