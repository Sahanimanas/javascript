/*rest parameter - {...}
it will add all elements to an Array
*/


function foodarr(...foods){//rest parameter to bundle each element
    console.log(foods[2]+foods[3])//spread parameter to spread element from array
}

const food1="Didi ka wada pav"
const food2="kulahd-pizza"
const food3=6
const food4=2


foodarr(food1,food2,food3,food4)


// let str1="manas"
// let str2=" is happy"
// //let str3= str1.join(" ");
// //console.log(str3)
// const rest=document.getElementById("rest");
// rest.textContent=str1+str2;



