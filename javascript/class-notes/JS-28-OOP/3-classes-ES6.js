//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
  constructor(a, b, c) {
    this.title = a;
    this.author = b;
    this.year = c;
    this.summaryFunction = function () {
     return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır`;
    };
  }
  //?bu alt süslüye yazdıklarımız direk kalıbın prototype alanına gider (ES6 ile biz belirtmeden)
  yilHesapla() {
    return 2024 - this.year;
  }
}

//? new keyword ü  Book Constructor ı parametrelerle çağırır.
//? Constructor, Book object in bir örneğini kalıbını oluşturur.
//? Constructor daki tüm variablelar ve functionlar, oluşturulan her  single örneğe (instance a cocuklara) eklenir
const book1 = new Book("safahat", "M.Akif Ersoy", 1910);

console.log(book1);
console.log(book1.author);
console.log(book1.yilHesapla());

console.log( book1.summaryFunction())


//?INHERITANCE

//*Book object kalıbından Dergi object ine kalıp getir
class Dergi extends Book {

constructor(author,title,year,d){


    //super keyword ü ile atadan alınanlar
super(author,title,year)

//class ın kendine ait özellikler
this.mounth = d;

}

}

const dergi1=new Dergi("kasagi","omer seyfettin", 1915,"aralik" )
console.log(dergi1);
console.log(dergi1.yilHesapla());

class Gazete extends Book{
constructor(author,title,year,d,e){
super(author,title,year)


this.mounth=d
this.fiyat=e
}

}

const gazete=new Gazete("sabah", "", 1932,"aralik", 20)
console.log(gazete);
//! extends edildiği zaman, atadan gelen her veriyi kullanmak zorundayız, en fazla value kısmını boş " " bırakabiliriz