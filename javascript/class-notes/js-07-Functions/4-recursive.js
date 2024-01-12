// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.


//! sayma ilk 6 teriminin toplamini bulunuz


const add=(n)=>{
 let toplam=0;   
    for (let i = 1; i <= n; i++) {
        toplam=toplam+i
    }
    return toplam
}


console.log(add(9))