const { readFile, writeFile } = require("fs").promises;
const { appendFile } = require("fs");

const start = async () => {
  try {
    const getData = await readFile("./userNames.js", "utf8");
    console.log(getData);
  } catch (err) {
    console.log(err);
  }
};
start();