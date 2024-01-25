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
