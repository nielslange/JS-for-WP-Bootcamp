/********************************
 * Styling Nodes in the DOM
 * 1.3.8
 *
 *******************************/

/********************************
 * Window.getComputedStyle
 * 1.3.8.1
 *
 *******************************/

// var content = document.querySelector( '.content' );
//
// console.log( window.getComputedStyle( content )  );

/********************************
 * getComputedStyle properties
 * 1.3.8.2
 *
 *******************************/

//
// var content = document.querySelector( '.content' );
//
//
// console.log( window.getComputedStyle( content ).background );
//
// console.log( window.getComputedStyle( content ).backgroundColor );
//
// console.log( window.getComputedStyle( content ).borderColor );

/********************************
 * Convert rgb to hexadecimal
 * Source: http://goo.gl/6eJo2d
 * 1.3.8.3
 *
 *******************************/

// var content = document.querySelector( '.content' ),
//     bgRGB = window.getComputedStyle( content ).backgroundColor,
//     bgHex = rgb2hex( bgRGB );
//
// function rgb2hex( orig ){
//  var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
//  return (rgb && rgb.length === 4) ? "#" +
//   ( "0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
//   ( "0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
//   ( "0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
// }
//
// console.log( bgRGB );
// console.log( bgHex );

/********************************
 * getComputedStyle properties
 * for psuedo element
 * 1.3.8.4
 *
 *******************************/

// var link = document.querySelector( 'a' );
//
// console.log( link );
//
// // This doesn't work
// console.log( window.getComputedStyle( link, 'hover' ).backgroundColor );
//
// // This does work
// console.log( window.getComputedStyle( link, 'after' ).content );

/********************************
 * Set inline styles
 * 1.3.8.5
 *
 *******************************/

// var content = document.querySelector( '.content' );
//
//
// content.style.backgroundColor = 'rgba(0,0,0,.25)';
// // content.style.backgroundColor = '#ccc';
// content.style.border = '1px #000 solid';

/********************************
 * Convert hexadecimal to rgba
 * Source: http://goo.gl/ZtT8Tn
 * 1.3.8.6
 *
 *******************************/

// var content = document.querySelector( '.content' );
//
// function hex2rgba( hex, opacity ){
//     hex = hex.replace( '#', '' );
//     r = parseInt( hex.substring( 0, 2 ), 16 );
//     g = parseInt( hex.substring( 2, 4 ), 16 );
//     b = parseInt( hex.substring( 4, 6 ), 16 );
//
//     result = 'rgba(' + r + ',' +
//                     g + ',' + b +
//                     ',' + opacity / 100 + ')';
//     return result;
// }
//
// content.style.backgroundColor = hex2rgba( '#000000', 0 );

/********************************
 * Get inline styles versus
 * computed styles
 * 1.3.8.7
 *
 *******************************/

// var content = document.querySelector( '.content' );
//
// console.log( 'Computed: ' + window.getComputedStyle( content ).backgroundColor );
// console.log( 'Inline: ' + content.style.backgroundColor );
//
// content.style.backgroundColor = '#222';
//
// console.log( 'Computed: ' + window.getComputedStyle( content ).backgroundColor );
// console.log( 'Inline: ' + content.style.backgroundColor );

/********************************
 * Getting External Styles
 * 1.3.8.8
 *
 *******************************/

// var stylesheets = document.styleSheets,
//     mainStyleRules = stylesheets[0].cssRules;
//
// console.log( stylesheets );
// console.log( stylesheets[0] );
// console.log( stylesheets[0].cssRules );

// for ( var style in  mainStyleRules ) {
//   console.log( mainStyleRules[ style ].cssText );
// }

/********************************
 * Adding External Styles
 * Modified from Original
 * Source: https://goo.gl/b4Ckz9
 * 1.3.8.9
 *
 *******************************/

// var stylesheets = document.styleSheets,
//     mainStyles = stylesheets[0],
//     mainStyleRules = mainStyles.cssRules;
//
//
// function addCSSRule( sheet, selector, rules, index ) {
// 	if( 'insertRule' in sheet) {
// 		sheet.insertRule( selector + "{" + rules + "}", index );
// 	}
// 	else if( 'addRule' in sheet) {
// 		sheet.addRule( selector, rules, index );
// 	}
// }
//
// addCSSRule( mainStyles, 'a', 'font-size: 2rem', mainStyleRules.length );
//
//
// for ( var style in  mainStyleRules ) {
//   console.log( mainStyleRules[ style ].cssText );
// }

// End 1.3.8
