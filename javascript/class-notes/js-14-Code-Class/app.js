// Dizi metodları
// pop():dizinin son elemanını siler 
// shift():dizinin başındaki elemanı siler  
// push():dizinin sonuna eleman ekler 
// unshift() : dizinin başına eleman ekler 
// reverse():diziyi tersine çevirir
// splice(başlangıç indexi, kaç eleman alınacak(silinecek),eklenecek eleman (item1,item2....))
// sort(): sıralama yapar (stringlerde ifadelerde ascii kodlarına göre alfabetik sıralama)
// sort((a-b)=> a-b)
// includes(deger): içeriyor mu? (true -false)
// indexOf(deger): değerin kaçıncı indexte olduğunu verir
// join(" "):bir dizideki birleştirerek stringe dönüştürür. 
// slice():diziden bir parçayı almamızı sağlar 
// concat(): iki diziyi birleştirir 
// every: dizi içindeki her eleman için bir callback fonksiyon çalıştırır ve callback fonksiyondaki şartı kontrol encodeURI.Eğer tüm elemanlar şartı sağlıyorsa true değer döner

// const numbers=[45,16,34,23]
// numbers.every((num)=>  num>18 ) //false

// const numbers1=[45,16,34,23]
// numbers1.every((num)=>  num>15 )  // true

// some :  dizi içindeki her eleman için bir callback fonksiyon çalıştırır ve callback fonksiyondaki şartı kontrol eder.  Eğer tek bir eleman bile şartı sağlıyorsa true değer döner

// const numbers=[45,16,34,23]
// numbers.some((num)=>  num >18 ) //true

// const numbers1=[13,14,12,11]
// numbers1.some((num)=>  num >18 )  //false

/* -------------------------------------------------------------------------- */
// map: bir dizi için bir callback fonsiyon çalıştırır veher eleman için o fonksiyondan çıkan sonucu yeni bir diziye aktarır.aktarır
// forEach: bir dizi için bir callback fonsiyon çalıştırır.Geriye bir değer döndermez. 
// filter :bir dizi için bir callback fonsiyon çalıştırır.Verilen koşulu kontrol eder ve sadece koşulu sağlayanları dönderiri
// reduce: dizideki elemanları toplayarak tek bir değer dönderir.

/* -------------------------------------------------------------------------- */

//! 1.Bir dizideki elemanlarin ortalamasini bulan fonksiyon 

const numbers = [34,56,56,87,90];

// function averageOfArray(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// }

// console.log(averageOfArray(numbers)); 

//2.YOL
let toplam = 0
const ortalama = () => {
    for (let i = 0; i < numbers.length; i++)
    toplam += numbers[i]
return toplam
}
console.log(ortalama() / numbers.length);

// 3.yol
function avarage(array){
    let valid=array.filter((num)=>num === typeof "number" && !isNaN(num))
    if (valid.length >0) {
         let toplam = array.reduce((topla, b) => topla+b, 0);
    }
 
    return toplam / array.length;
}

const array = [34,56,56,87,90]
console.log(avarage(array));

 
 

//!2-Girilen bir cümledeki kelime sayisini bulan fonksiyonu yaziniz
// // 1.yol
// function countWords(cumle) {
//     const words = cumle.split(" ");
//     return words.length;
//   }
  
//   console.log(countWords("Java Script bana zor geliyor"));

// 2.yol

sentence="Merhaba Cohort DE-08"
function countWords(newSentence){
 const sumOftheWordsCount=newSentence.split(" ").length
 // Birden fazla boşluğu çıkartmak için yöntem
//  const sumLetters = sentence.split(/\s+/).length;
return sumOftheWordsCount   
}

console.log(countWords(sentence))


  //!3- Bu cümleyi tersine cevirecek ve büyük harflerden olusan yeni bir cümleye cevirecek fonksiyonu yaziniz

  // 1. yol
let sentence = "Java Script bana zor geliyor";  

function changedWord(newSentence){
    let changedSentence = newSentence.toUpperCase().split(/\s+/).reverse().join(" ");
    return changedSentence
}
console.log(changedWord(sentence));

// 2. yol helen hc

function changeWord(newSentence) {
  let changedSentence = newSentence.toUpperCase().split(/\s+/).reverse().join(" ");
  return changedSentence;
}
console.log(changeWord(sentence));

//! 4-Size bir cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir: 


//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.

//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

test: "I like Clarusway" // Output : I found at Clarusway at 3!
test : "I like bootcamps" // Output I can't find Clarusway :(

// 1. yol
const sentence2 = "I like Clarusway";
const findSpecificWord = (ourSentence, specificWord) => {
  const stringToArray = ourSentence.split(/\s+/);
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray.includes(specificWord))
      return `I found ${specificWord} at ${
        stringToArray.indexOf(specificWord) + 1
      }!`;
    else return `I cant find ${specificWord}!`;
  }
};
console.log(findSpecificWord(sentence2, "Clarusway"));


