import fc from 'fast-check'
console.log(fc.sample(fc.constant('Hello World!'))[0]);