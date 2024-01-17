// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):


//! * --------Function-Declaration----------------------------*/ 
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:****************************************************************/
//?Fonksiyonun tanımlanması

// yazdir() // invoke yada call islemi

//****örnek1: */
function yazdir() {
    console.log("e daha daha nasilsiniz");
}

yazdir()

//* örnek2:Parametreli Fonksiyon

function adYazdir(ad,ikinci, z) {
    console.log(ad + ikinci + z);
}

adYazdir("burak", "elif", "abdulkadir")
adYazdir("saban", "esra", "ömer")

//**** örnek3 parametreli, dönüs degerli (return)****

function yasHesapla(isim, tarih){
    console.log(`Benim adim ${isim} ve ben ${2023-tarih} yasindayim`);
    return 2023-tarih
}

const fatma=yasHesapla("fatma", 1990) // 33
const emre=yasHesapla("emre", 1980) //43
const kagan=yasHesapla("kagan",1995) //28

//? lütfen fatma emre ve kagan in yaslarinin ortalamasini aliniz

console.log((fatma+emre+kagan)/3);


//*örnek4: parametreli, dönüs degerli (return)****

//tek-cift sorgulamasi

        console.log( isEvenOdd(5)) //call invoke
        console.log( isEvenOdd(8)) //call invoke
        console.log( isEvenOdd(-4)) //call invoke
function isEvenOdd(sayi) {
    return sayi % 2 === 0 ? "cifttir" : "tektir";
}




//* örnek5 : argument keywordüyle parametre karsilama




function sumAll(){
    // console.log(arguments);
    // console.log(arguments[0]);


    let toplam=0
    for(let i=0;i<arguments.length;i++){
        toplam+=arguments[i]
    }



    return toplam
}

    console.log(sumAll(25,34,56,78,12,45,67,87,23));  