var event = require('events')
var mymodule = require('./mymodule2');

var em = new event.EventEmitter();

em.addListener("OrderReceived", mymodule.BillPrint);
em.addListener("OrderReceived", mymodule.GeGeneratedPDF);
em.addListener("OrderReceived", mymodule.sentEmail);

em.emit("OrderReceived")