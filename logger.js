const EventEmitter = require('events');

console.log('juangjo');

class Logger extends EventEmitter {
    core = 45;
    emisor() {
        emitter.emit('mensaje', 'vente conmigo cabroncete');
    }
}

emitter = new Logger();
emitter.on("mensaje", (arg) => {
    console.log("Listenerss sss called", arg);
});
emitter.emit('mensaje', 'vente conmigo');
module.exports = emitter;