'use strict'
console.log(" module page");
/*
//! single function

// const testFunction=function(){
//         console.log('this is test function');
// }

// module.exports=testFunction

module.exports=function(){
    console.log('this is test function');
}
*/
//! multi function

// const testFunction_A=function(){
//     console.log('this is test function A');
// }
// const testFunction_B=function(){
//     console.log('this is test function B');
// }
// const testFunction_C=function(){
//     console.log('this is test function C');
// }
// //? array
// module.exports=[
//         testFunction_A,
//         testFunction_B,
//         testFunction_C
// ]

//? obje 
// module.exports={
//     test_A:testFunction_A,
//     test_B: testFunction_B,
//     test_C:testFunction_C,
//     pi:3.14
// }

//? shorthand 1
    // module.exports.testFunction_A=function(){
    //     console.log('this is test function A');
    // }
    // module.exports.testFunction_B=function(){
    //     console.log('this is test function B');
    // }
    // module.exports.testFunction_C=function(){
    //     console.log('this is test function C');
    // }
    // module.exports.message="hello";

//? shorthand 2

//? shorthand 
module.exports={
    testFunction_A:function(){
        console.log('this is test function A');
    },
    testFunction_B:function(){
        console.log('this is test function B');
    },
    testFunction_C:function(){
        console.log('this is test function C');
    },
    message:"hello"
} 


