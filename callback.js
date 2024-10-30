//callback- a function that is passed an an argument to another function
// this ensure that callback function will be executed after the function

hello(go);

function hello(callback){ // to take a callbackb function
    callback();
    console.log("hello!");

}

function bye(){
console.log("Bye!!")
}
function go(){
    console.log("gooo!!")
    }