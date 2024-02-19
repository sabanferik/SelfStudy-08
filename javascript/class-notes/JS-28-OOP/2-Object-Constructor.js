//* ======================================================
//*          OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)
//!arrow function this keyword unu desteklemediği için burada function decleration yazımını tercih ettik


function Book(a,b,c){

  this.author=b
  this.title=a
  this.year=c
  
  this.summaryFunction=function(){
  
      return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır`
  }
  
  
  }
  
  const book1=new Book("karamazov kardeşler", "Dostyevski",1980)
  const book2=new Book("yaprak dökümü", "reşat nuri",1950)
  
  console.log(book1);
  console.log(book2.author);
  document.querySelector("h2").textContent=book2.summaryFunction()
  
  
  //!kalıp ta (constructor) prototype alanına ulaşmak için alttaki gibi bir syntax kullanılır
  //*Book un prototype alanına yeni bir parametre ekledik ama bellekte yer kaplamaz, ihtiyaç olunca child lar kullanır
  
  Book.prototype.tür="roman";
  Book.prototype.yilHesapla=function(){
      return 2024-this.year
  }
  
  //? prototype alanındaki veriler bellekte yer kaplamadı ama çağırınca erişebildik
  console.log(book2.yilHesapla());
  console.log(book1.tür);
  
  // //*__proto__ keywordüyle yapılan değişiklik hala arka planda durur ve bellekte yer kaplamaz, birinin proto sunda yapılan değişiklik her child ı etkiler
  // book2.__proto__.tür = "hikaye";
  // console.log(book2.tür);
  
  
  //?INHERITANCE (kalıtım) okul yönetimi örneğini hatırla
  
  
  function Dergi(title,author,year,d){
  Book.call(this,title,author,year)
  
  this.mounth=d
  
  }
  
  
  
  //*Book object inden (kalıbından) türetilen Dergi kalıbına, Book un prototype alanındaki bilgiler (ES5 te) direk gelmez,gelmesini istiyorsak alttaki kodu (daha child oluşturmadan önce)yazmalıyız
  Dergi.prototype=Object.create(Book.prototype)
  
  const dergi1=new Dergi("time", "Jonathan", 1960, "eylül" )
  
  console.log(dergi1);
  console.log(dergi1.tür);
  console.log(dergi1.yilHesapla());
  console.log(dergi1.summaryFunction());