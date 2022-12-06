var event = require('events');
var em = new event.EventEmitter();
// handle event .....

function SwitchOn(data)
{
    console.log("Switch on function on" + data);
}
function SwitchOff(data)
{
    console.log("Switchoff function off" + data)
}
em.addListener("SwitchOnevent", SwitchOn);
em.on("SwitchOffevent", SwitchOff);


em.emit("SwitchOnevent", "laptop");
em.emit("SwitchOnevent", "mobile");

// SwitchOff event
em.emit("SwitchOffevent", "laptop");
em.emit("SwitchOffevent", "mobile");
