// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");


//! global scope (gökteki yildizlar gibi herkes görebilir)

let first=5;
let second=12;
let third=456;

console.log(first,second,third);

const scopeFuntion = () => {
    
    first=8;
// let ile yeni bir second olustu. ve disaridan erisilemez hale geldi.
    let second=45; 

    console.log(second);

    let fourth=1234

    return fourth
    // return fourth yazılır. fonksiyon dışında bunu görmek için call yapılan yeri console.log da yazdırmalıyız
}

console.log( scopeFuntion());
console.log(first);
console.log(second);
// console.log(fourth);

//***************************************** */

//!global degisken
let number1=11;

const fonk1=()=>{

    let number1=44;  //?function-scope

    number1++

    return number1
}
console.log(fonk1());

//? fonksiyondan gelen deger number1 degiskenine atandi
number1=fonk1();  //?global scope ama 45 olarak degistirildi


// const number1=56 //Uncaught SyntaxError: Identifier 'number1' has already been declared

{
number1++

let x=5;

x++

let y= x+15

console.log(y); //? block -scope



}

// console.log(y);

console.log(number1);


//? VAR

number2=100;

var number2; //? hoisted (en yukariya tasimiis oldum)
console.log(number2);

var result="Hallo"

if(number2==100){
    let result="Hi!" //? local (blocked)
    console.log(result);
}else {

    result="Salut"  //? global
    console.log(result);
}

console.log(result)  //? global
