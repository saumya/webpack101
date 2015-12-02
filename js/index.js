// version 1.0.0
// to use webpack : npm start : this will create the required bundle.js file
console.log("Hello WebPack.");
/*
// Synchronous
// Makes a single bundle.js file
var bear = require('./bear.js');
document.body.appendChild(bear[0]);
*/

// Asynchronous
// Makes different .js files and loads them when needed
require(['./bear.js'],function(bear){
  document.body.appendChild(bear[0]);
});
