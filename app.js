const maths = require('./math.js');

const fs = require('fs');

console.log(maths.add(1,2));

console.log(maths.subtract(1,2));

console.log(maths.divide(1,2));

console.log(maths.multiply(1,2));

const images = require('./services/images.js');

images.copyJPGTo('temp.png', 'tempimg', 'temp2.png');


