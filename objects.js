//objects-- it contain key:value,functions 
//it is collection of related properties or/and 
// methods


const person1={
    //key:value,
    name:"manas",
    Strength:"Musclepower",
    //method or function
    sayhi: function(){console.log("hi!!!!")},

}

//accessing the values
// console.log(person1.name,person1.Strength);

//this keyword-- it is used in the reference of object within the context of object
const person2={
    //key:value,
    name:"manas",
    Strength:"Musclepower",
    food:"machli",
    //method or function
    sayhi: function(){console.log("hi!!!!")},
    //using this keyword
    eat: function(){console.log(`${this.name} is eating ${this.food}`)}

}

//person2.eat();


// New way to create objects   // CONSTRUCTOR
function car(name,origin,year,model){ /*parameters can be any name*/
    this.origin=origin;    //origin can be any name
    this.name=name;
    this.year=year;
    this.model=model;
    //creating method
    this.drive=function(){return `Manas is driving ${name}`};
    function count1(){
        let count=0;
        count++;
        console.log(count);
    }

}

const car1=new car("Porshe","india",1980,911);


console.log(car1.drive());
