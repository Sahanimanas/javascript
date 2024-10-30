// class is a prototype that contains methods and properties that object will aquire

class sale{
        constructor(name,price,color){
            this.name=name;
             this.color=color;

            this.price=price;
        }
       
       saletax(price,tax){
        return price+(price*tax);

        }

}

const shirt=new sale("H&M",1700,"Maroon");
let jeans=new sale();
// console.log(shirt.color);
// console.log(shirt.saletax(2000,.2));