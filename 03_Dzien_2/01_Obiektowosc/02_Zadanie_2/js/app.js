document.addEventListener("DOMContentLoaded", function () {

    class Duck {
        constructor() {
            this.type = "ordinary duck"
        }
        sound() {
        console.log("Quack quack");
        }
        swim(){
            console.log("I'm swimming...");
        }
        print(){
            console.log(`Looks like ${this.type}`);
        }
        fly(){
            console.log("I'm flying...");
        }
    }

    const donaldDuck = new Duck();
    donaldDuck.print()
    donaldDuck.sound()
    donaldDuck.swim()


    class WildDuck extends Duck{
        constructor(){
            super();
            this.type = "wild"
        }
    }
    const daffyDuck = new WildDuck();
    daffyDuck.print()
    daffyDuck.sound()
    daffyDuck.swim()



    class MallardDuck extends Duck{
        constructor(){
            super();
            this.type = "mallard"
        }
    }
    const daisyDuck = new MallardDuck();
    daisyDuck.print()
    daisyDuck.sound()
    daisyDuck.swim()



    donaldDuck.fly();
    daffyDuck.fly();
    daisyDuck.fly();

    class RubberyDuck extends Duck{
        constructor(){
            super();
            this.type = "rubbery"
        }
        fly() {
            console.log("Rubber ducks can't fly!");
        }
    }
    const howardTheDuck = new RubberyDuck();
    howardTheDuck.print()
    howardTheDuck.sound()
    howardTheDuck.swim()
    howardTheDuck.fly();




});