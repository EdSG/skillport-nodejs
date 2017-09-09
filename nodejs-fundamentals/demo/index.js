console.log("A simple node application");

/*
var apple = require('./fruit.js');

console.log(apple().getInfo());

var banana = require('./fruit.js')();

banana.setName('banana');

console.log(banana.getInfo());
*/

var fruit = require('./fruit.js');

var banana = fruit('banana','yellow fruit');
var cherry = fruit('cherry','small red fruit');

console.log(banana.getInfo());
console.log(cherry.getInfo());

