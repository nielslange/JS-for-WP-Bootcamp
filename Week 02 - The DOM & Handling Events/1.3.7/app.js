/********************************
 * Getting and Setting Form Element Values
 * 1.3.7
 *
 *******************************/





/********************************
 * Getting a Form Using document
 * 1.3.7.1
 *
 *******************************/


//  var  forms = document.forms,
//       form1 = forms[0];
//
// console.log( forms );
// console.log( form1 );




























/********************************
 * Getting a Form by ID
 * 1.3.7.2
 *
 *******************************/

//
// var contactForm = document.getElementById( 'main-contact' );
//
// console.log( contactForm );





























 /********************************
 * Getting Forms by Name
 * 1.3.7.3
 *
 *******************************/


// var forms = document.getElementsByName( 'main-contact' );
//
// console.log( forms );
// console.log( forms[0] );




























/********************************
 * Looping Through Form Elements
 * 1.3.7.4
 *
 *******************************/

// var forms = document.forms,
//     form1 = forms[0];
//
// for( var i = 0, max = form1.length; i < max; i++ ) {
//
//   console.log( form1[i] );
//
// }






















/********************************
 * Selecting Specific Elements
 * from the Forms Array
 * 1.3.7.5
 *
 *******************************/


// var mainForm = document.forms[0];
//
// console.log( mainForm[4] );























/********************************
 * Selecting Specific Elements
 * using ID, name, or tag
 * 1.3.7.6
 *
 *******************************/


// var mainForm = document.getElementById( 'main-contact' ),
//     fullName = document.getElementById( 'fullName' ),
//     subject = mainForm.querySelector( 'select' ),
//     message = document.getElementsByName( 'message' )[0],
//     contactPreference = document.getElementsByName( 'contact-preference' );
//
//
//
// console.log(  fullName,
//               subject,
//               message,
//               contactPreference  );







































/********************************
 * Selecting Values of Form
 * Elements
 * 1.3.7.7
 *
 *******************************/


// var mainForm = document.getElementById( 'main-contact' );
//
// for( var i = 0, max = mainForm.length; i < max; i++ ) {
//
//   console.log( mainForm[i].name, mainForm[i].value );
//
// }

























/********************************
 * Setting New Value of Form
 * Element
 * 1.3.7.8
 *
 *******************************/


// var mainForm = document.getElementById( 'main-contact' ),
//     fullName = document.getElementById( 'fullName' ),
//     phonePreference = document.getElementsByName( 'contact-preference' )[1];
//
// fullName.value = 'Zac Gordon';
// phonePreference.value = 'checked';
//
// console.log( phonePreference );




























/********************************
 * Setting New Value of Form
 * Element
 * 1.3.7.8
 *
 *******************************/


// var mainForm = document.getElementById( 'main-contact' ),
//     subject = document.querySelector( 'select' );
//     phonePreference = document.getElementsByName( 'contact-preference' )[1],
//     newsletter = document.getElementsByName( 'newsletter' )[0];
//
// phonePreference.checked = true;
// newsletter.checked = false;
// // subject.children[1].selected = true;
//
//
//
//
// // A more specific way of selecting option fields
// for( var i = 0, max = subject.children.length; i < max; i++ ) {
//
//   if( 'question' === subject.children[i].value) {
//     subject.children[i].selected = true;
//   }
//
// }
























/********************************
 * Hacking a Readonly Field
 * 1.3.7.9
 *
 *******************************/


// var readOnlyField = document.getElementsByName( 'cant-touch-this' )[0];
//
// readOnlyField.removeAttribute( 'readonly' );
// readOnlyField.value = 'Changed it';













































/********************************
 * Default versus current values
 * 1.3.7.X
 *
 *******************************/

var newsletterSignup = document.getElementsByName( 'newsletter' )[0];

console.log( newsletterSignup );
console.log( 'defaultChecked:', newsletterSignup.defaultChecked );
console.log( 'checked:', newsletterSignup.checked );

newsletterSignup.checked = false;

console.log( 'defaultChecked:', newsletterSignup.defaultChecked );
console.log( 'checked:', newsletterSignup.checked );





// End 1.3.7
