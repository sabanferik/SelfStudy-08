/* -------------------------------------------------------------------------- */
/*                           JAVASCRIPT DEĞİŞKENLER                           */
/* -------------------------------------------------------------------------- */
// Değişken bir değer tutat ve çağrıldığında o değer işleme girer
// CONST : constant : sabit

const degiskenAdi="Javascript";
console.log(degiskenAdi," çok kullanışlı bir dil");

let sayi=45
console.log(sayi+54);

var cumle="Bu bir var ile oluşturulan değişkendir"
console.log(cumle);

var kelime;
console.log(kelime);



/* -------------------------------------------------------------------------- */
/*                         Global Scope ve Local Scope                        */
/* -------------------------------------------------------------------------- */

//? Global scope:Program içerisinde fonksiyonların dışında tanımlanan ve heryerden ulaşılabilen alan

//? local Scope:Bir block içi {} ( fonksiyonların içi, döngü içleri, if blok içleri)

const global="Bu global alanda tanımlanmış bir değişkendir"
console.log(global);

{
    const local="Bu değişken local alanda oluşturulmuş bir değişkendir"
    console.log(local);
    console.log(global);  
}

{
    console.log(global);
}

{
    console.log(global);
    // console.log(local);
}

// console.log(local);

// VAR KULLANIMI
// var her ortamdan erişilebilir ve değiştirilebilir.O nedenle
// ES6 ile gelen Let ile Const kullanımı daha çok önerilir.

var num=8;
console.log(num);

{
    console.log(num);
    var num1=10
}

num1=40
var num1=100
console.log(num1);
console.clear()
/* -------------------------------------------------------------------------- */
// CONST VE LET KULLANIMI

// const :constant : sabit ( değişmeyen)

const pi=3.14;
console.log(pi);
//  const değişken tanımla ile oluşturulan değişkenler değiştirilmek istendiğinde aşağıdaki hata alınır
// Uncaught TypeError: Assignment to constant variable.

// LET KULLANIMI
// Let ile değişkenin değeri değiştirilebilir.
let kisiSayisi=300;
console.log("Kurstaki öğrenci sayısı:" , kisiSayisi);
const ad="Şaban"
kisiSayisi++

console.log("Kurstaki öğrenci sayısı:" , kisiSayisi);

{    
    console.log(ad);
    let soyad="Bölük"
    console.log(soyad);
    soyad="Büyük"
    console.log(soyad);

}
// var ad="Ömer"
console.log(ad);
// console.log(soyad);