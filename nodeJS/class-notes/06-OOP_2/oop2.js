"use strict"
/* ---------------------------------------------

    OOP - Object Oriented Programing

--------------------------------------------- */

/* ---------------------------------------------
    CLASSES
--------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration: Class Tanımlama
// class PascalNamedClass { ... }

// Class Expression:
// const PascalNamedClass = class { ... }

/*
const Car = class {
    propertyName = 'value' // attribute, field

    constructor (parametre1, parametre2 = 'default-value'){
        this.parametre1 = parametre1
        this.parametre2 = parametre2
    }

    methodName1() {
        return this
    }
}
*/
//? INSTANCE: Class'tan üretilen nesnelere denir.
/*
const InstanceName = new Car('test')
console.log(InstanceName);
console.log(InstanceName.methodName1());
*/

//? constructor() method

/*
class Car {
    isRunning = false

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('runEngine >> ','Start Engine')
        //return this.isRunning
    }
}
*/

//const Ford = new Car('Ford', 'Mustang', 1990)

//console.log(Ford);
// Car { isRunning: false, brand: 'Ford', model: 'Mustang', year: 1990 }
//console.log('Ford >> ',Ford.isRunning); // false
//const isRunning = Ford.runEngine()
//console.log('isRunning >>', isRunning);
//console.log('Ford >> ',Ford.isRunning); // true

/*
const Mazda = new Car('Mazda', '323', 2000)

console.log('Mazda >> ',Mazda.isRunning); // false
Mazda.runEngine()
console.log('is running >> ', Mazda.isRunning); // true
*/

/* --------------------------------------------- */
//? INHERITANCE: MirasAlma. Başka bir class'ın tüm özelliklerini devralma (parent-child ilişkisi kurma)
//* THIS = Child (current) Class
//* SUPER = Parent Class

class Vehicle {
    vehicleActive = false

    constructor(vehicleType) {
        this.vehicleActive = vehicleType
    }

    sayHello() {
        console.log('Hello')
    }
}

class Car extends Vehicle {
    isRunning = false

    constructor(brand, model, year, vehicleType = true) {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
    }
}

const Mercedes = new Car('Mercedes', 'M300', 1995)
console.log('all >> ',Mercedes);
console.log(Mercedes.vehicleActive);
Mercedes.sayHello()

class Accessory extends Car {
    
}
