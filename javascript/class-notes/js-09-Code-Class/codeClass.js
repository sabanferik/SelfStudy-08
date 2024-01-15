//! verilen sayının çarpım tablosunu yazdıran fonksiyon
//printMultiplicationTable(4);

//printMultiplicationTable(4);

/* const printMultiplicationTable = (num) => {
    let result;
    for (let i = 1; i <= 10; i++) {
        result = console.log(`${num} * ${i} = ${num * i}`);
    }
    // return result;
  };
  printMultiplicationTable(5); */

  //? Math.Random 
//   for (let i = 0; i < 100; i++) {
//     console.log(Math.ceil(Math.random()*6))
//     dice()
//     console.log(sonuc);

    
//   }


//! Tavla zari fonksiyonu her cagrildiginda 1-6 arasi rastgele sayi üretecek programi Java Scriptle yazdir.

// function tavlaZariAt() {
//     // 1 ile 6 arasında rastgele bir sayı üret
//     var zar = Math.floor(Math.random() * 6) + 1;
    
//     // Sonucu ekrana yazdır
//     console.log("Zar: " + zar);

//     // Zar değerini döndür
//     return zar;
// }

// // Fonksiyonu kullanarak örnek bir çağrı
// var zarSonucu = tavlaZariAt();

//--------------------
//Ikinci Yöntem
//   function dice(){
//     console.log(Math.floor(Math.random() * 6) + 1);
//     }
//     dice()


// //! iki tane zar atacak. Ikiside esit gelirse consola tebrikler cift attiniz yazacak. Yani "Tebrikler 6-6 attiniz" yazacak.
// // sonuclari 2-3, 6-5 gibi sergileyecek.
// // her zaman sol tarafta kücük zar sergilenecek


// function zarAt() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// function tebrikMesaji(zar1, zar2) {
//     if (zar1 === zar2) {
//         console.log("Tebrikler! Çift attınız: " + zar1 + "-" + zar2);
//     } else {
//         console.log("Sonuçlar: " + Math.min(zar1, zar2) + "-" + Math.max(zar1, zar2));
//     }
// }

 
// var zar1 = zarAt();
// var zar2 = zarAt();

// tebrikMesaji(zar1, zar2);


//! her cagrildiginda verilen min max parametreleri arasinda sayi üreten bir fonksiyon yaziniz

// function rastgeleSayiUret(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

 
// let minDeger = 2;
// let maxDeger = 9;

// let uretilenSayi = rastgeleSayiUret(minDeger, maxDeger);
// console.log("Üretilen sayı: " + uretilenSayi);

//-----------------------------
// Ikinci yöntem

// function sayiUret(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // let sonuc = sayiUret(1000,2000)
// // console.log(sonuc);

// for (let i = 0; i < 100; i++) {
    
//     console.log(sayiUret(1000,2000))
    
// }


