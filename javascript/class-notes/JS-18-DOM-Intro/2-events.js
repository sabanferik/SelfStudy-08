//? METHOD-1 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//*example1 onmouseover, onmouseout

const js=document.querySelector("#js")
const badi=document.querySelector("#badi")

js.onmouseover=()=>{
badi.style.backgroundColor="pink"

}

js.onmouseout=()=>{
    badi.style.backgroundColor="red"
}

//*example2 onclick-ondoubleclick

const bir=document.querySelector(".bir")
const iki=document.querySelector(".iki")

bir.onclick=()=>{

    bir.src = "./img/logo2.png";
    iki.src = "./img/js_logo.png";
}

iki.onclick=()=>{
bir.src = "./img/js_logo.png";
iki.src = "./img/logo2.png";

}

iki.ondblclick=()=>{
    iki.src="./img/bir.jpeg"
}

//*example3 
const buton=document.querySelector("#btn")

buton.onclick=()=>{
badi.style.backgroundImage="linear-gradient(to right, purple,gray)"

document.querySelector("#par").style.fontSize="40px"

buton.textContent="TIKLANDI"
}
