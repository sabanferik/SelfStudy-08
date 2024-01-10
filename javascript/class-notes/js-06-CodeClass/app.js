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




// Armstrong number while solution

// let num = parseInt(prompt("Enter a number:"));
// let originalNumber = num;
// let digitCount = 0;
// let sum = 0;

// while(originalNumber !== 0){
//     originalNumber = Math.floor(originalNumber / 10)
//     console.log(originalNumber)
//     digitCount++
// }

// originalNumber = num;

// while (originalNumber > 0) {
//  let digit = originalNumber % 10;
//  sum += digit ** digitCount;
//  originalNumber = Math.floor(originalNumber / 10)
// }

// sum === num ? console.log(num + " is an Armstrong number.") : console.log(num + " is not an Armstrong number."
// )

//? Kullanıcıdan bir sayı girişi alın. Eğer kullanıcı negatif bir sayı girerse, kullanıcıya "Negatif sayı girdiniz!" mesajını verin. Eğer kullanıcı pozitif bir sayı girerse, bu sayının 1'den başlayarak kendisine kadar olan sayıları konsola yazdırın. 0 girerse de sıfır girdiniz yazdırın.


// // Kullanıcıdan sayı girişi alın
// var sayi = +prompt("Lütfen bir sayı girin:");

// // Girilen değeri sayıya çevirin
// sayi = parseInt(sayi);

// // Girilen sayının pozitif, negatif veya sıfır olduğunu kontrol edin
// if (sayi < 0) {
//     console.log("Negatif sayı girdiniz!");
// } else if (sayi > 0) {
//     // 1'den girilen sayıya kadar olan sayıları yazdırın
//     for (var i = 1; i <= sayi; i++) {
//         console.log(i);
//     }
// } 


// Elif hnm cözüm
//? Kullanıcıdan bir sayı girişi alın. Eğer kullanıcı negatif bir sayı girerse, kullanıcıya "Negatif sayı girdiniz!" mesajını verin. Eğer kullanıcı pozitif bir sayı girerse, bu sayının 1'den başlayarak kendisine kadar olan sayıları konsola yazdırın. 0 girerse de sıfır girdiniz yazdırın.


// let positive = false
// while (!positive) {
//     let sayi=+prompt("Sayi giriniz")
//     if(sayi <0){
//       console.log("Negatif bir sayı girdiniz")
    
    
//     }else if (sayi == 0){
//      console.log("Sıfır girdiniz") 
//     } else{
//     for (i=1;i<=sayi;i++){
//       console.log(i)
//     }
//     positive = true
//     }
    
// }

//! 3- Artık yıl sorusu
//? Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

//? Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, veya yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

//? Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.


// let yil=+prompt("Bir Yil Giriniz")
 

// if (yil % 4 == 0 && yil % 100 != 0) {
//     console.log(`${yil} artık yıldır`)
// } else if (yil % 400 == 0 ) {
//     console.log(`${yil} artık yıldır`)
// }else {
//     console.log(`${yil} artık yıl değildir`)
// }


// Emre Hc nin

// let year = prompt("Yıl girin:");

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(year + " bir artık yıldır.");
// } else {
//   console.log(year + " bir artık yıl değildir.");
// }

//? Kuulanicidan yil ve ay bilgisi alinacak . O na göre o ay kac cekiyor hesaplanacak.
//? switch case yapisi kullanilacak

// örnek yil : 2000 ay:2 => 2000 yilinda 2. ay 29 ceker
// örnek yil : 2001 ay 2: => 2001 yilinda 2. ay 28 ceker

// // Kullanıcıdan yıl ve ay bilgisini alın
// let yil = prompt("Lütfen bir yıl giriniz:");
// let ay = prompt("Lütfen bir ay giriniz (1-12 arasında):");

// // Girilen değerleri tamsayıya çevirin
// yil = parseInt(yil);
// ay = parseInt(ay);

// // Girilen ayın gün sayısını hesapla
// let gunSayisi;

// switch (ay) {
//     case 1: // Ocak
//     case 3: // Mart
//     case 5: // Mayıs
//     case 7: // Temmuz
//     case 8: // Ağustos
//     case 10: // Ekim
//     case 12: // Aralık
//         gunSayisi = 31;
//         break;
//     case 4: // Nisan
//     case 6: // Haziran
//     case 9: // Eylül
//     case 11: // Kasım
//         gunSayisi = 30;
//         break;
//     case 2: // Şubat
//         // Şubat'ın gün sayısını hesapla (artık yıl kontrolü yapılacak)
//         if ((yil % 4 == 0 && yil % 100 != 0) || (yil % 400 == 0)) {
//             gunSayisi = 29; // Artık yıl
//         } else {
//             gunSayisi = 28; // Artık yıl değil
//         }
//         break;
//     default:
//         console.log("Geçersiz ay girişi!");
//         break;
// }

// // Sonucu ekrana yazdır
// if (gunSayisi !== undefined) {
//     console.log(yil + " yılında " + ay + ". ay " + gunSayisi + " gün çeker.");
// }



//? ay bilgisinin kullanici tarafindan hatali girilmesini önlemek

 
let yil = prompt("Lütfen bir yıl giriniz:");
let ay = prompt("Lütfen bir ay giriniz (1-12 arasında):");

 
yil = parseInt(yil);
ay = parseInt(ay);

 
while (ay < 1 || ay > 12) {
    ay = +(prompt(`Hatalı ay girdiniz. Lütfen 1-12 arasında bir değer girin`));
  } 
     
    let gunSayisi;

    switch (ay) {
        case 1: 
        case 3:   
        case 5:  
        case 7:  
        case 8: 
        case 10:  
        case 12:  
            gunSayisi = 31;
            break;
        case 4:  
        case 6:  
        case 9:  
        case 11:  
            gunSayisi = 30;
            break;
        case 2:  
            
            if ((yil % 4 == 0 && yil % 100 != 0) || (yil % 400 == 0)) {
                gunSayisi = 29;  
            } else {
                gunSayisi = 28;  
            }
            break;
    }

     
    console.log(yil + " yılında " + ay + ". ay " + gunSayisi + " gün çeker.");

