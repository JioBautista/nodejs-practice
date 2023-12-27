const { readFile } = require("fs");

const getData = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getData("./userNames.js")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
