//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car ={
    title:"BMW",
    model:1990,
    engine:1.6
}

//*1. klasik yol
console.log(car.engine);
console.log(car["engine"]);

//*2. yol destructuring

const {title,model}=car
console.log(title);
console.log(model);
// console.log(engine);

const arabalar = {
  car1: {
    marka: "BMW",
    model: 1990,
    renk: "red",
  },
  car2: {
    marka: "MERCEDES",
    model: 1980,
    renk: "white",
  },
  car3: {
    marka: "AUDI",
    model: 2000,
    renk: "gray",
  },
};

console.log(arabalar.car2.marka);

const {car1,car2,car3}=arabalar

console.log(car2.marka);
console.log(car3.model);

const {marka, renk}=car1

const{marka:marka2,renk:renk2}=car2

console.log(marka);
console.log(renk);
console.log(renk2);
console.log(marka2);

//! car1 için marka model ismini kullandık, o yüzden car2 de yeni isimler verdik. ilk object i oluştururken key leri (marka,model..) farklı verebilirdik, bu sayede yeni isim vermekle uğraşmazdık, ama o zamanda for in ile dönerken her bir marka yı yazdır diyemezdik, çünkü car2 nin içinde mesela marka2 yazıyor olacağından, onu tanıyamazdı

//* object- object gezinme ******//

for (let i in arabalar) {
  console.log(i);
   console.log(arabalar[i].marka);
}


//* ornek: Array-Object gezinme-DEST
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

//* 1.yol
people.forEach((kisi)=>{

    // console.log(kisi.name);
    // console.log(kisi.surname);
    // console.log(kisi.job);

 
    const{name,surname,job}=kisi

console.log(name);
console.log(surname);
console.log(job);
console.log(kisi.age);

})
console.clear()
//*2.yol
people.forEach(({ name, surname, job }) => {

console.log(name);
console.log(surname);
console.log(job);

});


//? fonksiyonlar object parametreleri dest yapabilir


const kontrol =(veri)=>{

console.log(veri);
console.log(veri.adi);

const{adi, renk,yildiz}=veri
console.log(adi);

}

kontrol({adi:"GS", renk:"sarı-kırmızı", yildiz:4})
kontrol({adi:"FB", renk:"sarı-lacivert", yildiz:3})

const kontrol2 = ({adi,renk,yildiz}) => {
 
console.log(adi);
console.log(yildiz);

};

kontrol2({adi:"BJK", renk:"siyah-beyaz", yildiz:3})


//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel = {
    pName: "Johny",
    surname: "DEEP",
    job: "actor",
    age: 55,
    salary:30000
  
  };

const{pName,surname,...gerisi}=personel

console.log(pName);
console.log(gerisi);
console.log(gerisi.job);

//* OBJECT KOPYA (rest)

//? orjinal object le ayni sartlarda bir object yaptim
const ikizPersonel=personel

//?orjinal diziden farkli bir kopya olusturdum

const{...personel2}=personel

 


