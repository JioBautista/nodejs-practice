const { readFile, writeFile } = require("fs").promises;
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

const start = async () => {
  try {
    const getData = await readFile("./userNames.js", "utf8");
    console.log(getData);
  } catch (err) {
    console.log(err);
  }
};

customEmitter.on('hasLoggedIn', (name,id) => {
  console.log(`${name} with ID of ${id} has succesfully logged in.`)
})

customEmitter.emit('hasLoggedIn','John',24)
customEmitter.emit('hasLoggedIn','Andrew',14)

start();