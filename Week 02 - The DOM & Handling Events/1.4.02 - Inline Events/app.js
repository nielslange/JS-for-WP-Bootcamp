/********************************
 * Inline Events
 * 1.4.2
 *
 *******************************/











/********************************
 * Inline Event Example
 * 1.4.2.1
 *
 *******************************/
var displayLinkInfo,
    linkEl,
    linkHref,
    linkTitle,
    linkText;


displayLinkInfo  = function displayLinkInfo( event ) {

  event.preventDefault();

  linkEl = event.target;
  linkHref = linkEl.getAttribute( 'href' );
  linkText = linkEl.innerHTML;

  console.log( linkEl, linkHref, linkText );


};


































// End 1.4.2
