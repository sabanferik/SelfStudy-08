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

 
 

//!2- Verilen bir cümledeki kelime sayisini bulan fonksiyonu yaziniz

function countWords(cumle) {
    const words = cumle.split(" ");
    return words.length;
  }
  
  console.log(countWords("Java Script bana zor geliyor"));

  //!3- Bu cümleyi tersine cevirecek ve büyük harflerden olusan yeni bir cümleye cevirecek fonksiyonu yaziniz

let sentence = "Java Script bana zor geliyor";  

function changedWord(newSentence){
    let changedSentence = newSentence.toUpperCase().split(/\s+/).reverse().join(" ");
    return changedSentence
}
console.log(changedWord(sentence));

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

   // Helen hocanın kodu

//    function findClarusway(sentence) {
//        if (sentence.includes("Clarusway")){
//         return `I found Clarusway at ${sentence.split(" ").sentence.indexOf("Clarusway") + 1}`
//        } else {
//         return "I can't find Clarusway :("
//        }
//        }
   
//    const sent="Ilike Clarusway"
//    findClarusway(sent)

   //! Alternatif soru 1: Bu şekilde giirlen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
    // 612453789   bu hale dönüştüren program

    const string = "612453789"




   //!5- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program 

   // örnegin :
    // removeDuplicated([1,0,1,0,1]) // Output [1,0]
    // removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"] 
      
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


  //! Alternatif soru 2: Bir dizi içindeki sayıları asal olanlarını filtreleyen bir  fonksiyonu oluşturun.(filter ile yapılması önerilen)

  removeDuplicated(["the","small","cat","the","cat"])