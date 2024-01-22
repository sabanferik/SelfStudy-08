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