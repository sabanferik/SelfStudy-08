//Tek satırı yoruma almak için "//"

/* 
Birden 
fazla 
satır 
yoruma almak */

//! ÇIKTI ALMA VE KULLANICI İLE ETKİLEŞİM YÖNTEMLERİ

// ********Console Kullanımı************

console.log("Bu alan konsol alanıdır");
console.error("Bu bir hata mesajıdır") //! Hata mesajı yazdırma yöntemi
console.warn("Bu bir uyarı mesajıdır") //* Uyarı mesajı yazdırma yöntemi
console.clear()

console.table(
    [{name:"Harvey",age:30},
     {name:"Helen",age:40} ]
)


// ***********  ALERT **********
// alert("Bu bir uyarı mesajıdır")

// ************* DOCUMENT.WRITE ************** 
document.write("Browserda sonuç gösterme yöntemi <br>")

//**************PROMPT KULLANIMI *******/
ad=prompt("Adınızı Giriniz:")
console.log(ad," hoşgeldin");
document.write(ad," hoşgeldin")