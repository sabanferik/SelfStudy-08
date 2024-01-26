document.querySelector("h1").style.color="red"
document.querySelector("h1").style.textAlign="center"

let resim=document.querySelector(".resim")
let ses1=document.querySelector(".ses1")

//!ara butonuna tıklandığında

document.querySelector(".ara").onclick=()=>{
  resim.src = "./img/img.gif";
  // play() komutu html deki audio etiketini js de çalıştırır
  ses1.play();
  //sesin volume ünü 0 ile 1 arasında değer vererek ayarlayabilirsiniz
  ses1.volume = 0.1;
}

//! bağlat butonuna tıklandığında

document.querySelector(".baglat").onclick=()=>{
    
    resim.src = "./img/telbagla.gif";
    //pause( komutuyla calan audio sesini durdurabilirsiniz)
    ses1.pause();
}

//!konus butonuna tiklandiginda

document.querySelector(".konus").onclick=()=>{
    
    resim.src = "./img/telefon.gif";

    ses1.pause()
};

//! mous ile resmin üzerine gelindiginde

// resim.onmousover=()=>{}

resim.addEventListener("mouseover",()=>{
  
    resim.src = "./img/aslan2.jpeg";
    document.querySelector(".ses2").play();
    ses1.pause()
})

//! mous resmin üzerinden ayrildiginda 

resim.addEventListener("mouseout",()=>{
  
    resim.src = "./img/aslan1.jpeg";
    document.querySelector(".ses2").pause();
})