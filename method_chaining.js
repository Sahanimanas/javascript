//Method chaining
let username=" maNasHvi ";

username=username.trim();

let letter=username.slice(1);

//start
username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)
