
const emitter = require("./logger");


//Register a listener 
emitter.on("mensaje", (arg) => {
    console.log("mi Listener called", arg);
});
console.log(emitter.core)
emitter.emisor();

