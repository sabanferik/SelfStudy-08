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
//? INSTANCE: Class'tan üretilen nesnelere denir.
/*const InstanceName = new Car('test')
console.log(InstanceName);
console.log(InstanceName.methodName1());
*/

//? contructor() method

class Car {
    isRunning = false
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
}
const Ford = new Car('Ford', 'Mustang', 1990)
console.log(Ford);
