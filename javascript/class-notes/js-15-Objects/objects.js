//! -------------------------------------------------------------------------- */
//!                                  OBJECTS                                  */
//! -------------------------------------------------------------------------- */

// Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object(nesne) kullanılır
const dizi=[1,2,3,4,5,6]

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

/* -------------------- ------------------------ */
/*   // Object Oluşturma Yöntemleri                       */
/* ------------------- -------------------- */


//? 1. Object()  class indan türetme

const car = new Object(); // bos bir object ürettik

car.brand="BMW"
car.model=1990
car.price=10000
console.log(car);
console.log(car.model);//1990

//******************************************* */

//? 2. Constructor ile object oluşturma


// sanki bir kalip cikariyoruz
function PersonelList(a,b,c){
    this.id=a
    this.ad=b
    this.maas=c


}

const personel1=new PersonelList(1001,"Ali", 10000)
const personel2=new PersonelList(1002,"Osman", 20000)

console.log(personel1);
// her nesne icin ayri bir kopya olusturulan metodlar bellek kullanimini arttirabilir.


//******************************************* */

//?3.OBJECT LITERAL (en cok kullanılan yöntem)

let personelYapisi={} // bos bir obje tanimladik
console.log(personelYapisi);

let personel = {
    name: "Fatma",
    lastName: "kara",
    dogum: 1995,
    isMarried: true,
    experiences: ["tester", "developer", "devops"],
    address: { city: "izmir", 
               street: "bornova",
               no: 5 },
  
     calculateAge:function(){
  
      return new Date().getFullYear()- this.dogum
     }   ,
     
     selam: () => {
         return "Merhaba"
     },

     arrowFunction: () => {
         return this.isMarried
     },
      //Arrow function üretilirken this keyword ünden kurtulmak için yapılmıştır.
    // Arrow functionda this window objesine karşılık gelir.
    // window objesi içinde isMarried isimli bir özellik bulamadığından undefined
     
    };

    console.log(personel.name);
    console.log(personel.dogum);
    console.log(personel["dogum"]);
    console.log(personel.calculateAge());
    console.log(personel.selam());
    console.log(personel.arrowFunction()); //undefined
    console.log(personel.experiences[0]);
    console.log(personel.address.city);

    personel.experiences.forEach((work)=> console.log(work))

    //yeni bir özellik ekledim
    personel.phone="555-34-34"
    console.log(personel);


/* -------------------- ------------------------ */
/*   // OBJECTS METHODS           */
/* ------------------- -------------------- */
//? 1. icice (nested) Object kullanimi
