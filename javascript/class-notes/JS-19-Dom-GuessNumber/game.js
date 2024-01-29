//*pc ye sayı tutturduk, 1-20 arasında olabilmesi için 20 ile çarpıp yukarı yuvarladık
let rastgeleNumberPc = Math.ceil(Math.random() * 20);

console.log(rastgeleNumberPc);

let message = document.querySelector(".msg");

let skor = 10;
let enYuksekSkor = 0;

//!her check butonuna basınca olacaklar
document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  //?tahmin girilmeden basılmasın
  if (!tahmin) {
    message.textContent = "lütfen bir tahmin giriniz";
  } else if (tahmin == rastgeleNumberPc) {
    //?tahmin doğruysa
    message.textContent = "Tebrikler bildiniz.. 🎉";

    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number").textContent = rastgeleNumberPc;

    //?enYuksekSkor u kontrol

    if (skor > enYuksekSkor) {
      enYuksekSkor = skor;
      document.querySelector(".top-score").textContent = enYuksekSkor;
    }



  } else {
    //?tahmin yanlışsa
    //?skor 1 den aşağı düşmemeli
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      tahmin < rastgeleNumberPc
        ? (message.textContent = "Arttır")
        : (message.textContent = "Azalt");
    } else {
      message.textContent = "Oyunu Kaybettiniz";
    //   skor--
      document.querySelector(".score").textContent = 0;
 document.querySelector("body").style.backgroundColor = "red";

    }
  }
});


//! Again tusuna basinca olacaklar (baslangic degerlerine dönülsün, arka ekran #2d3436 olsun)

document.querySelector(".again").addEventListener("click", () => {
 rastgeleNumberPc = Math.ceil(Math.random() * 20);
 console.log(rastgeleNumberPc);

 message.textContent="Oyun yeni oyuncu icin basliyor"

 document.querySelector("body").style.backgroundColor="#2d3436"

 document.querySelector(".number").textContent = "?";

 document.querySelector(".guess").value="";

 //? js deki kullanilan azaltilan scor, yeni oyuncu icin 10 olsun
skor = 10; // Bunu yazmazsak ikinci oyuncu birinci oyuncudan kalan hakla yani skorla devam eder.

 document.querySelector(".score").textContent = 10;



})