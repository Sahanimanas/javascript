//reduce method is used to reduce the paramaeters
// using callback function
// takes two parameters accumulator and element
let num=[2,4,2,3,2,1];

let total=num.reduce((accumulator,element)=> accumulator+element);
console.log(total);