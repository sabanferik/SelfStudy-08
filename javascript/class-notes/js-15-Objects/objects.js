//! -------------------------------------------------------------------------- */
//!                                  OBJECTS                                  */
//! -------------------------------------------------------------------------- */

// Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object(nesne) kullanılır
const dizi = [1, 2, 3, 4, 5, 6];

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

//* -------------------------------------------------------------------------- */
//*                       // Object Oluşturma Yöntemleri                       */
//* -------------------------------------------------------------------------- */

//? 1. Object()  class ından türetme

const car = new Object(); //boş bir object  ürettik

car.brand = "BMW";
car.model = 1990;
car.price = 10000;
console.log(car);
console.log(car.model); //1990

//************************************ */

//? 2. Constructor metodu ile object oluşturma

//sanki bir kalıp çıkarıyoruz
function PersonelList(a, b, c) {
  this.id = a;
  this.ad = b;
  this.maas = c;
}

const personel1 = new PersonelList(1001, "Ali", 10000);
const personel2 = new PersonelList(1002, "Osman", 20000);

console.log(personel1);
// her nesne için ayrı bir kopya oluşturulan metodlar, bellek kullanımını arttırabilir

//****************************** */
//? 3. OBJECT LITERAL (en çok kullanacağımız yöntem)

let personelYapısı = {}; //boş bir object tanımlamak
console.log(personelYapısı);

