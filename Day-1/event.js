const EventEmitter = require("events");

const myEmitter = new EventEmitter();

const handelEvent = () => {
  console.log("Event occurred!");
};

myEmitter.on("Kalpesh", handelEvent);

myEmitter.emit("Kalpesh");
