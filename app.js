const amount = 20;
const dt = require('./dateTime')

if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
  console.log("the date and time are currently: " + dt.myDateTime())
}
console.log("My first node!");
