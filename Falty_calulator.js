// const prompt=require("prompt-sync")();

let a=prompt("enter the no");
let b=prompt("enter the second number")
let c=prompt("enter the opration")
let random=Math.random()
let obj={
    "+":"-",
    "-":"/",
    "/":"**",
    "**":"+",

}

if(random<450.1){
    if(c == "+"){
     
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)}

else{
    let op=obj[c];
alert(`result is ${eval(`${a} ${op} ${b}`)}`)
}}
