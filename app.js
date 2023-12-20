const data = require('./userNames')
const displayNames = require('./utils')
const firstNames = data.users.map(item => item.firstName);


displayNames(firstNames[0])
displayNames(firstNames[1])
displayNames(firstNames[2])