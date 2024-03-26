/*
//creating and initilizing
const EventEmitter = require('events');


const emitter = new EventEmitter();

emitter.addListener('welcomeEvent', (name) => {
	console.log("welcome " + name);
});

emitter.emit('welcomeEvent', "manasa");




//remove listeners
const EventEmitter = require('events');

const emitter = new EventEmitter();

const user1 = (msg) => {
	console.log("Message from user1: " + msg);
};
const user2 = (msg) => {
	console.log("Message from user2: " + msg);
};

emitter.addListener('printEvent', user1);
emitter.addListener('printEvent', user2);

 emitter.emit('printEvent', "Event occurred");
emitter.removeAllListeners('printEvent');
emitter.emit('printEvent', "Event occurred");



const EventEmitter = require('events');
const os = require('os'); 

const myEE = new EventEmitter();
myEE.on('ios', () => {});
myEE.on('linux', () => {});

const currentOS = os.platform(); 
myEE.on(currentOS, () => {}); 

console.log(myEE.eventNames());
*/

//setmaxlisterner function
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(3); 

myEmitter.on('event', () => {
  console.log('Listener 1 called');
});

myEmitter.on('event', () => {
  console.log('Listener 2 called');
});

myEmitter.on('event', () => {
  console.log('Listener 3 called');
});

myEmitter.on('event', () => {
  console.log('Listener 4 called');
});
myEmitter.emit('event');
