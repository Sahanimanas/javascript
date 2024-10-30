//creating a function 



function sum(a,b){x();
let result = a+b;
return result;    
}


var x=()=>console.log("heleeoo") //arrow function




const math = {
    factit: function factorial(n) {
      console.log(n);
      if (n <= 1) {
        return 1;
      }
      return n * factorial(n - 1);
    }
  };
  
  math.factit(3); //3;2;1;
  