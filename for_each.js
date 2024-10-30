//.forEach method-- this is used  for iterate over an  array
// taking array, element, index
//changing the same array
// using calback in foreach
// ** it don"t return any value

let arr = [1, 3, 4, 5];

function sum(element) {
  let result = element * 2;
  console.log(result);
}

//arr.forEach(sum);

//.map function -- its just same as forEach method
// but the difference is that it take return value and
// new array can be created

// function multiply(element) {
//   let result = element * 2;
//   return result;
// }
let multiplied = arr.map(multiply);
console.log(multiply);

// filter method-- take callbacks and return the elements that passed the condition

/*
let stars=["strawberry-pink","blueberry-pink","chocolate-black","pomegranate-red","apple-red"];
let pink_pussy=stars.filter(isred);
console.log(...red)

function ispink(element){
    return element.includes("red ");
}
    */
