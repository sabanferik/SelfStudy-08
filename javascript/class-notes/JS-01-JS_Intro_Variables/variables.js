/* ------------------------------------------------------ */
/*                   Global Scope ve Local Scope         */
/* ---------------------------------------------------- */

//? Global scope:Program içerisinde fonksiyonların dışında tanımlanan ve heryerden ulaşılabilen alan


//global alan - global scope
degiskenAdi="Javascript"
desigkenSayi=56
console.log(degiskenAdi)

//? local Scope:Bir block içi {} ( fonksiyonların içi, döngü içleri, if blok içleri)

{ 
    //local alan
    console.log("bu alan local alan")
}

/* ----------------------------------------------------- */

 /* ------------------------------------------------------- */
 /*             Var kullanımı                               */
 /* --------------------------------------------------- */

//  var => değişken tanımlama türü : her alandan ulaşılabilir ve değiştirilebilir
//! var her bölümde değiştirilebilir
//! var tekrar tanımlanabilir
//! Bu yapısından dolayı hatalara yol açma ihtimali fazla olabileceğinden dolayı ES 6 ile gelen const ve let kullanımı tavsiye edilir
var x=5
x=15
console.log(x)

{
    console.log("local alandayım")
    var x=20
    x=45
    console.log(x)
}

console.log(x*5) // sonucu 75 beklerken size 225 verecektir.

/* ------------------------------------------------------- */
/*          CONST Kullanımı                              */
/* ---------------------------------------------------- */

// const : constant : sabit 
//! const türünde bir değere local ve global alanda ulaşabilir

const pi=3.14
const sayi1=15

//! redeclare olmaz -çünkü sabir bir değer
// pi=3
console.log("Global alanda:",pi)

{   
    const pi=3       
    console.log("local alanda:",pi)
    const sayi1=25 
    console.log("sayi1 in yeni değeri:",sayi1)
}

console.log(pi)

{
    // const pi=3.40
    console.log(pi)
}
console.clear()
// LET KULLANIMI

// const tanımladığım değeri değiştiremem ama let ile değiştirebilirim

// let sayi2=10
// const sayi2=15


let toplam=0
toplam=25+15
console.log(toplam)

{    // let toplam=20   
    console.log(toplam)
    toplam=60
    console.log(toplam)
    let a=35  
}

console.log(toplam)
console.log(a)


