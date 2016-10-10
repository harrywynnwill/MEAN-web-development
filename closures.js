function parent() {
 var message = "Hello World";
 function child() {
 console.log(message);
 }
 child();
}
parent();

//
// function parent() {
//  var message = 'Hello World';
//
//  function child() {
//  console.log(message);
//  }
//  return child;
// }
// var childFN = parent()
// childFN();
