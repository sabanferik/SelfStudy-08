//^ And operatörü

/* //& Truthy value with &&
console.log(2 && 5) //5

console.log(Boolean(2))

//& Falsy value with &&
console.log( 0 && 7) //0
console.log( '0' && 7) //7
console.log(Boolean(0))

//& object / Array  with &&

console.log({} && "Hello"); //Hello
console.log([] && "Hello"); //Hello

console.log(Boolean([])) //true
console.log(Boolean({})) //true 

//& Falsy string with &&

console.log('' && 'World') // ilk değer boş string döner
console.log("" && 'World') //
console.log(`` && 'World') //

//& Falsy null with &&

console.log(null && 'Hello World') //null
console.log(NaN && 'Hello World') //NaN
console.log(null && NaN) //null */


// //^ OR operatörü ||

// //& Truthy value with ||

// console.log(2 || 5) //2

// //& Falsy value with ||

// console.log(0 || 7) //7

// console.log(0 || '') //boş string döner

// //& object / Array  with ||
// console.log({} || "Hello"); // {}
// console.log([] || "Hello"); // []

// //& Falsy null with ||

// console.log(null || 1) //1
// console.log(null || NaN) //NaN


// 18 yaşından büyüklerin alkol kullanabileceği 18 yaşından küçüklerin alkol kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız.

// let yas= +prompt(`Yaşınızı girin: `);

// if (yas>=18) {
//     console.log(`Alkol kullanabilir`);
// } else if (yas<18) {
//     console.log(`18 Yaşından küçük. Alkol kullanamaz`);
// } else console.log(`Bir şeyler yanlış gitti! Yaş sayı olarak girilmelidir.`);


//ternary

// let age = +prompt("Yas girin:");
// console.log(typeof age);

// console.log(NaN +3);
// let response = (age >= 18) ? "Alkol alabilir" : "Alkol alamaz";
// console.log(response);


// kullanicinin sayi girene kadar tekrar giris yapmasini saglayan while yapisini yaziniz.

while (true) {
    var girilenSayi = prompt("Lütfen bir sayı girin:");

    // Kullanıcının iptal butonuna basması durumunda veya boş bir giriş yapması durumunda çık
    if (girilenSayi === null || girilenSayi.trim() === "") {
        alert("Geçersiz giriş. Lütfen bir sayı girin.");
    } else {
        // Girilen değeri sayıya dönüştürme denemesi
        var sayi = parseInt(girilenSayi);

        // Eğer dönüşüm başarılıysa döngüden çık
        if (!isNaN(sayi)) {
            alert("Girdiğiniz sayı: " + sayi);
            break;
        } else {
            alert("Geçersiz giriş. Lütfen bir sayı girin.");
        }
    }
}