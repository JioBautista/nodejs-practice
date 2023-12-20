const data = require('./userNames')
const firstNames = data.users.map(item => item.firstName);
const lastNames = data.users.map(item => item.lastName)
const displayNames = require('./utils')

displayNames(firstNames[0])
displayNames(firstNames[1])
displayNames(firstNames[2])
displayNames(lastNames[0])