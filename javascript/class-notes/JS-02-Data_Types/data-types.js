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
console.log(cevre)

// Daienin alanını bulan kod
// pi*r*r
let alan=pi*r*r 
console.log(alan)

