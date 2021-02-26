document.addEventListener("DOMContentLoaded", function () {

    class Vehicle {
        constructor(name) {
            this.name = name;
        }
    }

    class Boat extends Vehicle {
        constructor(name, lenght) {
            super(name);
            this.lenght = lenght;
        }

        swim() {
            console.log(`${this.name} o długości ${this.lenght} m płynie`);
        }
    }

    let sympfonyOfTheSea = new Boat("Symphony of the Sea", 450)


    class Car extends Vehicle {
        constructor(name, brand, model, hp, color) {
            super(name);
            this.brand = brand;
            this.model = model;
            this.hp = hp;
            this.color = color;
        }

        drive() {
            console.log(`${this.brand} ${this.model} jedzie`);
        }
    }

    let audiA5 = new Car("Audi A5", "Audi", "A5", 170, "grey")


    class Plane extends Vehicle {
        constructor(name, range) {
            super(name);
            this.range = range;
        }

        fly() {
            console.log(`${this.name} przeleci nawet ${this.range} km`);
        }
    }

    let cesna = new Plane("Cesna", 500)

    console.log(sympfonyOfTheSea);
    sympfonyOfTheSea.swim();
    console.log(audiA5);
    audiA5.drive();
    console.log(cesna);
    cesna.fly();

});


// class VehicleAbstract {
//     constructor() {
//         this.type = this.constructor.name;
//     }
//
//     printInfo() {
//         console.log(`Type########### ${this.type}`);
//     }
// }
//
// class Car extends VehicleAbstract {
//     constructor(brand, model, hp, color) {
//         super();
//         this.brand = brand;
//         this.model = model;
//         this.hp = hp;
//         this.color = color;
//         this.km = 0;
//     }
//
//     drive(km) {
//         console.log(`Car: ${this.brand} ${this.model} has been driven by ${km} km`);
//         this.km += km;
//     }
//
//     printInfo() {
//         super.printInfo();
//         console.log(`Brand: ${this.brand}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`HP: ${this.hp}`);
//         console.log(`Color: ${this.color}`);
//         console.log(`Km: ${this.km}`);
//     }
// }
//
// const tesla = new Car("Tesla", "P100D", 420, "white");
// tesla.printInfo();
// tesla.drive(150);
// tesla.printInfo();
// console.log(tesla);


// class Plane extends VehicleAbstract {
//     constructor(name, passengersCapacity) {
//         super();
//         this.name = name;
//         this.passengersCapacity = passengersCapacity;
//     }
//     fly(){
//         console.log(`${this.type} ${this.name} is flying`);
//     }
// }
//
// const cesna = new Plane("Cesna", 4);
// cesna.fly();
// cesna.printInfo();
//
// class Ship extends VehicleAbstract {
//     constructor(name, lenght) {
//         super();
//         this.name = name;
//         this.lenght = lenght;
//     }
//     sail(){
//         console.log(`${this.type} ${this.name} is sailing`);
//     }
// }
//
// const darPomorza = new Ship("Dar Pomorza", 100);
// darPomorza.sail();
// darPomorza.printInfo();












