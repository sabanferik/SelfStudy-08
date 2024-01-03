// * =======================================================
// *                   KARAR YAPILARI (conditions)
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız
const number1 = +prompt("1. sayıyı giriniz");
const operation = prompt("+,-,*,/ işlemlerinden birini giriniz");
const number2 = Number(prompt("2. sayıyı giriniz"));

let sonuc;

if (operation == "+") sonuc = number1 + number2;
else if (operation == "-") sonuc = number1 - number2;
else if (operation == "*") {
  sonuc = number1 * number2;
} else if (operation == "/") {
 
    if (number2 != 0) {
    sonuc = number1 / number2;
  } else {
    alert("payda 0 olamaz");
  }
  
} else {
  alert("yanlış işlem girdiniz");
}

//! 1.yazım

if(sonuc!=0){
    console.log(sonuc);
}
//! 2.yazım

if(sonuc){
    console.log(sonuc);
}

//! 3.yazım

sonuc && console.log(sonuc);

// console.log(sonuc);
