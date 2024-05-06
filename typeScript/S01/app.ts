console.log('Hello  TS')


// De-08 ile typescript dersindeyiz

/* let b = 3
let c  = 2
let d= 0

const a = (b,c)=> b*c */

/* let e: string = 'Hello'
let f : boolean = true
let g: number = 1


f= false


let h = 123
h = 12
h = 'Selam' */

//Arrays

/* let num : number[]= [1,2,'Hi']

num.push('Merhaba')
num.push(false)
num.push(3)

console.log(num)


let str: string [] = [] // boş array tanımlama


str.push(1)
str.push(false)
str.push('a')


let num2: Array<number> = [1,2,3,4] //generic tipte array tanımlama

let num3: readonly number[] = [5,6,7,8] // Dizimizi salt okunur yapar

num3.pop()
num3.push(9)

console.log(num3) */

//Tuples

/* let myTuple: [number, boolean, string]

myTuple = [1,false, 'Hello']

console.log(myTuple)

let myTuple2: [number, boolean, string]

myTuple2 = [1, false] //eksik eleman mevcut

//Array of tuples

let myTuple3 : [number,string][]

myTuple3 = [[1,'Mark'],[2,'Harvey'],['Helen','3']]

myTuple3.push([4,'Ashley'])

myTuple3.push(false) */

//! enum 


const enum Role {
    User = 100,
    Admin,
    DbAdmin,
    

}

let currentUser: Role = Role.Admin

console.log(currentUser)