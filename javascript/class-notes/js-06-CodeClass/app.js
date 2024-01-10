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

// while (true) {
//     var girilenSayi = prompt("Lütfen bir sayı girin:");

//     // Kullanıcının iptal butonuna basması durumunda veya boş bir giriş yapması durumunda çık
    
//     if (girilenSayi === null || girilenSayi.trim() === "") {
//         alert("Geçersiz giriş. Lütfen bir sayı girin.");
//     } else {
//         // Girilen değeri sayıya dönüştürme denemesi
//         var sayi = parseInt(girilenSayi);

//         // Eğer dönüşüm başarılıysa döngüden çık
//         if (!isNaN(sayi)) {
//             alert("Girdiğiniz sayı: " + sayi);
//             break;
//         } else {
//             alert("Geçersiz giriş. Lütfen bir sayı girin.");
//         }
//     }
// }



//NIDA hnm cözüm

// let age = +prompt("Yas girin:");
// while (isNaN(age)){
//     age = +prompt("Gecerli bir sayisal deger girin:");
// }
// let response = (age >= 18) ? "Alkol alabilir" : "Alkol alamaz";
// console.log(response);

// isNaN()



// let age = +prompt("Yas girin:");

// while (isNaN(age) || age == ''  ){
//     age = +prompt("Gecerli bir sayisal deger girin:");
// }
// let response = (age >= 18) ? "Alkol alabilir" : "Alkol alamaz";
// console.log(response);

//do while

// let age2;

// do {
//     age2 = +prompt("Yaşınızı giriniz");
// } while (isNaN(age2));

// let response = (age2 >= 18) ? "Alkol alabilir" : "Alkol alamaz";
// console.log(response);


//isNaN()
/* let x = +prompt('Bir sayı giriniz :')
console.log('x = ', x)
console.log('typeof X',typeof x)

console.log(isNaN(x)) */


// Kullanici adi ve parola kontrolu yap, dogru ise ismiyle karsila degilse tekrar girmesi icin yonlendir. 3 kez yanlis giris olursa cikis yapsin.

// let user = "Mark";
// let password = "1234";

// let loginCount = 3;

// while (loginCount > 0) {
//   let userid = prompt("Kullanıcı adınızı girin:");
//   let userpw = prompt("Parolanızı girin:");

//   if (userid === user && userpw === password) {
//     alert(`Merhaba, ${userid}! Sayfamıza hoşgeldiniz.🎉:tada:`);
//     break;
//   } else {
//     loginCount--;
//     if (loginCount > 0) {
//       alert(`Kullanıcı adı veya parola yanlış girdiniz. Kalan giriş hakkı: ${loginCount}`);
//     } else {
//       alert("Giriş hakkınız kalmadı.Güle güle..");
//     }
//   }
// }


//! 10- Aşağıdaki çıktıyı konsola yazdırınız

// ?      * * * * *
// ?      * * * * * 
// ?      * * * * *
// ?      * * * * * 
// ?      * * * * *

// for (let i = 0; i <5; i++) {
//     let satir = "";
//     for (let j = 0; j < 5; j++) {
//         satir += "* ";
//     }
//     console.log(`${satir}`);
// }

//! Asagidaki cıktıyı konsola yazdırınız

//? *
//? **
//? ***
//? ****
//? *****
 


// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += "*";
//     }
//     console.log(row);
// }

//! piranit sekli olusturmak icin

// let size = 5;
// let output = "";
// for (let i = 0; i < size; i++) {
//   let row = "";
//   for (let s = 0; s < size - i - 1; s++) {
//     row += " ";
//   }
//   for (let j = 1; j <= 2 * i + 1; j++) {
//     output += "#";
//   }
//   console.log(row + output);
//   output = "";
// }


// kullanicidan alinan 5 adet sayinin ortalamasini konsola yazdiriniz.

//? for ile

// let sayac=0
// let toplam=0;
// for(let i=1; i<=5; i++){
//     sayi=+prompt(`${i}. sayi giriniz`);
//     sayac++
//     toplam+=sayi;
   
// }

// console.log(toplam/sayac);

//? while ile 

// let num = 0;
// let result = 0;

// while (num < 5) {
//     let sayi = +prompt(`Lutfen ${num+1} adet sayi giriniz...`)
//     result += sayi 
//     num++ // counter
// }
// console.log(`Girinlen ${num} sayinin ortalamasi ${result/num}'dur`);

// 1000 ile 2000 arasindaki hem 3 hemde 5 e bölünebilen sayilari konsola yazdiran cözüm?

// let sayac = 0
// for (let i = 1000; i < 2000; i++) {
//     if (i%3 === 0 && i%5 ===0 ) {
//         console.log(i)
//         sayac ++
//     }
// }

// console.log(sayac)


// while ile 

// let sayi = 1000;

// while (sayi < 2000) {
//     if (sayi % 3 === 0 && sayi % 5 === 0) {
//         console.log(sayi);
//     }
//     sayi++;
// }


