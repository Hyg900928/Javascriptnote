const bigInt = require('big-integer');


const largeNumber = bigInt("75643564363473453456342378564387956906736546456235345");
const bigNumber = bigInt(largeNumber)

console.log('bigNumber====>', typeof(bigNumber.value))
