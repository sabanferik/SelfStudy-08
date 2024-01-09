//? : Tahmin Oyunu
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

let devam;

do {
  const rastgele = Math.ceil(Math.random() * 20);
  console.log(rastgele);

  let hak = 5;

  while (hak > 0) {
    const guess = +prompt("sayı tahmin ediniz");

    hak--;

    if (rastgele == guess) {
      console.log("tebrikler bildiniz 🥳");
      break; //tahmin doğruysa hakkım varsa bile döngü kırılsın diye
    } else if (rastgele > guess) {
      console.log("ARTTIR📈");
      console.log(hak, "hakkınız kaldı");
    } else {
      console.log("AZALT📉");
      console.log(hak, "hakkınız kaldı");
    }

    if (hak == 0) {
      console.log(
        "üzgünüz hakkınız kalmadı , bilgisayarın tuttuğu sayı",
        rastgele
      );
    }
  }
  devam = prompt("devam etmek istiyorsanız e/E giriniz");
} while (devam.toUpperCase() == "E");

console.log("döngüden çıktık");
