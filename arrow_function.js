// ARROW function-- (=>)  consice way to write a function
 
const hello= () => console.log("hello!");

hello();

let num=[2,4,2,4,5];

let result=num.map(function sum(element){
    let num=element*3;
    return num;
});
console.log(result)

function sum(element){
    let num=element*3;
    return num;
}