// 2. yol

const findClarusway = (sentence) => {
    let index = sentence.split(" ").indexOf("Clarusway");
    return index !== -1 ? `I found Claruswat at ${index+1}!`: "I can't find Clarusway";
   }
   console.log(findClarusway("I like Clarusway"));

//    // Helen hocanın kodu

//    function findClarusway(sentence){
//     if (sentence.includes("Clarusway")){
//         return `I found Clarusway at ${sentence.split(" ").indexOf("Clarusway")+1}`
//     }
//     else{
//         return "I can't find Clarusway :("
//     }

// }

// const sent="I like Clarusway"
// console.log(findClarusway(sent))

   //! Alternatif soru 1: Bu şekilde giirlen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
    // 612453789   bu hale dönüştüren program

    const string = "612453789"




   //!5- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program 

   // örnegin :
    // removeDuplicated([1,0,1,0,1]) // Output [1,0]
    // removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"] 

    // 1. yol
      
const inputArray = [1, 0, 1, 0, 1];
const inputArray2 = ["the", "small", "cat", "the", "cat"];
function removedDuplicated(arr) {
  let uniqueArray = [];
  arr.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
}
console.log(removedDuplicated(inputArray)); // Output [1,0]
console.log(removedDuplicated(inputArray2)); // ouput["the","small","cat"]

// 2. yol helen hocanın kodu


function removeDuplicated(arr){
  const duplicatedArray=[]
  for (let i of arr){
      if (!duplicatedArray.includes(i)){
          duplicatedArray.push(i)
      }
  }

  // arr.forEach((element) => {
  //     if (!uniqueArray.includes(element)) {
  //       uniqueArray.push(element);
  //     }
  //   });

return duplicatedArray
}
console.log(removeDuplicated([1,0,1,0,1]))
console.log(removeDuplicated(["the","small","cat","the","cat"]))

  //! Alternatif soru 2: Bir dizi içindeki sayıları asal olanlarını filtreleyen bir  fonksiyonu oluşturun.(filter ile yapılması önerilen)

  //removeDuplicated(["the","small","cat","the","cat"])
  // removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"]

  function remowedDuplicated(arr) {
    const duplicateArray = [];
    for (let i of arr){
      if (duplicateArray.includes(i)){
        duplicateArray.push(i)
      }
    }
    //  arr.forEach((element) => {
    //  if (!uniqueArray.includes(element)) {
    //    uniqueArray.push(element);
    //  }
    // })
    return duplicateArray
    
  }
 
console.log(removedDuplicated([1,0,1,0,1]));
console.log(removedDuplicated(["the","small","cat","the","cat"]));

//! 6- Bir dizide ilk harfi A ile baslayan elemanlari yeni bir diziye alan fonksiyon

const words =["Apple", "Banana", "Orange", "Avocado" ,"Grape", "Apricot"];


const baslayanA = words.filter(word => word.charAt(0).toUpperCase() === 'A');

console.log(baslayanA);




//! Alternatif soru 3: Bir diziyi tersine çeviren bir map fonksiyonu oluşturun. 

const originalArray = [1, 2, 3, 4, 5];

const reversedArray = originalArray.map((element, index, array) => array[array.length - 1 - index]);

console.log(reversedArray);


//! Alternatif soru 4: verilen sayıyı yazıya çeviren program

const sayiyiYaziyaCevir = (sayi) => {
    const birler = ["", "Bir", "İki", "Üç", "Dört", "Beş", "Altı", "Yedi", "Sekiz", "Dokuz"];
    const onlar = ["", "On", "Yirmi", "Otuz", "Kırk", "Elli", "Altmış", "Yetmiş", "Seksen", "Doksan"];
  
    if (sayi === 0) {
      return "Sıfır";
    }
  
    const birinciBasamak = birler[sayi % 10];
    const ikinciBasamak = onlar[Math.floor(sayi / 10)];
  
    return ikinciBasamak + birinciBasamak;
  };
  
  // Test verisi
  const testSayisi = 42;
  
  // Sonucu yazdır
  console.log(`${testSayisi} sayısı: ${sayiyiYaziyaCevir(testSayisi)}`);

  //! 7-bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
// a- Kaç kişi zam olsa bile 20000 altında kalıyor
let salaries=[18000,13000,17000,24000,18500,21000,19300]
  
// // 1. yöntem mi
// const zamVeEkOdeme = (maaslar) => {
//     const zamOrani = 0.10;
//     const altLimit = 20000;
//     const ekOdemeMiktari = 1000;
  
//     const yeniMaaslar = maaslar.map((maas) => {
//       const zamliMaas = maas * (1 + zamOrani);
//       return zamliMaas < altLimit ? zamliMaas + ekOdemeMiktari : zamliMaas;
//     });
  
//     return yeniMaaslar;
//   };
  
  
//   const maaslar = [18000, 13000, 17000, 24000, 18500, 21000, 19300];
  
  
//   const yeniMaaslar = zamVeEkOdeme(maaslar);
  
  
//   console.log("Eski Maaşlar:", maaslar);
//   console.log("Yeni Maaşlar:", yeniMaaslar);