let personel = {
  name: "Fatma",
  lastName: "kara",
  dogum: 1995,
  isMarried: true,
  experiences: ["tester", "developer", "devops"],
  address: { city: "izmir", street: "bornova", no: 5 },

  calculateAge: function () {
    return new Date().getFullYear() - this.dogum;
  },

  selam: () => {
    return "Merhaba";
  },

  arrowFunction: () => {
    return this.isMarried;
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

personel.experiences.forEach((work) => console.log(work));

//yeni bir özellik ekledim
personel.phone = "555-34-34";
console.log(personel);

//* ------------------------------------------------------ */
//*                     OBJECT METHODS
//* ---------------------------------- */
//? 1. içiçe (nested) Object kullanımı

let employeeList = {
  person1: {
    name1: "Abdulkadir",
    lastName: "baki",
    dateOfBirth: 1980,
    salary: 20000,
    job: "developer",
  },
  person2: {
    name2: "elif",
    lastName: "akalın",
    dateOfBirth: 1990,
    salary: 20000,
    job: "developer",
  },
  person3: {
    name3: "esra",
    lastName: "bilgin",
    dateOfBirth: 1985,
    salary: 21000,
    job: "devops",
  },
};
console.log(employeeList.person3.name);
console.log(employeeList.person2.salary);
console.log(employeeList["person3"].name);

//* -------------------------------------------------------------------------- */
//* -------------------------------------------------------------------------- */
//*                             // FOR - OF -IN YAPISI                             */
//* -------------------------------------------------------------------------- */
//! for of
let numbersAndLetters=["a",4,6,7,"C"]
for (const i of numbersAndLetters){
    console.log(i);
}

// for-of sıralı olan dizilerde kullanılır ama objectlerde daha komplex bir yapı olduğu için for-of kullanılmaz

// for(const i of employeeList){
//     console.log(i);
// }
//!employeeList is not iterable hatası aldık

//? object in içinde varolan özellikler

console.log(Object.keys(employeeList));
console.log(Object.values(employeeList));

for (const i of Object.keys(employeeList)) {
  console.log(i);
}
for (const i of Object.values(employeeList)) {
     console.log(i);
     console.log(i.lastName);
     console.log(i.name);//undefined çünkü key leri farklı
  console.log(Object.values(i)[0]);

}

//!for  in 
let numbersAndLetters2 = ["a", 4, 6, 7, "C"];
for (const i in numbersAndLetters2) {
  console.log(i);
}

for (const i in employeeList){
    console.log("for in yoluyla", i);
    console.log(employeeList[i].job);
}
// console.clear() // console u temizlemek için

//!!!   employeeList.forEach((m)=> console.log(m.name)) // Objelerde map,forEach,filter,reduce kullanılmaz. JSon bir dizi içinde obje olduğu için dizi metodları map,filter,reduce,forEach kullanılabiliyor.

//* -------------------------------------------------------------------------- */
//* -------------------------------------------------------------------------- */
//*                   JSON -Javascript Script Object Notation                  */
//* -------------------------------------------------------------------------- */

const employeeList2 = [
    {
      name1: "Abdulkadir",
      lastName: "baki",
      dateOfBirth: 1980,
      salary: 20000,
      job: "developer",
    },
    {
      name2: "elif",
      lastName: "akalın",
      dateOfBirth: 1990,
      salary: 20000,
      job: "developer",
    },
    {
      name3: "esra",
      lastName: "bilgin",
      dateOfBirth: 1985,
      salary: 21000,
      job: "devops",
    },
  ]


  // JSON ile farklı veri türleri barındırılabilir
// Dillerden bağımsızdır.
//nesnelerin (objelerin) temsil edilmesi için anahtar-değer çiftlerini kullanır. Bu, verilerin daha iyi organize edilmesini ve ilişkilendirilmesini sağlar.
//JSON, veri  işleme açısından hızlıdır. Bu nedenle web uygulamalarında ve servislerde yaygın olarak kullanılır.

//* json a yeni eleman ekleme

employeeList2.push({
    name4: "nida",
    lastName: "güler",
    dateOfBirth: 1995,
    salary: 21000,
    job: "devops",
  });
  
  console.log(employeeList2);
  
  employeeList2.forEach((t)=>console.log(t.lastName))

  //* örnek employeeList dizisindeki name leri büyük harf yapip ekrana bastiriniz
 

  employeeList2.map((a)=>Object.values(a)[0].toUpperCase()).forEach((b)=>console.log(b))

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];

  console.log(people);

  //* Ornek1: people dizisindeki job lari göster

  people.forEach((a)=>console.log(a.job))

  //* Ornek2 yaslari 1 er arttir ve sonucu yeni diziye aktar

   const yaslar=  people.map((kisi)=>kisi.age+1)
   console.log(yaslar);
   console.log(people);

   //* Ornek3 yaslari 1 er arttir, sonucu dizide kalici degistir

   people.map((kisi,index,array)=> (array[index].age=array[index].age+1));
//    people.map((kisi, index, array)=>(kisi.age=array[index].age+1));

   console.log(people);

   //* Ornek4 people (object li ) dizisinden yaşları 5 fazlasıyla değişmiş ve salary eklenmiş olarak (diger elemanlari duran) yeni bir object li dizi oluşturalım

   const yeniPeople=  people.map((kisi)=>({
    adi:kisi.name,
    soyadi:kisi.surname,
    yas:kisi.age+5,
    is:kisi.job,
    salary:30000

   }))
   console.log(yeniPeople);
   console.log(people);



//* Ornek5 başharfi M olan elemanların name ini büyük harfli yaz, hepsinin yaslarını 2 kat yap, hepsinin job larının önüne senior kelimesi ekleyelim ve sadece bunları yeni bir diziye atalım

// const updatePeople=people.map((kisi)=>({
// name:kisi.name.startsWith("M")? kisi.name.toUpperCase():kisi.name,
// age:kisi.age*2,
// job:"senior "+ kisi.job

// }))
// console.log(updatePeople);
// console.log(people);

 
//* Ornek5 başharfi M olan elemanların name ini büyük harfli yaz, hepsinin yaslarını 2 kat yap, hepsinin job larının önüne senior kelimesi ekleyelim ve sadece bunları yeni bir diziye atalım

const updatePeople=people.map((kisi)=>({
name:kisi.name.startsWith("M")? kisi.name.toUpperCase():kisi.name,
age:kisi.age*2,
job:"senior "+ kisi.job

}))
console.log(updatePeople);
console.log(people);
 
//* Ornek6: ortalama yasi hesaplayiniz.

console.log(people.reduce((toplam,kisi)=>toplam+kisi.age,0)/people.length)

//* ornek7: Developer olanların adlarını ve yaşlarını yeni bir object olarak saklayın
 //* Ornek8 yası 33 ün üstünde olan kişilerin name lerini listele

 