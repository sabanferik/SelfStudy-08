//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================


//*example buton style

const buton = document.getElementById("btn")

buton.style.width="200px"
buton.style.height="80px"
buton.style.fontSize="80px"
buton.style.backgroundColor="red"

//*example2 paragraf style

const paragraf=document.getElementById("par").style
paragraf.width="200px"
paragraf.height="80px"
paragraf.fontSize="30px"
paragraf.color="red"
paragraf.margin="200px"

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*================================================

const resim=document.getElementsByTagName("img")
console.log(resim);
resim[0].style.width="300px"

resim[1].style.border="5px solid red"

//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

const baslik= document.getElementsByClassName("H1")
console.log(baslik);

baslik[0].style.color="purple"

baslik[1].style.fontSize="50px"


//* HTMLCollection larda ARRAY i degistirmeyen metodlari kullanabilirsiniz
for(let i=0; i< baslik.length;i++){

    baslik[i].style.color="red"
    baslik[i].style.textAlign="center"
}


baslik[0].innerHTML="<a href='https://clarusway.com/'>DOM COK KOLAY</a>"
//* innerHTML icerik ve etiket ekler
//* textConten sadece icerik degistirmeye yarar


baslik[1].textContent="IYIMISIN?"
//* sadece içerik değişecekse textContent tercih edilir, ama innerHTML de etiketi değiştirebildiği gibi, sadece içeriği de değiştirebilir


//* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================

document.querySelector("title").text.Content="DOM MANIPULATION"
document.querySelector("#badi").style.backgroundImage="linear-gradient(green,pink)"

document.querySelector(".H2").style.color="pink"

const parag= document.querySelectorAll("p")
console.log(parag);// NodeList 

parag[1].style.fontSize="70px"

// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin-node) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.


// HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.
