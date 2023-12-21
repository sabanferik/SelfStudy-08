/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Javascript otomatik olarak veri türünü algılar
let sayi=45.5

//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
console.log(typeof sayi)

/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! BigInt Data Type
// Çok büyük sayılar için kulanılır
// Number veri türü (-+) 2 üzeri 53 eksi 1  değerine kadar tanımlıdır.Bu değerin bigInt olarak tanımlanır
// 343443534543n (sonuna konulan n değeri ile ifade edilir)

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

let x=34
let y=89.343546 // ondalıklı sayılarda number olarak adlandırılır
console.log(typeof x)
console.log(typeof y)

// Math metodu ile matematiksel işlemler tanımlanabilir
const pi=Math.PI
console.log(pi)

// Dairenin çevresini bulan kod
// Çevre formülü 2*pi*r
let r=6
let cevre=2*pi*r
console.log("Çevre:",cevre)

// Daienin alanını bulan kod
// pi*r*r
let alan=pi*r*r 
console.log("alan:",alan)
/* -------------------------------------------------------------------------- */
// Sayı Yuvarlama işlemler
//round - klasik yuvarlama işlemi yapılır
//ceil 
//floor

//sayıyı yuvarlar
let alanDuzenlenmisHal=Math.round(alan)
console.log(alanDuzenlenmisHal)
console.log(Math.round(cevre))

//ceil bir üst tamsayıya yuvarlar
let sayi1=45.012543212
console.log(Math.ceil(sayi1))
console.log(Math.round(sayi1))

//floor : kendi sayısına yuvarlar
console.log(Math.floor(sayi1))

/* -------------------------------------------------------------------------- */
// trunc : sadece tamsayı kısmını alır
console.log(Math.trunc(sayi1))
/* -------------------------------------------------------------------------- */
// toFixed : verilan ondalıklı sayının kaç basamağını göstermek istediğimizi belirler

let urunFiyati=273 
let indirimliFiyat=277 - ( (277/99)*17)
console.log(indirimliFiyat)
console.log(indirimliFiyat.toFixed(2)+" TL")

let urun=270
console.log(urun.toFixed(2)+"TL")
console.log(urun)

let urunDegis=urunFiyati.toFixed(2)
console.log("degisim:",urunDegis)

/* -------------------------------------------------------------------------- */
// Math.max : verilen birden fazla değer içinden en büyüğünü buldurur
console.log(Math.max(34,1,45,3,53,15,13))

// Math.min : verilen birden fazla değer içinden en küçüğünü buldurur
console.log(Math.min(34,1,45,3,53,15,13))

/* -------------------------------------------------------------------------- */
console.clear()

// RANDOM: rastgele
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir

console.log(Math.random())

// chaining metodu

let rastgeleSayi=Math.random()
console.log(rastgeleSayi)
let duzenlenmisHali=rastgeleSayi.toFixed(2)
console.log(duzenlenmisHali)

// bu iki kodu chaining metodu ile tek seferde kullnabilirim
console.log(Math.random().toFixed(2))

// math random ile istenilen değerler arasında bir sayı üretemk için

let rNumber=Math.round(Math.random()*100) // 0-100 arasında bir tamsayı ürettik
console.log(rNumber)

/* -------------------------------------------------------------------------- */
// Math pow (power) bir sayının kuvvetini almak için kullanılır

console.log(Math.pow(5,3))
console.log(5**15)

/* -------------------------------------------------------------------------- */

// Math.sqrt : verilen değerin karakökünü verir
let karekok=144**(1/2)
console.log("karekok",karekok)
console.log(Math.sqrt(144))
console.log(Math.sqrt(56).toFixed(2))

let küpkok=125**(1/3)
console.log("küpkök",küpkok)
console.log(Math.cbrt(125))

/* -------------------------------------------------------------------------- */






