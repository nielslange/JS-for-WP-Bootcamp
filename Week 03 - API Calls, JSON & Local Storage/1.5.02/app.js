/********************************
 * JavaScript and JSON
 * 1.5.2
 *
 *******************************/











/********************************
 * JSON like Objects
 * 1.5.2.1
 *
 *******************************/
// var postObj = {
//       "id":1,
//       "title":"Hello world!",
//       "content":"Welcome to WordPress!"
//     };
//
// console.log( postObj );
// console.log( postObj.title );





























/********************************
 * Actual JSON in our JavaScript
 * 1.5.2.2
 *
 *******************************/
 // var  notValidJSON = '{
 //        "id":1,
 //        "title":"Hello world!", "content":"Welcome to WordPress!"
 //      }';

//  var  validJSON = '{\
//          "id":1,\
//          "title":"Hello world!",\ "content":"Welcome to WordPress!"\
//        }',
//        oneLineJSON = '{ "id":1, "title":"Hello world!", "content":"Welcome to WordPress!" }';


//  console.log( validJSON );
//  console.log( oneLineJSON );

//  console.log( validJSON.title );
//  console.log( oneLineJSON.title );




























/********************************
 * The JSON Object
 * 1.5.2.3
 *
 *******************************/

// console.log( JSON );


























/********************************
 * The JSON.parse()
 * 1.5.2.4
 *
 *******************************/
// var oneLineJSON = '{ "id":1, "title":"Hello world!", "content":"Welcome to WordPress!" }',
//     parsedJSON;


// console.log( oneLineJSON.title );

// parsedJSON = JSON.parse( oneLineJSON );

// console.log( parsedJSON );
// console.log( parsedJSON.title );



























/********************************
 * The JSON.parse() with revivor
 * 1.5.2.5
 *
 *******************************/
// var oneLineJSON = '{ "id":1, "title":"Hello world!", "content":"Welcome to WordPress!" }',
//     parsedJSON;

// function revivor( key, value ) {
//   if( typeof value === "number" ) {
//     return (value + 1) * 2;
//   }
//   return value;
// }

// parsedJSON = JSON.parse( oneLineJSON, revivor );

// console.log( parsedJSON );
// console.log( parsedJSON.title );































/********************************
 * The JSON.stringify()
 * 1.5.2.6
 *
 *******************************/
// var postObj = {
//      "id":1,
//      "title":"Hello world!",
//      "content":"Welcome to WordPress!"
//    },
//    JSONObj;

// console.log( postObj.title );

// JSONObj = JSON.stringify( postObj );

// console.log( JSONObj );
// console.log( JSONObj.title );



























/********************************
 * The JSON.stringify() with
 * parameters
 * 1.5.2.7
 *
 *******************************/
// var postObj = {
//      "id":1,
//      "title":"Hello world!",
//      "content":"Welcome to WordPress!"
//    },
//    JSONObj;

// function replacer( key, value ) {
//   if( typeof value === "number" ) {
//     return undefined;
//   }
//   return value;
// }

// JSONObj = JSON.stringify( postObj, replacer, ' ' );

// console.log( JSONObj );




























// End 1.5.2
