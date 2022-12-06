var event = require('events')
var em = new event.EventEmitter();
// handle event...

em.addListener("switchON", (data) => {
    console.log("switchOn" + data);
})
em.on("SwitchOff", function (data)
{
    console.log("Switch Off" + data)
})
console.log("i have enterd into room");
em.emit("switchON", "laptop");
em.emit("switchON", "dooor");

console.log("i have lest room")
em.emit("SwitchOff", "Laptop");
em.emit("SwitchOff", "door");