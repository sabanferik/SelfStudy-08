// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//? ornek ekrana 10 kere merhaba yazdırın

// for (let index = 1; index <= 10; index++) {
//   console.log(index, "MERHABA");
// }

//? 1 den N e kadar olan sayıların toplamı

// const N=+prompt("lütfen N i giriniz")

// let toplam=0

// for (let index = 1; index <= N; index++) {

//     // toplam=toplam +index

//     toplam+=index
// }

//   console.log(toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi = +prompt("asallık kontrolü için bir sayı giriniz");
// let asal = true;

// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     asal = false;
//   }
// }
// console.log(asal ? "asaldır" : "asal değildir");

// //? Ornek: 0-100 Arasinda 7 adet rasgele tamsayi sayi ureten kodu
// //? for dongusu ile yaziniz..
// const rast = Math.random() * 100;
// const rast2=Math.ceil(rast)
// console.log(rast,rast2);

for (let i = 1; i <= 7; i++) {
    const rastgele = Math.round(Math.random() * 100);
    console.log(rastgele);
  }
  
  //* NOT:
  //* Math.floor() =>en yakin alt tamsayiya yuvarlar
  //* Math.ceil() =>en yaki ust tamsayiya yuvarlar
  //* Math.round() => degerine gore nereye yakınsa oraya yuvarlar.
  //* Math.trunc() => kesirli sayinin tam kismini alir.
  
  //****************** */ WHİLE*************
  //*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz
  // let number = +prompt("lütfen 1-100 arasında bir sayı giriniz");
  
  // while(number < 1 || number >100){
  
  //     console.error("number 1-100 arasında olmalı");
  //     number = +prompt("tekrar sayı girmeyi deneyin");
  
  // }
  // console.log("tebrikler", number);
  
  
  //?for ile çözümü
  let not2 = prompt("Lütfen notunuzu giriniz:");
  for (; not2 < 1 || not2 > 100; ) {
    console.log("Not 1'dan kucuk veya 100'den buyuk olamaz.");
    not2 = prompt("Yeniden notunuzu giriniz:");
  }
  console.log("Giridiginiz Not:", not2);
  
  //! while daki şart true old sürece altındaki süslü işler, false old anda süslünün dışına çıkılır
  
  //****************** */ DO-WHİLE*************
  //*ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz
  
  // let number1;
  
  // do {
  // number1=+prompt("do-while için 1-100 arasında sayı giriniz")
  // number1 < 1 || number1 > 100 && alert(number1)
  // // alert(number1)
  
  // } while (number1 < 1 || number1 > 100);
  
  // console.log(number1);
  
  //! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir
  
  //? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
  //? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
  //? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
  //? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
  //? isteyecek ve islemleri tekrar edecektir.
  let devam;
  do {
  
  let vize = +prompt("vize notunuzu giriniz");
  let final = +prompt("final notunuzu giriniz");
  
  let ortalama=vize*0.4+final*0.6
  console.log(ortalama >=60 ? "tebrikler geçtiniz":"kaldınız");
  
  devam=prompt("devam etmek istiyorsanız e/E giriniz")
  
  } while (devam.toUpperCase()=="E");
  
  // console.log("çıktık");
  
  //? ORNEK2: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.
  let sayi1;
  do {
    sayi1 = prompt("lütfen sayı gir");
  } while (sayi1 != "q");
  
  console.log("bitti");
  
  
  