var Pfade = require('./index')
var pfade = new Pfade(__dirname)

var package = pfade.require('index.js')
console.log(package)


var p = require('./index')
var pl = new p()

console.log(pl)