//   //2. yöntem asiye (Bu yöntem sadece kac kisi 20000 altinda kaldigini buluyor)
//   let salariesEk = [18000, 13000, 17000, 24000, 18500, 21000, 19300];
// const under20K = salariesEk.filter((salary) => salary + salary * 0.1 < 20000);
// console.log(under20K.length);


//3. Helen hc

// a- Kaç kişi zam olsa bile 20000 altında kalıyor
let salaries=[18000,13000,17000,24000,18500,21000,19300]

let belowundder20k=salaries.filter((salary)=>salary * 1.1 <20000).length
console.log(belowundder20k)

// b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı

// let addBudget=salaries.map((salary)=>{
//     let increased=salary * 1.1
//     return increased <20000 ? 20000-increased : 0
// })
// let totalPayment=addBudget.reduce((sum,payment)=> sum+payment,0)

let addBudget=salaries.map((salary)=>{
    let increased=salary * 1.1
    return increased <20000 ? 20000-increased : 0
}).reduce((sum,payment)=> sum+payment,0)

console.log(addBudget)

//! 7-b : Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı

// //1. yöntem

// const maaslar = [18000, 13000, 17000, 24000, 18500, 21000, 19300];
// const zamOrani = 0.10;
// const altLimit = 20000;
// const ekOdemeMiktari = 1000;

 
// const zamliMaaslar = maaslar.map((maas) => maas * (1 + zamOrani));
// const altLimitAltindakiler = zamliMaaslar.filter((zamliMaas) => zamliMaas < altLimit);

 
// const belowUnder20k = altLimitAltindakiler.length;

 
// const toplamEkOdeme = belowUnder20k * ekOdemeMiktari;

 
// console.log("Toplam Ek Ödeme Yapılması Gereken Kişi Sayısı:", belowUnder20k);
// console.log("Toplam Ek Ödeme Miktarı:", toplamEkOdeme);


//2 yol helen hocanın kodu

let addBudget=salaries.map((salary)=>{
    let increased=salary * 1.1 
    return increased <20000 ? 20000-increased : 0
}).reduce((sum,payment)=> sum+payment,0)

console.log(addBudget);


// EXTRA QUESTIONS

//!1-Bu şekilde girilen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program

let string="altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
let stringNumber=[]

const splitToNumber=(string) => {

   let newString=string.split(",")
   console.log(newString);
   for (let i=0;i<=newString.length-1;i++){
 
    if (newString[i]==="bir") stringNumber.push(1)
    else if (newString[i]==="iki") stringNumber.push(2)
    else if (newString[i]==="üç") stringNumber.push(3)
    else if (newString[i]==="dört") stringNumber.push(4) 
    else if (newString[i]==="beş") stringNumber.push(5)
   else if (newString[i]==="altı")stringNumber.push(6)
   else  if (newString[i]==="yedi") stringNumber.push(7)
   else  if (newString[i]==="sekiz") stringNumber.push(8)
   else stringNumber[i]=9 
   }
   
return stringNumber.join("")
}

console.log(splitToNumber(string));





//!2-Bir dizi içindeki sayıları asal olanlarını filtreleyen bir  fonksiyonu oluşturun.(filter ile yapılması önerilen)

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Asal sayıları filter fonksiyonu ile bulma
  const asalSayilar = numbers1.filter(number => {
    if (number < 2) {
      return false; // 2'den küçük sayılar asal değildir
    }
    
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false; // Tam bölünebilen sayılar asal değildir
      }
    }
    
    return true; // Geriye kalan sayılar asaldır
  });
  
  console.log(asalSayilar);


//!3-Bir diziyi tersine çeviren bir map fonksiyonu oluşturun. 
const originalArray = [1, 2, 3, 4, 5];

// Map fonksiyonu ile diziyi tersine çevirme
const reversedArray = originalArray.map((value, index, array) => array[array.length - 1 - index]);

console.log(reversedArray);

//!4 -verilen sayıyı yazıya çeviren program
function sayiyiYaziyaCevir(sayi) {
    const birler = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
    const onlar = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
  
    let yazi = "";
  
    // Yüzler basamağı
    if (sayi >= 100) {
        yazi += birler[Math.floor(sayi / 100)] + "yüz";
        sayi %= 100;
    }
  
    // Onlar basamağı
    if (sayi >= 10) {
        yazi += onlar[Math.floor(sayi / 10)];
        sayi %= 10;
    }
  
    // Birler basamağı
    if (sayi > 0) {
        yazi += birler[sayi];
    }
  
    return yazi;
  }
  
  // Örnek kullanım
  let sayi = 354;
  let yaziKarşılık = sayiyiYaziyaCevir(sayi);
  console.log(yaziKarşılık); // Çıktı: üçyüzelli-dört
  
  

