// index.js
// to import the doSomeMath from the math.js with or without extension
import doSomeMath2 from './math.js'
console.log(doSomeMath2.addTwo(5, 5))

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'
console.log(addTwo(5, 5))

import * as everything from './math.js' // to import everything remaining
console.log(everything)

