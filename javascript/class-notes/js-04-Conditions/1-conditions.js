// * =======================================================
// *                   KARAR YAPILARI (conditions)
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
// console.log("-------------------------------------");
// console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
// console.log("-------------------------------------");

// //!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız
// const number1 = +prompt("1. sayıyı giriniz");
// const operation = prompt("+,-,*,/ işlemlerinden birini giriniz");
// const number2 = Number(prompt("2. sayıyı giriniz"));

// let sonuc;

// if (operation == "+") sonuc = number1 + number2;
// else if (operation == "-") sonuc = number1 - number2;
// else if (operation == "*") {
//   sonuc = number1 * number2;
// } else if (operation == "/") {
//   if (number2 != 0) {
//     sonuc = number1 / number2;
//   } else {
//     alert("payda 0 olamaz");
//   }
// } else {
//   alert("yanlış işlem girdiniz");
// }

// //! 1.yazım

// if (sonuc != 0) {
//   console.log(sonuc);
// }
// //! 2.yazım

// if (sonuc) {
//   console.log(sonuc);
// }

// //! 3.yazım

// sonuc && console.log(sonuc);

// console.log(sonuc);

//! TERNARY

// const age = 12;
// const gender ="erkek";
// const health= true;


// if(age>=20 && gender==="erkek" && health===true){
//   console.log("askerlik yapabilir");
// }else{
//   console.log("askerlik yapamaz");
// }

//! 2. yol ternary
// age >= 20 && gender==="erkek" && health===true ? console.log("askerlik yapabilir") : console.log("askerlik yapamaz");

//? örnek ternary

// const grade1=prompt("please enter your grade")

// grade1>= 50 ? console.log("SUCCESS") : console.log("FAIL")


// //? tek durumlu kosullandirmada da mecburen else yapisi (: ve sonrasi) kullanilmak zorundadir.

// const score1=grade1>=50 ? "SUCCESS" : ""

// const score2= grade1>=50 && "SUCCESS"
// console.log(score1);
// console.log(score2);

// //? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, sadece 2 durum var ise
// //? Ternary kullanmak daha mantiklidir, yoksa if tercih edilebilir.

// const speed =110

// speed>120?console.log("Speedy") : (speed>90 ?  console.log("Normal") : console.log("Low speed"))

// //? ayni örneğin if-else ile yapilmasi
// if (speed > 120) {
//   console.log("Speedy")
// } else if (speed >= 90) {
//   console.log("Normal")
// } else {
//   console.log("Low Speed")
// }