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