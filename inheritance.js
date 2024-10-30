//inheritance -- it is a concept in which parents class's methods and properties get used by other child class

class human{
    greedy(name){
        console.log(`${name} want this...\n`);
    }
    weep(name){
        console.log(`${name} only lies and have crocodile tears\n`);  }

    }
class Female extends human{
       Vinash(name){
        console.log(`${name} says : i love you\n`);
       }
}

let ladki=new Female();
ladki.greedy('Every girl');
ladki.weep('boys');
ladki.Vinash('kindness');