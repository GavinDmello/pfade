var Pfade = require('pfade')
var pfade = new Pfade(__dirname)

var package = pfade.require('index.js')
console.log(package)



var Pfade = require('pfade')
var pfade = new Pfade()

var handle = pfade.require('lib/handler.js')
console.log(handle)