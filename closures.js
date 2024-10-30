//closures- A function defined inside of another function
 //           the inner function  has access to the variables;
 //            and scope of the outer function
 //            Allow for private variables and state maintenance
 //              used frequently in JS framework: React,Angular,Vue;


function creategame(){

    let score=0;
    function increaseScore(points){
        score+=points;
   
    }
    function decreaseScore(points){
        score-=points;
    }
    function getScore(){ 
             return score;
    }

    return {increaseScore,decreaseScore,getScore};
}

const game1=creategame();
game1.increaseScore(10);
game1.decreaseScore(3);
console.log(game1.getScore());
