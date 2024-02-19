//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )

class Book {
  constructor(a, b, c) {
    this.title = a;
    this.author = b;
    this.year = c;
    this.summaryFunction = function () {
      return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır`;
    };
  }
  yilHesapla() {
    return 2024 - this.year;
  }
}

//!OVERRIDING

class Dergi extends Book{

    constructor(title,author,year,mounth){

        super(title,author,year)

        this.mounth=mounth
//!overriding yaptığımız fonksiyon
this.summaryFunction=function(){

    return `${this.author} wrote the book ${this.title} in ${this.year}`
}

    }

//!overriding yapılan fonk.
yilHesapla(){

    return `${this.title} kitabının yılı bilinmemektedir`
}

}

const dergi=new Dergi("stientific essays", "ein stein", 1900, "eylül")

console.log(dergi.summaryFunction());
console.log(dergi.yilHesapla());

//!OVERLOADING
// Diğer programlama dillerinden farklı olarak JavaScript , Function Overloading'i desteklemez . 
// İşte JavaScript'in Function Overloading i desteklemediğini gösteren küçük bir kod. 

function arg(arg1){
   alert(arg1)
}
function arg(arg1,arg2,arg3){
    console.log(arg1,arg2,arg3);
}

arg("naber")//naber undefined undefined
arg("naber","napıyorsun","nasılsın")//naber napıyorsun nasılsın

// Çıktıdaki "undefined" ifadesinin nedeni şudur: JavaScript'te aynı adla iki işlev tanımlanırsa, son tanımlanan işlev önceki işlevin üzerine yazar. 
// Bu durumda, gel(arg1) öğesinin üzerine gel(arg1,arg2,arg3) tarafından yazılmıştır, ancak 
// işleve yalnızca bir Argüman ("naber") ilettik. Bu, ikinci ve üçüncü argümanın tanımsız olduğu anlamına gelir, yani ikinci argümanı yazdırmaya çalıştığımızda, “tanımsız” olarak yazdırılır.
// overloading işlevinin JavaScript'te desteklenmediğini gördük, ancak overloading işlevini kendi başımıza uygulayabiliriz; bu, daha fazla sayıda ve daha fazla türde argüman söz konusu olduğunda oldukça karmaşıktır. Aşağıdaki kod, JavaScript'te overloading işlevinin nasıl uygulanacağını anlamanıza yardımcı olacaktır.
//*https://www.geeksforgeeks.org/function-overloading-in-javascript/