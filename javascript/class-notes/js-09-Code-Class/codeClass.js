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


//! her cagrildiginda arka plan rengini rastgele degistirecek bir fonksiyon yaziniz

// document.body.style.backgroundColor = getRandomColor();

// function getRandomColor() {
// //   let sayfa = "rgb(0-255,0-255,0-255)";
//   let reng = Math.floor(Math.random() * 256);
//   let reng2 = Math.floor(Math.random() * 256);
//   let reng3 = Math.floor(Math.random() * 256);
//   return (sayfa = `rgb(${reng},${reng2},${reng3})`);
// }

//---------------------------------------
//2.yol

// const randomColor = () => {
//     const rgbGen = () => {
//         return Math.floor(Math.random() * 256);
//     }
//     let r = rgbGen();
//     let g = rgbGen();
//     let b = rgbGen();
//         return `rgb(${r}, ${g}, ${b})`;
// }

// document.body.style.backgroundColor = randomColor();


// //! Ciftlikteki hayvan sayilarini parametre olarak alacak ve ayak sayilari toplamini döndürecek bir fonksiyon yaziniz.

// // Tavuk, Inek, Ördek, Keci

// // function toplamAyakSayisi(tavukSayisi, inekSayisi, ordekSayisi, keciSayisi) {
// //     const tavukAyakSayisi = tavukSayisi * 2;
// //     const inekAyakSayisi = inekSayisi * 4;
// //     const ordekAyakSayisi = ordekSayisi * 2;
// //     const keciAyakSayisi = keciSayisi * 4;

// //     const toplamAyaklar = tavukAyakSayisi + inekAyakSayisi + ordekAyakSayisi + keciAyakSayisi;

// //     return toplamAyaklar;
// // }

 
// // let tavukSayisi = 5;
// // let inekSayisi = 3;
// // let ordekSayisi = 2;
// // let keciSayisi = 4;

// // let toplamAyaklar = toplamAyakSayisi(tavukSayisi, inekSayisi, ordekSayisi, keciSayisi);
// // console.log("Toplam Ayak Sayısı: " + toplamAyaklar);

// //--------------------------------------------
// // 2. yontem
// // const numberOfLegs = (chiken, cow, duck, goat) => {
// //     const legs = (chiken + duck) * 2 + (cow + goat) * 4;
// //     return legs
// //   };
// //   console.log(numberOfLegs(4,5,6,7))


// //! Ürün fiyati ve indirim orani verilecek .
// // 1- orjinal fiyat
// // 2-Indirim orani
// // 3-Indirimli tutar

// // const indirimliTutarHesapla = (urunFiyati, indirimOrani) => {
// //     const indirimMiktari = urunFiyati * (indirimOrani / 100);
// //     const indirimliTutar = urunFiyati - indirimMiktari;

// //     return {
// //         orjinalFiyat: urunFiyati,
// //         indirimOrani: indirimOrani,
// //         indirimliTutar: indirimliTutar
// //     };
// // };

 
// // const urunFiyati = 100;
// // const indirimOrani = 20;

// // const sonuc = indirimliTutarHesapla(urunFiyati, indirimOrani);
// // console.log("Orjinal Fiyat: " + sonuc.orjinalFiyat);
// // console.log("Indirim Oranı: " + sonuc.indirimOrani + "%");
// // console.log("Indirimli Tutar: " + sonuc.indirimliTutar);

// //------------------------------------------
// // 2. yontem
// // const fullPrice_vs_discountedPrice = (x, y) => {
// //     return ` Full Price: ${x} Discount:%${y} SalePrice: ${x - (x * y) / 100}`;
// //   };
// //   console.log(fullPrice_vs_discountedPrice(100, 20));


// //!  Celcius Fahrenhiet derece cevrim fonksiyonu yaziniz

// // 

// //! Kullanicidan 
// //! 1- Fahrenheit to Celsius
// //! 2- Celsius to Fahrenheit
// //! q=quit degerlerini alip sonuc yazdiran programi yaziniz

// const fToC = (fahrenheit) => {
//     return ((fahrenheit - 32) * 5 / 9).toFixed(2)
// }

// while (true) {
//     let secim = prompt(`Lütfen seçiminizi yapın :
//     1- C to F
//     2- F to C
//     q- Çıkış`)

//     // console.log(secim)

//     if(secim == 1){
//         console.log(cToF(+prompt('Çevirmek istediğiniz değeri girin')))
        
//     }else if(secim == 2){
//         console.log(fToC(+prompt('Çevirmek istediğiniz değeri girin')))
        
//     }else if(secim == 'q'){
//         break
//     }else{
//         console.log('Hatalı giriş yaptınız')
//     }

    
// }

// console.log('Çıkış yapıldı')

//------------------------
//2. yontem

// const fToC = (fahrenheit) => {
//     return ((fahrenheit - 32) * 5/9).toFixed(2); };

//  const cToF = (celsius) => {
//      return (celsius * 9/5 + 32).toFixed(2);
//  };

// while (true) {
//     let value = prompt("F (fahrenheit) | C (celsius) | Q (exit)").toUpperCase();
//     if (value == "Q") break;
//     else{
//     let input = parseInt(prompt("Deger girin:"));
//     if (value === "F") {
//         console.log(`${input} Fahrenheit, ${fToC(input)} Celsius`);
//     } else if (value === "C") {
//         console.log(`${input} Celsius, ${cToF(input)} Fahrenheit`);
//     } else {
//         console.log("invalid value");
//       }
//     }
// }


//------------------------
//3. yontem


// const fahrenheitToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;
// const celsiusToFahrenheit = celsius => (celsius * 9) / 5 + 32;

// const main = () => {
//     const secenek = prompt("Dönüşüm yapmak istediğiniz birimi seçin:1- Fahrenheit to Celsius 2- Celsius to Fahrenheit q=quit");

//     switch (secenek) {
//         case '1':
//             const fahrenheit = prompt("Fahrenheit derecesini girin: ");
//             console.log(`${fahrenheit} Fahrenheit derece, ${fahrenheitToCelsius(fahrenheit)} Celsius dereceye eşittir.`);
//             main();
//             break;
//         case '2':
//             const celsius = prompt("Celsius derecesini girin: ");
//             console.log(`${celsius} Celsius derece, ${celsiusToFahrenheit(celsius)} Fahrenheit dereceye eşittir.`);
//             main();
//             break;
//         case 'q':
//             break;
//         default:
//             console.log("Geçersiz seçenek. Lütfen tekrar deneyin.");
//             main();
//             break;
//     }
// };

// main();