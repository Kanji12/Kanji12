var event = require('events');
var em = new event.EventEmitter();

function SwitchOn(data)
{
    console.log("Switch on event called" +" "+ data);
}
function SwitchOff(data)
{
    console.log("switch off event called"+" "+ data)
}
em.once("SwitchOnevent", SwitchOn);
em.once("SwitchOffevent", SwitchOff);

em.emit("SwitchOnevent", "Laptop");// once method called... one time only(run only one time....)
em.emit("SwitchOnevent", "mobile");
em.emit("SwitchOnevent", "fan");

//SwitchOfffevent
em.emit("SwitchOffevent", "laptop");// once method called... one time only(run only one time .... )
em.emit("SwitchOffevent", "mobile");
em.emit("SwitchOffevent", "fan");






