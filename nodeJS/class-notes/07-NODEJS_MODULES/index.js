'use strict'
console.log("modeule lesson index");

//require('./modules/module.js')
// require('./modules/module')
//require('./modules/') // default index.js

// //! single funciton
// const testFunction=require('./modules/module')
// testFunction()

//!multi funciton

// //? array
// const [test_A,test_B,test_C]=require('./modules/module') // export sırasına göre aktarır
// test_A() 
// test_B() 
// test_C() 

//? obje

// const {test_A,test_B,test_C}=require('./modules/module')
// test_A()
// test_C()
// test_B()

// const {test_A: t_A,test_B,test_C:t_C,pi}=require('./modules/module')
// t_A() //test_A()
// t_C() //test_C()
// test_B()
// console.log(pi);

const {testFunction_A:t_A, testFunction_B,testFunction_C,message}=require('./modules/module')
t_A()
testFunction_B()
testFunction_C()
console.log(message);